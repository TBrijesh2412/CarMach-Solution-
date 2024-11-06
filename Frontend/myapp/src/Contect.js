// import Navbar from "./Navbar";
// import React from 'react'


// export default function Contact() {
//     return (
//         <div className="body">
//             <Navbar />
//             <a href="top"></a>
//             <div id="oo">
//                 <a href="#top">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
//                         <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0" />
//                     </svg>
//                 </a>
//             </div>
//             <div className="about d-flex align-items-center" id="home">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-7 text-center mx-auto">
//                             <h1 className="display-4 text-success">CONTACT Us
//                                 <div className="background-text">Contact</div>
//                             </h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* CONTACT */}
//             <section id="contact">
//                 <div className="container">
//                     <div className="row mb-5">
//                         <div className="col-md-8 mx-auto text-center">
//                             <h1 className="text-success">CONTACT</h1>
//                         </div>
//                     </div>
//                     <form action className="row g-3 justify-content-center">
//                         <div className="col-md-4">
//                             <input type="text" className="form-control" placeholder="Full Name" id="name" />
//                         </div>
//                         <div className="col-md-4">
//                             <input type="text" className="form-control" placeholder="Mobile No." id="phone" />
//                         </div>
//                         <div className="col-md-4">
//                             <input type="text" className="form-control" placeholder="Enter E-mail" id="email" />
//                         </div>
//                         <div className="col-md-12">
//                             <input type="text" className="form-control" placeholder="Enter Subject" />
//                         </div>
//                         <div className="col-md-12">
//                             <textarea name id cols={30} rows={5} className="form-control" placeholder="Enter Message" defaultValue={""} />
//                         </div>
//                         <div className="col-md-12 d-grid mb-4">
//                             <button className="btn" onclick="valid()">Contact us</button>
//                         </div>
//                     </form>
//                 </div>
//             </section>{/* CONTACT */}
            // <section>
            //     <div className="container">
            //         <div className="row g-4">
            //             <div className="col-lg-8">
            //                 <div>
            //                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73016.91910054155!2d72.5082169752142!3d23.013104139589498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aee6c89a621%3A0x872df2d55fbb0008!2sLJ%20University!5e0!3m2!1sen!2sin!4v1711868742061!5m2!1sen!2sin" width="100%" height={550} style={{ border: 0 }} />
            //                 </div>
            //             </div>
            //             <div className="col-lg-4">
            //                 <h1>Contact Info</h1>
            //                 <div className="d-flex mt-5 hr-hover">
            //                     <div className="me-4">
            //                         <div className="start p-3"><img src="/img/Add.png" alt="" /></div>
            //                     </div>
            //                     <div>
            //                         <h5 className="text-success">Address :</h5>
            //                         <hr color="white" />
            //                         <p>Ahmdabad</p>
            //                     </div>
            //                 </div>
            //                 <div className="d-flex hr-hover">
            //                     <div className="me-4">
            //                         <div className="start p-3"><img src="/img/call.png" alt="" /></div>
            //                     </div>
            //                     <div>
            //                         <h5 className="text-success">Ph No.</h5>
            //                         <hr color="white" />
            //                         <p>+91 1234567890</p>
            //                         <p>+91 0123456789</p>
            //                     </div>
            //                 </div>
            //                 <div className="d-flex hr-hover">
            //                     <div className="icon-border me-4">
            //                         <div className="start p-3"><img src="/img/time.png" alt="" /></div>
            //                     </div>
            //                     <div>
            //                         <h5 className="text-success">Working Time :</h5>
            //                         <hr color="white" />
            //                         <p>08:00 AM to 08:00 PM</p>
            //                         <p className="text-danger">Sunday Close</p>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>
//         </div>
//     );
// }


import Navbar from "./Navbar";
import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful submission
                alert('Contact form submitted successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                // Handle error response
                alert('Error submitting form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form. Please try again.');
        }
    };

    return (
        <div className="body">
            <Navbar />
            <div className="about d-flex align-items-center" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h1 className="display-4 text-success">CONTACT Us
                                <div className="background-text">Contact</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section id="contact">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 mx-auto text-center">
                            <h1 className="text-success">CONTACT</h1>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Full Name" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Mobile No." id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Enter E-mail" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                            <input type="text" className="form-control" placeholder="Enter Subject" name="subject" value={formData.subject} onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                            <textarea cols={30} rows={5} className="form-control" placeholder="Enter Message" name="message" value={formData.message} onChange={handleChange} />
                        </div>
                        <div className="col-md-12 d-grid mb-4">
                            <button className="btn" type="submit">Contact us</button>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73016.91910054155!2d72.5082169752142!3d23.013104139589498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aee6c89a621%3A0x872df2d55fbb0008!2sLJ%20University!5e0!3m2!1sen!2sin!4v1711868742061!5m2!1sen!2sin" width="100%" height={550} style={{ border: 0 }} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h1>Contact Info</h1>
                            <div className="d-flex mt-5 hr-hover">
                                <div className="me-4">
                                    <div className="start p-3"><img src="/img/Add.png" alt="" /></div>
                                </div>
                                <div>
                                    <h5 className="text-success">Address :</h5>
                                    <hr color="white" />
                                    <p>Ahmdabad</p>
                                </div>
                            </div>
                            <div className="d-flex hr-hover">
                                <div className="me-4">
                                    <div className="start p-3"><img src="/img/call.png" alt="" /></div>
                                </div>
                                <div>
                                    <h5 className="text-success">Ph No.</h5>
                                    <hr color="white" />
                                    <p>+91 1234567890</p>
                                    <p>+91 0123456789</p>
                                </div>
                            </div>
                            <div className="d-flex hr-hover">
                                <div className="icon-border me-4">
                                    <div className="start p-3"><img src="/img/time.png" alt="" /></div>
                                </div>
                                <div>
                                    <h5 className="text-success">Working Time :</h5>
                                    <hr color="white" />
                                    <p>08:00 AM to 08:00 PM</p>
                                    <p className="text-danger">Sunday Close</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
