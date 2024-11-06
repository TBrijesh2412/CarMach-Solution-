import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Cont from "./cont";


export default function Book() {

    const commonValues = {
        Toyota: [
            { name: "Camry", price: 1000 },
            { name: "Corolla", price: 1200 },
            { name: "RAV4", price: 1100 },
            { name: "Highlander", price: 1800 },
            { name: "Tacoma", price: 1700 },
        ],
        Volkswagen: [
            { name: "Golf", price: 1540 },
            { name: "Jetta", price: 1900 },
            { name: "Passat", price: 2000 },
            { name: "Tiguan", price: 2150 },
            { name: "Atlas", price: 1900 }
        ],
        Ford: [
            { name: "F-150", price: 2100 },
            { name: "Mustang", price: 1390 },
            { name: "Escape", price: 2560 },
            { name: "Explorer", price: 2000 },
            { name: "Focus", price: 1800 }
        ],
        Chevrolet: [
            { name: "Silverado", price: 2100 },
            { name: "Equinox", price: 1600 },
            { name: "Camaro", price: 2300 },
        ],
        Nissan: [
            { name: "Altima", price: 1500 },
            { name: "Rogue", price: 1800 },
            { name: "Sentra", price: 1400 },
        ],
    };

    const plan = {
        'Basic Service': 1250,
        'Standard Service': 2150,
        "Premium Service": 3150

    }

    const servicePrices = {
        "scheduled-services": 1000,
        "ac-services": 1500,
        "cleaning-detailing": 1900,
        "lights-fitments": 2500,
        "denting-painting": 2600,
        "insurance-services": 1000,
        "custom-repair": 1500,
        "batteries": 3000,
        "tyres": 4000,
        "detailing-services": 1600,
        "windshields-glass": 2100,
        "other": 3500
    };


    const [models, setModels] = useState([]);
    const [contactDetails, setContactDetails] = useState({
        name: "",
        phone: "",
        email: "",
        picup: "",
        drop: "",
        message: "",
        selectedDate: "",
        selectedTime: "",
        manufacturingYear: "",
        fuelType: "",
        regNo: "",
        manufacturer: "",
        model: "",
        plan: "",
        price: ''
    });
    const [errors, setErrors] = useState({});
    const [selectedServices, setSelectedServices] = useState({});
    const [totalCost, setTotalCost] = useState(0);

    const calculateTotal = () => {
        let total = 0;

        total += plan[contactDetails.plan] || 0;

        const selectedModel = commonValues[contactDetails.manufacturer]?.find(model => model.name === contactDetails.model);
        if (selectedModel) {
            total += selectedModel.price;
        }

        Object.keys(selectedServices).forEach(service => {
            if (selectedServices[service]) {
                total += servicePrices[service] || 0;
            }
        });

        setTotalCost(total);
    };

    useEffect(() => {
        calculateTotal();
    }, [contactDetails, selectedServices]);

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }

    function validateForm() {
        const newErrors = {};
        const today = new Date();
        const selectedDate = new Date(contactDetails.selectedDate);
        const selectedTime = contactDetails.selectedTime;

        if (!contactDetails.name) newErrors.name = "Name is required.";
        if (!contactDetails.phone) {
            newErrors.phone = "Phone number is required.";
        } else if (!validatePhone(contactDetails.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }
        if (!contactDetails.email) {
            newErrors.email = "Email is required.";
        } else if (!validateEmail(contactDetails.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!contactDetails.manufacturingYear) {
            newErrors.manufacturingYear = "Manufacturing year is required.";
        }
        if (!contactDetails.fuelType) {
            newErrors.fuelType = "Fuel type is required.";
        }
        if (!contactDetails.regNo) {
            newErrors.regNo = "Registration number is required.";
        }
        if (!selectedDate) {
            newErrors.date = "Date is required.";
        } else if (selectedDate < today) {
            newErrors.date = "Date must be today or in the future.";
        }
        if (!selectedTime) {
            newErrors.time = "Time is required.";
        } else {
            const selectedDateTime = new Date(`${selectedDate.toISOString().split("T")[0]}T${selectedTime}`);
            if (selectedDateTime < new Date()) {
                newErrors.time = "Time must be in the future.";
            }
        }

        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            const appointmentData = {
                manufacturer: contactDetails.manufacturer,
                model: contactDetails.model,
                manufacturing_year: contactDetails.manufacturingYear,
                fuel_type: contactDetails.fuelType,
                plan: contactDetails.plan,
                registration_number: contactDetails.regNo.toUpperCase(),
                selected_date: contactDetails.selectedDate,
                selected_time: contactDetails.selectedTime,
                services: selectedServices,
                name: contactDetails.name,
                phone: contactDetails.phone,
                email: contactDetails.email,
                picup: contactDetails.picup,
                drop: contactDetails.drop,
                message: contactDetails.message,
                price: totalCost
            };

            axios.post('http://localhost:8000/api/appointments/', appointmentData)
                .then(async (response) => {
                    alert("Appointment submitted successfully!");
                    setContactDetails({
                        name: "",
                        phone: "",
                        email: "",
                        picup: "",
                        drop: "",
                        message: "",
                        selectedDate: "",
                        selectedTime: "",
                        manufacturingYear: "",
                        services: "",
                        fuelType: "",
                        regNo: "",
                        plan: "",
                        manufacturer: "",
                        model: "",
                        price: ""
                    });
                    setErrors({});
                    setSelectedServices({});
                })
                .catch((error) => {
                    console.error("There was an error submitting the appointment!", error);
                    alert("Failed to submit appointment. Please try again.");
                });

            console.log(appointmentData);
        }
    }

    function changeDropdownValue(value) {
        setContactDetails({ ...contactDetails, manufacturer: value, model: "" });
        setModels(value ? commonValues[value] : []);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setContactDetails({ ...contactDetails, [name]: value });

        if (name === 'regNo') {
            const regNoPattern = /^[A-Za-z]{2}-\d{1,2}-[A-Za-z]{2}-\d{4}$/;
            if (!regNoPattern.test(value)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    regNo: 'Invalid registration number format. Use GJ-5-AB-1234.',
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    regNo: '',
                }));
            }
        }
    }

    function handleServiceChange(e) {
        const { name, checked } = e.target;
        setSelectedServices({ ...selectedServices, [name]: checked });
    }


    return (
        <div className="body" >
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
                            <h1 className="text-success">BOOK APPOINTMENT
                                <div className="background-text">Appointment</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8">
                            <h3>Book Appointment*</h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3 justify-content-center">
                            <div className="col-lg-3 col-md-6">
                                <div className="book-text">Manufacturer</div>
                                <div className="select-box">
                                    <select
                                        id="manufacturer"
                                        name="manufacturer"
                                        onChange={(e) => changeDropdownValue(e.target.value)}
                                        required
                                    >
                                        <option hidden disabled selected>Select Manufacturer</option>
                                        {Object.keys(commonValues).map((manufacturer) => (
                                            <option key={manufacturer} value={manufacturer}>
                                                {manufacturer}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.manufacturer && <div className="text-danger">{errors.manufacturer}</div>}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="book-text">Model</div>
                                <div className="select-box">
                                    <select id="model" name="model" value={contactDetails.model} onChange={handleInputChange} required>
                                        <option hidden>Select Model</option>
                                        {models.length > 0 ? (
                                            models.map((model) => (
                                                <option key={model.name} value={model.name}>
                                                    {model.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No Model Found.</option>
                                        )}
                                    </select>
                                    {errors.model && <div className="text-danger">{errors.model}</div>}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="book-text">Fuel Type</div>
                                <div className="select-box">
                                    <select id="fuelType" name="fuelType" value={contactDetails.fuelType} onChange={handleInputChange} required>
                                        <option value="" hidden disabled selected>Select Fuel Type</option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Electric">Electric</option>
                                    </select>
                                    {errors.fuelType && <div className="text-danger">{errors.fuelType}</div>}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="book-text">Plan *</div>
                                <div className="select-box">
                                    <select id="plan" name="plan" value={contactDetails.plan} onChange={handleInputChange}>
                                        <option value="" hidden disabled selected>Select Plan</option>
                                        <option value="Basic Service">Basic Service</option>
                                        <option value="Standard Service">Standard Service</option>
                                        <option value="Premium Service">Premium Service</option>
                                    </select>
                                    {errors.plan && <div className="text-danger">{errors.plan}</div>}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="book-text">Manufacturing Year</div>
                                <div className="d-flex align-items-center" style={{ gap: '1rem' }}>
                                    <input type="range" min={1999} max={2024} className="form-control custom-range" placeholder="2024" id="manufacturingYear" name="manufacturingYear" value={contactDetails.manufacturingYear} onChange={handleInputChange} required />
                                    <span>{contactDetails.manufacturingYear}</span>
                                </div>
                                {errors.manufacturingYear && <div className="text-danger">{errors.manufacturingYear}</div>}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="book-text">Registration Number</div>
                                <input
                                    maxLength={13}
                                    type="text"
                                    className="form-control text-uppercase"
                                    id="regNo"
                                    placeholder="GJ-05-AB-1234"
                                    name="regNo"
                                    value={contactDetails.regNo}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.regNo && <div className="text-danger">{errors.regNo}</div>}
                            </div>

                            <div className="col-lg-3 col-md-6 ">
                                <div className="book-text">Select Date</div>
                                <input type="date" min={new Date().toISOString().split('T')[0]} className="form-control" id="selectedDate" name="selectedDate" value={contactDetails.selectedDate} onChange={handleInputChange} required />
                                {errors.date && <div className="text-danger">{errors.date}</div>}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="book-text">Select Time</div>
                                <input type="time" className="form-control" id="selectedTime" name="selectedTime" value={contactDetails.selectedTime} onChange={handleInputChange} required />
                                {errors.time && <div className="text-danger">{errors.time}</div>}
                            </div>

                            <section>
                                <h2>Additional Services *</h2>
                            </section>

                            <div className="row">
                                {Object.keys(servicePrices).map((service) => (
                                    <div className="col-lg-3 col-md-6 ">
                                        <div key={service} className="check-box">
                                            <input
                                                className="check box-pointer"
                                                type="checkbox"
                                                name={service}
                                                id={service}
                                                onChange={handleServiceChange}
                                            />
                                            <label className="label box-pointer" htmlFor={service} style={{ fontSize: '18px' }}>
                                                {service}
                                            </label>
                                        </div>
                                        <br />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <section>
                            <h2>Conta   ct Detail</h2>
                        </section>

                        <div className="row mb-3">
                            <div className="col-md-4 mb-3">
                                <div htmlFor="name" className="book-text">Name</div>
                                <div className="col-md-12">
                                    <input type="text" placeholder="Name" className="form-control" id="name" name="name" value={contactDetails.name} onChange={handleInputChange} required />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div htmlFor="Phone" className="book-text">Phone</div>
                                <div className="col-md-12">
                                    <input
                                        type="number"
                                        placeholder="Mobile No."
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={contactDetails.phone}
                                        onChange={handleInputChange}
                                        required
                                        onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                                    />
                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div htmlFor="email" className="book-text">Email</div>
                                <div className="col-md-12">
                                    <input type="email" placeholder="Email" className="form-control" id="email" name="email" value={contactDetails.email} onChange={handleInputChange} required />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div htmlFor="picup" className="book-text">Picup Location</div>
                                <div className="col-md-12">
                                    <input type="text" placeholder="Picup Location" className="form-control" id="picup" name="picup" value={contactDetails.picup} onChange={handleInputChange} />
                                    {errors.picup && <div className="text-danger">{errors.picup}</div>}
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div htmlFor="drop" className="book-text">Drop Location</div>
                                <div className="col-md-12">
                                    <input type="text" placeholder="Drop Location" className="form-control" id="drop" name="drop" value={contactDetails.drop} onChange={handleInputChange} />
                                    {errors.drop && <div className="text-danger">{errors.drop}</div>}
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div htmlFor="message" className="book-text">message</div>
                                <div className="col-md-12">
                                    <textarea placeholder="Message" className="form-control" id="message" name="message" rows="3" value={contactDetails.message} onChange={handleInputChange} ></textarea>
                                    {errors.message && <div className="text-danger">{errors.message}</div>}
                                </div>
                            </div>
                            <div className="col-md-12 mb-3 text-center">
                                <h2>Total Cost :
                                    <span>
                                        {totalCost}
                                    </span>
                                </h2>
                            </div>
                            <div className="col-md-12 mt-3 d-grid">
                                <button type="submit" className="btn">Book Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Cont />
        </div >
    );
}

