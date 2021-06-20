import React from 'react'
import ConsultationHoursInfo from './ConsultationHoursInfo'

const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3687919414097!2d103.844911075919!3d1.333615933235696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da175d7a5ed2fb%3A0x6a8f80ca5f896056!2sMediview%20Clinic%20%26%20Surgery!5e0!3m2!1sen!2ssg!4v1624018106031!5m2!1sen!2ssg"

function ContactUs(){
    return(
        <div className="content_body animated fadeInRight" id="primary">
            <h1 className='bot-padding-30'>Contact us</h1>
            <p>For further enquiries and/or help, please make use of our contact information below: </p>
            <div className='top-padding-50'/>
            <div className='operating_info'>
                <div className='operating_info_text_content'>
                    <h2>Consultation Hours</h2>
                    <div>
                        <ConsultationHoursInfo/>
                        <div style={{paddingTop: "50px"}}>
                            <h2>Address</h2>
                            <div>Block 150 Lorong 1 Toa Payoh,</div>
                            <div>#01-999, Singapore 310150</div>
                            <p>From Toa Payoh MRT, head over to Exit D to Toa Payoh Lorong 2 and take about 5 minutes walk to the clinic.</p>
                        </div>
                        <div style={{paddingTop: "50px"}}>
                            <h2>Telephone No</h2>
                            <div>+65 6253 2351</div>
                        </div>
                        <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
                            <h2>Email</h2>
                            <div><a href="mailto:mediviewacc@gmail.com">mediviewacc@gmail.com</a></div>
                        </div>
                    </div>
                </div>
                <div className="operating_info_map_content iframe-container">
                    <iframe className="responsive-iframe" title="Google Maps Location" src={mapsUrl} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;