import React from 'react'
import {Helmet} from 'react-helmet-async'

function SinovacAdvisory()
{
    return(
        <div className="content_body animated fadeInRight" style={{maxWidth: '768px'}}>
            <Helmet>
                <title>Sinovac Advisory and Services</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="Sinovac provides a set of benefits, disadvantages and/or side effects. This article serves to inform the public about the Sinovac vaccine."/>
            </Helmet>
            <section>
                <h1>Sinovac Advisory</h1>
                <p>
                    Non-mRNA COVID-19 vaccines (e.g. Sinovac) may be suitable for individuals who are unable to get inoculated with Pfizer-BioNTech and Moderna.
                </p>
                <p>
                    However, they still come with risks of side effects.
                </p>
                <p>
                    The expert committee on COVID-19 vaccination in Singapore said the protection Sinovac provides against newer variants, such as the delta variant, and under real-world conditions remains unknown.
                </p>
                <p>
                    The expert committee said the Pfizer-BioNTech and Moderna mRNA vaccines, which are currently the only two available under Singapore's national vaccination programme, have consistently shown to be highly efficacious, with an efficacy rate of around 90 per cent.
                </p>
                <p>
                    No vaccine provides 100 per cent protection, and with the emergence and spread of new variants due to mutations, infections can occur despite vaccination.
                </p>
                <p>
                    Alternate vaccines (e.g. Sinovac) are not part of the national vaccine programme.
                </p>
            </section>
            <div className="top-padding-50" />
            <iframe src="https://drive.google.com/file/d/12U2NB-CwphQc50aSRCJfeCXC3IJw7TvU/preview" width="100%" height="480" allow="autoplay" title="sinovacResponse"></iframe>
            <div className="top-padding-50" />
            {/* <section>
                <h2>
                    Sinovac Registration
                </h2>
                <p>
                    <a style={{textDecoration: 'none', color: 'black'}} href="https://forms.gle/9MBvJZyvdc4Uck3A8" target="_blank" rel="noopener noreferrer"><b><u>Register</u></b></a> to get into the queue for your Sinovac vaccination. You will be contacted to come down to the clinic when it is your turn.
                </p>
                <p>
                    Please contact us if there are technical issues revolving around the registration link.
                </p>
            </section> */}
        </div>
    )
}

export default SinovacAdvisory