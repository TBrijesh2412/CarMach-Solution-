import Navbar from "./Navbar";
import React from 'react'
import Cont from "./cont";



export default function About() {
    return (
        <div className="body">
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
                            <h1 className="display-4 text-success">About Us
                                <div className="background-text">About Us</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="row g-4">
                        <div className=" col-lg-6">
                            <img src="/img/1.jpg" alt="" height="450px" />
                        </div>
                        <div className="col-lg-6">
                            <h1>WELCOME TO CAR MECH SOLUTIONS</h1>
                            <h5>Car Services &amp; Healing</h5>
                            <span>We Are The Team Of The Best And The Personlized Mechanics Who Are
                                Dedicated
                                To Heal Your Vehicle
                                And Make Your Vehicle In The Best Possible Condition.</span>
                            <p>We Are The CarMech Solutions We Are Serving For The Last 2 Year At All citys. We And Our
                                Team
                                Represent The Brand &amp; Quality Of Work. We Provide The Quality Of Services Like Oil, Tyres,
                                Interior, Exterior &amp; Polish The Car And The Cleaning The Car And We Are Constantly At Our
                                Work
                                We Are Here To Solve The Problem Of Your Artwork And Guide You To The Right Path Of Services
                                We
                                Are A Collaboration With The Lot Of Big Names In The Artwork Filed To Provide You Comfort,
                                Efficiency, And The Safety With The Affordable Price-Set.</p>
                        </div>
                        <div className=" col-sm-6">
                            <h3>Our Mission</h3>
                            <p>Our Mission Is To Serve The Best Services In The Auto Work. We Are Serving The Best Efficient,
                                Performance, Great, Fast &amp; Affordable Vehicle Services With The Backend Support Of Big-Name Of
                                This Field Like Hyundai, Suzuki, Toyota, Tata, Mahindra And Many More.</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Our History</h3>
                            <p>We Are Working Continuously For The Last 3 Years And We Established As Serving The Best Auto Work
                                Services That Create An Impact On Your Vehicle &amp; We Are Providing An Advanced Level Service With
                                The Bonus Of Security, Safety, Performance &amp; Affordable Rates.</p>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 d-grid">
                                <a className="btn" href="/contact" >Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cont/>
        </div>
    );
}
