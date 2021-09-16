import React from 'react'
import './SinopharmAdvisory.css'
import {Helmet} from 'react-helmet-async'

function SinopharmAdvisory()
{
    return(
        <div className="content_body animated fadeInRight" style={{maxWidth: '768px'}}>
            <Helmet>
                <title>About Sinopharm</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="Sinopharm provides a set of benefits, disadvantages and/or side effects. This article serves to inform the public about the Sinopharm vaccine."/>
            </Helmet>
            <section>
                <h1>About Sinopharm</h1>
                <br/>
                <h2>The Sinopharm vaccine is the first China-made vaccine to be approved by the World Health Organisation (WHO)</h2>

                <p>
                    The Sinopharm COVID-19 vaccine, BBIBP-CorV was approved for use by the China’s National Medical Products Administration in December 2020 and gained WHO’s approval for emergency use in May 2021.
                </p>

                <p>
                    The vaccine was developed by the Beijing Bio-Institute of Biological Products (BBIBP) and is the first China-made COVID-19 vaccine approved by the WHO for emergency use. It is also the first approved COVID-19 vaccine developed by a non-Western country. Sinovac’s vaccine, the CoronaVac, is the second.
                </p>

                <p>
                    To date, more than a billion doses of the Sinopharm BBIBP-CorV have been administered. The vaccine has also been approved for use in over 50 countries around the world. It is currently undergoing Phase 3 trials in Middle Eastern countries such as Egypt and the United Arab Emirates (UAE), and South American countries like Argentina and Peru.
                </p>
                <p>
                    The BBIBP-CorV is a two-dose vaccine, with a recommended gap of 3 weeks between the doses. Similar to the Sinovac vaccine, it is recommended for individuals aged 18 years and older who have no history of anaphylaxis to any component of the vaccine. Further research is needed to demonstrate its efficacy against severe COVID-19 disease in persons with other diseases, pregnant women and individuals aged above 60 years old. However, no upper age limit has been set for the vaccine as it is likely to have a protective effect in older adults and is unlikely to differ in safety for both older and younger adults.
                </p>
                
                <br/>

                <h2>Both the Sinopharm BBIBP-CorV and Sinovac’s CoronaVac vaccines are inactivated vaccines</h2>

                <p>
                    Unlike the Pfizer-BioNTech/Cominarty and Moderna vaccines which use mRNA technology, the Chinese-made vaccines are inactivated vaccines which use killed COVID-19 viral particles. In these vaccines, the surface spike protein of the virus particle is kept intact to trigger the body’s immune system to develop antibodies to protect against the live COVID-19 virus in the event that the person is infected.
                </p>
                
                <p>
                    Inactivated vaccines are a tried-and-tested form of vaccine technology which is used in other well-established vaccines, such as the flu and hepatitis B vaccines.
                </p>

                <br/>

                <h2>Sinopharm’s efficacy: How it compares with the Sinovac CoronaVac and Pfizer-BioNTech/Cominarty COVID-19 vaccines</h2>

                <p>
                    A large multi-country Phase 3 trial has shown that 2 doses, administered at an interval of 21 days, have an efficacy of 79% against symptomatic SARS-CoV-2 infection 14 or more days after the second dose. 
                    
                    This is compared to 51% for Sinovac’s and 95% for the Pfizer-BioNTech/Cominarty COVID-19 vaccine.
                    
                    Vaccine efficacy against hospitalization was 79%.
                    
                    More studies are required to prove the BBIBP-CorV’s efficacy against COVID-19 variants.
                </p>

                <br/>

                <h2>Most reported side-effects of the Sinopharm vaccine were mild to moderate</h2>

                <p>
                    The most common side-effects of the Sinopharm vaccine are pain at the injection site, headache, and fatigue. However, 2 serious side effects may possibly be linked to the vaccine – serious nausea, and acute disseminated encephalomyelities, a neurological disorder involving inflammation of the brain and spinal cord.
                </p>

                <br/>
                
                <p>
                    Singapore is taking a more “inclusive” approach in recognising vaccines approved under WHO's emergency use list, and has allowed those who have taken <b>Sinovac</b> and <b>Sinopharm</b> COVID-19 vaccines to be considered <b>fully vaccinated</b>.
                </p>

                <p>
                    We are pleased to announce that <b>Mediview Clinic & Surgery</b> has received the <b>MOH approval</b> to administer the <b>SINOPHARM</b> vaccines on a private basis under <b>SPECIAL ACCESS ROUTE</b>. <a style={{textDecoration: 'none', color: 'black'}} href="https://forms.gle/x5ZZx9wiNWHLUJgG9" target="_blank" rel="noopener noreferrer"><b><u>Register</u></b></a> your interest.
                </p>

            </section>
            <div className="top-padding-50" />
        </div>
    )
}

export default SinopharmAdvisory