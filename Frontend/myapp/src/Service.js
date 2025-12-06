import Cont from "./cont";
import Navbar from "./Navbar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Service() {

    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState("Body shop");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all services on component mount
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/services/');
                const fetchedServices = response.data;

                setServices(fetchedServices);

                const bodyShopService = fetchedServices.find(service => service.name === "Body Shop");

                if (bodyShopService) {
                    setSelectedService(bodyShopService);
                } else if (fetchedServices.length > 0) {
                    setSelectedService(fetchedServices[0]);
                }
                setLoading(false);
            } catch (err) {
                setError('Error fetching services');
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    // Handle when a service is clicked
    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    if (loading) {
        return <div>loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
            {/* NAVBAR */}
            <Navbar />
            <a href="top"></a>
            <div id="oo">
                <a href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0" />
                    </svg>
                </a>
            </div>
            <div className="about d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h1 className="text-success">
                                {selectedService && selectedService.name ? "SERVICES" : "SERVICES"}
                                <div className="background-text">SERVICES</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8 mx-auto text-center">
                            <h1 className="text-success">Our Services</h1>
                            <h4>Services</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="list-group container" >
                                <div className="list-group-item list-group-item-action text-white bg-danger">
                                    All Service
                                </div>
                                {services.map((service) => (
                                    <a
                                    href="#"
                                        className={`list-group-item list-group-item-action ${service.isActive ? 'active' : ''}`}
                                        key={service.id}
                                        onClick={() => handleServiceClick(service)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {service.name}
                                        <span className="arrow text-black">&rarr;</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                {selectedService && (
                                    <div>
                                        <h2>Sub-Services of {selectedService.name}</h2>
                                        {selectedService.sub_services && selectedService.sub_services.length > 0 ? (
                                            <div className="row">
                                                {selectedService.sub_services.map((subService) => (
                                                    <div className="col-lg-6 col-sm-6 g-4" key={subService.id}>
                                                        <div className="servicestyle">
                                                            <div className="serviceimg">
                                                                <img src={subService.image} alt={`${subService.name} icon`} />
                                                                <div className="new-card-effect">
                                                                    <a href="/Book" className="me-2">
                                                                        <h5 className="mt-4 mb-2 text-danger">{subService.name}</h5>
                                                                    </a>
                                                                    <p>
                                                                        {subService.description.length > 100 ?
                                                                            `${subService.description.substring(0, 200)}...` :
                                                                            subService.description}
                                                                    </p>
                                                                    <a href="/Book" className="me-2 tt">
                                                                        Book Appointment
                                                                        <span className="arrow text-white ">&rarr;</span>
                                                                    </a>
                                                                </div>
                                                                <br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>No sub-services available for this service.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div
                            className="col-lg-4"
                            style={{
                                position: "sticky",
                                top: "80px", // distance from top of viewport
                                height: "calc(100vh - 100px)",
                                overflowY: "auto",
                                zIndex: 10,
                            }}
                        >
                            <div className="list-group container">
                                <div className="list-group-item list-group-item-action text-white bg-danger">
                                    All Service
                                </div>
                                {services.map((service) => (
                                    <a
                                        href="#"
                                        key={service.id}
                                        onClick={() => handleServiceClick(service)}
                                        className={`list-group-item list-group-item-action ${service.isActive ? "active" : ""
                                            }`}
                                        style={{
                                            cursor: "pointer",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        {service.name}
                                        <span className="arrow text-black">&rarr;</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                {selectedService && (
                                    <div>
                                        <h2>Sub-Services of {selectedService.name}</h2>
                                        {selectedService.sub_services && selectedService.sub_services.length > 0 ? (
                                            <div className="row">
                                                {selectedService.sub_services.map((subService) => (
                                                    <div className="col-lg-6 col-sm-6 g-4" key={subService.id}>
                                                        <div
                                                            className="servicestyle"
                                                            style={{
                                                                border: "1px solid #ddd",
                                                                borderRadius: "10px",
                                                                padding: "15px",
                                                                backgroundColor: "#fff",
                                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                                            }}
                                                        >
                                                            <div className="serviceimg" style={{ textAlign: "center" }}>
                                                                <img
                                                                    src={subService.image}
                                                                    alt={`${subService.name} icon`}
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "180px",
                                                                        objectFit: "cover",
                                                                        borderRadius: "8px",
                                                                    }}
                                                                />
                                                                <div className="new-card-effect">
                                                                    <a href="/Book" className="me-2" style={{ textDecoration: "none" }}>
                                                                        <h5 className="mt-4 mb-2 text-danger">{subService.name}</h5>
                                                                    </a>
                                                                    <p style={{ fontSize: "14px", color: "#555" }}>
                                                                        {subService.description.length > 100
                                                                            ? `${subService.description.substring(0, 200)}...`
                                                                            : subService.description}
                                                                    </p>
                                                                    <a
                                                                        href="/Book"
                                                                        className="me-2 tt"
                                                                        style={{
                                                                            backgroundColor: "#dc3545",
                                                                            color: "white",
                                                                            padding: "6px 12px",
                                                                            borderRadius: "4px",
                                                                            textDecoration: "none",
                                                                            display: "inline-block",
                                                                            marginTop: "5px",
                                                                        }}
                                                                    >
                                                                        Book Appointment <span className="arrow text-white">&rarr;</span>
                                                                    </a>
                                                                </div>
                                                                <br />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>No sub-services available for this service.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> */}

                </div>
            </section>


            <Cont />

            {/* // Modal */}
        </div>
    );
}


