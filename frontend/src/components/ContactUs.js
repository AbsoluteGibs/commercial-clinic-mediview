import React from 'react'
import ConsultationHoursInfo from './ConsultationHoursInfo'

const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d705.1158194689278!2d103.84437942964232!3d1.3337172047156733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjAnMDEuNiJOIDEwM8KwNTAnNDAuMiJF!5e0!3m2!1sen!2ssg!4v1623051291163!5m2!1sen!2ssg"

function ContactUs(){
    return(
        <div className="content_body animated fadeInRight" id="primary">
            <h1 style={{paddingBottom: '50px'}}>Contact us</h1>
            <p>For further enquiries and/or help, please make use of our contact information below: </p>
            <div style={{paddingTop: "40px"}}>
                <div>
                    <h2>Consultation Hours</h2>
                    <div style={{float: 'left'}}>
                        <ConsultationHoursInfo/>
                        <div style={{paddingTop: "50px"}}>
                            <h2>Address</h2>
                                <div>Block 150 Lorong 1 Toa Payoh,</div>
                                <div>#01-999, Singapore 310150</div>
                        </div>
                        <div style={{paddingTop: "50px"}}>
                            <h2>Telephone No</h2>
                            <div>+65 6253 2351</div>
                        </div>
                        <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
                            <h2>Email</h2>
                            <div>mediviewacc@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="iframe-container">
                    <iframe className="responsive-iframe" title="Google Maps Location" src={mapsUrl} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;