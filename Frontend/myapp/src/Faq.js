import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from "./Navbar";
import Cont from './cont';
export default function Faq() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/faqs/')
            .then(response => response.json())
            .then(data => setFaqs(data))
            .catch(error => console.error('Error fetching FAQs:', error));
    }, []);

    return (
        <div className="body">
            <a href="top"></a>
            <div id="oo">
                <a href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0" />
                    </svg>
                </a>
            </div>
            <Navbar />
            <div className="about d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h1 className="text-success">FAQs
                                <div className="background-text">FAQs</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto">
                        <h3>FAQs *</h3>
                    </div>
                </div>
                <div className='container'>
                    <Accordion defaultActiveKey="0">
                        {faqs.map((faq, index) => (
                            <Accordion.Item eventKey={index} key={faq.id} className="hr-hover">
                                <Accordion.Header>{faq.question}</Accordion.Header>
                                <Accordion.Body>{faq.answer}</Accordion.Body>
                                <hr color="white" />
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </section>
            <Cont />
        </div>
    );
}
