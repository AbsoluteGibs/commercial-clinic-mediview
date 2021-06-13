import React from 'react'

function About(){
    return(
        <div className="about_us_page_container">
            <div className="about_us_container animated fadeInRight" style={{maxWidth: "640px"}}>
                <div className="content_body" id="primary">
                    <h1 style={{paddingBottom: '50px'}}>About us</h1>
                    <p>
                        Mediview Clinic &amp; Surgery is a trusted medical clinic that
                        provides quality and professional healthcare to you and your
                        family since 1994.
                    </p>
                    <p>
                        Our vision is to provide personal, caring,comprehensive and
                        affordable healthcare for the well-being of all our patients.
                    </p>
                    <p>
                        Together we work toward a healthier you and your family with
                        disease prevention and optimal performance. as our focus.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;