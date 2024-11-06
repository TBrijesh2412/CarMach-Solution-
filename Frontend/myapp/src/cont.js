import React from 'react'

function cont() {
    return (
        <div className="container">
            <div className="row g-4">
                <div className="d-flex col-lg-4 hr-hover">
                    <div className="me-4">
                        <div className="start p-3"><img src="/img/Add.png" alt="" /></div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="">Address :</h5>
                        <hr color="white" />
                        <p>Ahmdabad</p>
                    </div>
                </div>
                <div className="d-flex col-lg-4 hr-hover">
                    <div className="me-4">
                        <div className="start p-3"><img src="/img/call.png" alt="" /></div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="">Ph No.</h5>
                        <hr color="white" />
                        <p>+91 1234567890</p>
                        <p>+91 0123456789</p>
                    </div>
                </div>
                <div className="d-flex col-lg-4 hr-hover">
                    <div className="me-4">
                        <div className="start p-3"><img src="/img/time.png" alt="" /></div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="">Working Time :</h5>
                        <hr color="white" />
                        <p>08:00 AM to 08:00 PM</p>
                        <p className="text-danger">Sunday Close</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cont
