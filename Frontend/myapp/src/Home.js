import React from 'react'
import Cont from "./cont";

export default function Home() {

  const servicePlans = [
    {
      title: 'Basic Service',
      price: 1250,
      features: [
        'Pickup & Drop',
        '360 Degree Health Check',
        'Tyre Check & Air Pressure',
        'Oil Filter Replacement',
        'Oil Change (Labour)',
        'Car Wash',
      ],
    },
    {
      title: 'Standard Service',
      price: 2150,
      features: [
        '77 Point Check',
        'Fluid Replacement (Labour)',
        'Power Steering Fluid',
        'Windscreen Washer Fluid',
        'Battery Check',
        'Car Wash',
      ],
    },
    {
      title: 'Premium Service',
      price: 3150,
      features: [
        'All Fluids Refilled',
        'Oil 5W30 (Free Promotion)',
        'Oil Filter Replacement',
        'AC & Air Filter Replacement',
        'Spark Plugs Replacement',
        'Visual Brake Inspection',
      ],
    },
  ];

  const services = [
    {
      id: 1,
      title: "Steering & Suspension",
      image: "/img/Service-1.jpg",
      link: "/Service",
    },
    {
      id: 2,
      title: "Engine Repair",
      image: "/img/Service-2.jpg",
      link: "/Service",
    },
    {
      id: 3,
      title: "Brake Repair",
      image: "/img/Service-3.jpg",
      link: "/Service",
    },
    {
      id: 4,
      title: "Clutch Service",
      image: "/img/Service-4.jpg",
      link: "/Service",
    },
    {
      id: 5,
      title: "Car AC Repair",
      image: "/img/Service-5.jpg",
      link: "/Service",
    },
    {
      id: 6,
      title: "Tyre Services",
      image: "/img/Service-6.jpg",
      link: "/Service",
    },
  ];

  const galleryItems = [
    {
      title: 'BODY PARTS',
      details: [
        'Titanium Frame',
        'CarbonFlex Panels',
        'UltraVision Windshield',
        'PrecisionFit Doors',
        'AeroCurve Roof',
        'ProGuard Bumpers',
      ],
      className: 'bodypart',
    },
    {
      title: 'INTERIOR',
      details: [
        'LuxeLeather Seats',
        'TechTouch Infotainment',
        'ComfortGlide Armrests',
        'AmbientAura Lighting',
        'SilentComfort Floor',
        'EcoSense Dashboard',
      ],
      className: 'interior',
    },
    {
      title: 'LIGHTING',
      details: [
        'BeamBlaze Headlights',
        'GloBeam Fog Lights',
        'LaserGlow LED Strips',
        'TwilightTorch Taillights',
        'LuminaTech Interior',
        'SpotSync Roof Lamps',
      ],
      className: 'lighting',
    },
    {
      title: 'WHEELS/TIRES',
      details: [
        'Velocity Alloy Wheels',
        'MaxGrip Performance',
        'NovaChrome Rim Set',
        'UrbanTrax All-Terrain',
        'StealthSport Black',
        'ThunderTread Mud Tires',
      ],
      className: 'wheels',
    },
  ];

  return (

    <div className="body">
      <a href="top">-</a>
      <div id="oo">
        <a href="#top">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0" />
          </svg>
        </a>
      </div>

      <nav className="navbar navbar-expand-lg py-3 sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="logo" src='/img/Logo.png' alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                <path d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link action" href="/">HOME</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#Services">SERVICE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">FEATURES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Gallary">GALLARY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#plan">PLAN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">TEAM</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">BLOG</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href='/'>
                  MORE
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/About">About Us</a></li>
                  <li><a className="dropdown-item" href="/Service">Services</a></li>
                  <li><a className="dropdown-item" href="/Book">BOOK APPOINTMENT</a></li>
                  <li><a className="dropdown-item" href="/Faq">FAQS</a></li>
                  <li><a className="dropdown-item" href="/Contact">Contact Us</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="hero vh-100 d-flex align-items-center" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 bg-main-text hr-hover">
              <h1 className="display-4">Boost your car </h1>
              <hr />
              <p className="text-white my-3">Discover seamless car care at our service site. Effortless scheduling ,
                skilled technicians, and a commitment to your vehicle's peak performance. Experience worry-free
                servicing with us.</p>
              <a href="/Book" className="btn me-2">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>

      <section id="Services">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <div className="background-text">SERVICES</div>
              <h1>SERVICES</h1>
              <h2>YOU NEED <span>CAR SERVICE?</span></h2>
            </div>
          </div>
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-sm-6 project hr-hover">
                <hr />
                <div className="service service-hover text-white rounded">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay" />
                  <div className="service-hover-content">
                    <h3 className="service-hover-title text-uppercase font-weight-light mb-0">
                      {service.title.split(' ')[0]}{' '}
                      <strong className="font-weight-bold text-white">
                        {service.title.split(' ').slice(1).join(' ')}
                      </strong>
                      <span>
                        <br />
                        <a href={service.link}>
                          Read More{' '}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-arrow-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                          </svg>
                        </a>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="row w-100" id="features">
        <div className="col-lg-6 col-img" />
        <div className="col-lg-6 py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="background-text">CHOOSE</div>
                <h5 className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 30 30" style={{ fill: '#ff3d24' }}>
                    <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
                  </svg>
                  ABOUT OUR COMPANY
                </h5>
                <h1>Why Choose Us?</h1>
                <div className="d-flex mt-5">
                  <div className="me-4">
                    <div className="start">1</div>
                  </div>
                  <div className="hr-hover">
                    <h5>BEST &amp; AFFORDABLE SERVICES</h5>
                    <hr color="white" />
                    <p>Provide The Best, Efficient, Affordable, Compact Services From Last 3 Years. 24/7
                      customer support and towing service.</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-4">
                    <div className="start">2</div>
                  </div>
                  <div className="hr-hover">
                    <h5>OUR CUSTOM REPAIR</h5>
                    <hr color="white" />
                    <p>Our Specialized Work Is To Build The Engineering Services And The Car Services Best
                      On Your Requirements.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-4">
                    <div className="start">3</div>
                  </div>
                  <div className="hr-hover">
                    <h5>QUICK &amp; EFFICIENT</h5>
                    <hr color="white" />
                    <p>We Maximize Your Car Performance In Within A Time Period &amp; With The Best Affordable
                      Cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Gallary">
        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <div className="background-text">AUTOPARTS</div>
              <h1>
                WELCOME TO <span className="headtext">AUTOPARTS</span>
              </h1>
              <h3>We have any image for any vehicle</h3>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="row g-4">
            {galleryItems.map((item, index) => (
              <div key={index} className="col-lg-3 col-sm-6 hr-hover">
                <div className={`pricing card-effect text-center ${item.className}`}>
                  <p className="h3">{item.title}</p>
                  <hr />
                  <ul className="list-unstyled mb-4">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <a className="btn" href="/Gallary">
                    Gallery
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className="bg-product">
        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <div className="background-text">PLAN</div>
              <h1>
                OUR SERVICE <span>PLAN</span>
              </h1>
              <h4>Buy any plan any time</h4>
            </div>
          </div>

          {/* Service Plans */}
          <div className="row mt-4">
            {servicePlans.map((plan, index) => (
              <div key={index} className="col-lg-4 hr-hover">
                <div className="card mb-5">
                  <div className="card-body">
                    <h5 className="card-title">{plan.title}</h5>
                    <hr color="white" />
                    <div className="money">
                      <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>
                      {plan.price}
                    </div>
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <br />
                          {feature}
                          <br />
                        </li>
                      ))}
                    </ul>
                    <a href="/Book" className="btn">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <div className="background-text">TEAM</div>
              <h1>MEET OUR <span>EXPERTS</span></h1>
              <h4>TEAM MEMBERS</h4>
            </div>
          </div>
          <div className="row text-center g-4">
            <div className="col-lg-3 col-sm-6">
              <div className="team-member card-effect">
                <img src="/img/team1.jpg" alt="" />
                <h5 className="mb-0 mt-4">DANIEL</h5>
                <p>Mechanic Expert</p>
                <div className="social-icons">
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg></a>
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg></a>
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member card-effect">
                <img src="/img/team2.jpg" alt="" />
                <h5 className="mb-0 mt-4">CURTIS KINGO</h5>
                <p>Auto Mechanic</p>
                <div className="social-icons">
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg></a>
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg></a>
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member card-effect">
                <img src="/img/team3.jpg" alt="" />
                <h5 className="mb-0 mt-4">ADAM RUSSELL</h5>
                <p>Technician</p>
                <div className="social-icons">
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg></a>
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg></a>
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member card-effect">
                <img src="/img/team4.jpg" alt="" />
                <h5 className="mb-0 mt-4">EVA MAXONES</h5>
                <p>Social Media Manager</p>
                <div className="social-icons">
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg></a>
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg></a>
                  <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <div className="background-text">BLOG</div>
              <h1 className="">BLOG</h1>
              <h2>Latest News From The Blog</h2>
              <p>Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet eaque
                fuga
                in cumque optio consectetur harum vitae debitis sapiente praesentium aperiam aut</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="blog-post card-effect">
                <img src="img/blog1.jpg" alt="" />
                <h5 className="mt-4"><a href="/">harum vitae debitis sapiente praesentium aperiam au</a></h5>
                <p>Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-post card-effect">
                <img src="img/blog2.jpg" alt="" />
                <h5 className="mt-4"><a href="/">harum vitae debitis sapiente praesentium aperiam au</a></h5>
                <p>Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-post card-effect">
                <img src="img/blog3.jpg" alt="" />
                <h5 className="mt-4"><a href="/">harum vitae debitis sapiente praesentium aperiam au</a></h5>
                <p>Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="pb-5" />

      <Cont />
    </div>
  );
}
