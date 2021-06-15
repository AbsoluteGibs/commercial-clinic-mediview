import React, {useState} from 'react'

function ENContent(){
    return(
        <div>
            <h3><u>Basic</u></h3>
            <p>$90</p>
            Suitable for those that just want to have a general overview of their health.
            <ul>
                <li>Consultation and Post-Result Consultation</li>
                <li>Full Blood Count, ESR</li>
                <li>Cholesterol Profile, hs-CRP</li>
                <li>Diabetic Screening</li>
                <li>Kidney Function Test</li>
                <li>Bone Profile</li>
                <li>Liver Function Test</li>
                <li>Urine Analysis</li>
                <li>Urine Microalbumin with Creatinine and Ratio</li>
                <li>Optional: Electrocardiogram (additional $30)</li>
            </ul>

            <div className='top-padding-50'/>

            <h3><u>Active</u></h3>
            <p>$150 without pap smear</p>
            Suitable for those that keep an active lifestyle and also provide overview of general health
            <ul>
                <li>Consultation and Post-Result Consultation</li>
                <li>Full-Blood Count, ESR</li>
                <li>Cholesterol Profile, hs-CRP</li>
                <li>Diabetic Screening</li>
                <li>Kidney Function Test</li>
                <li>Bone/Joint Profile</li>
                <li>Liver Function Test</li>
                <li>Syphilis</li>
                <li>HIV</li>
                <li>Hepatitis Profile</li>
                <li>Thyroid Screen (Free T4)</li>
                <li>Cancer Marker: Liver and Bowel</li>
                <li>Urine Analysis</li>
                <li>Urine Microalbumin with Creatinine and Ratio</li>
                <li>Stool Occult Blood Test</li>
                <li>Optional: Electrocardiogram (additional $30)</li>
            </ul>

            <div className='top-padding-50'/>

            <h3><u>Comprehensive</u></h3>
            <p>$240 without pap smear</p>
            Suitable for those that want to have more detailed information of their health status
            <ul>
                <li>Consultation and Post-Result Consultation</li>
                <li>Full-Blood Count, ESR</li>
                <li>Cholesterol Profile, hs-CRP</li>
                <li>Diabetic Screening</li>
                <li>Kidney Function Test</li>
                <li>Bone/Joint Profile</li>
                <li>Vitamin D Status</li>
                <li>Liver Function Test</li>
                <li>Hepatitis Profile</li>
                <li>Thyroid Profile (TSH, Free T4)</li>
                <li>Syphilis</li>
                <li>HIV</li>
                <li>Cancer Marker: Liver, Bowel and Pancreas</li>
                <li>Urine Analysis</li>
                <li>Urine Microalbumin with Creatinine and Ratio</li>
                <li>Stool Occult Blood Test</li>
                <li>Optional: Electrocardiogram (additional $30)</li>
            </ul>
            <p>Choose from 1 optional test:</p>
            <p>CA125 (Ovary), Beta HCG, PSA, CA15.3 (Breast), HbA1c, EBV-IgA (Nose and throat), HCV Antibody (Hep C), Testosterone</p>

            <div className='top-padding-50'/>

            <h3><u>STD General Package</u></h3>
            <p>$280 (including consultation fee)</p>
            <ul>
                <li>Syphylis</li>
                <li>Chlamydia</li>
                <li>Gonorrhea</li>
                <li>Hepatitis B</li>
                <li>Hepatitis C</li>
                <li>HIV</li>
            </ul>

            <div className='top-padding-50'/>

            <h3><u>Pre-Marital</u></h3>
            <p>$138 for Male</p>
            <p>$180 for Female (additional rubella antibody)*</p>
            Suitable for couples, gentleman or ladies prior to making plans for a family.
            <ul>
                <li>Consultation and Post-Result Consultation</li>
                <li>Physical Examination by Doctor</li>
                <li>Full-Blood Count</li>
                <li>Fasting Blood Glucose</li>
                <li>Blood Group</li>
                <li>Hb Electrophoresis</li>
                <li>Syphilis</li>
                <li>HIV Screening</li>
                <li>Rubella Serology*</li>
                <li>Hepatitis B Antigen & Antibody Screening</li>
                <li>Urine Analysis</li>
                <li>Electrocardiogram</li>
            </ul>

            <div className='top-padding-50'/>

            <h3><u>Executive</u></h3>
            <p><b>Comprehensive package</b> as stated above with THREADMILL (at a designated centre)</p>
        </div>
    )
}

function CNContent(){
    return(
        <div>
            <h3><u>Basic</u></h3>
            <p>$90</p>
            <ul>
                <li>医疗咨询和结果咨询</li>
                <li>血细胞数检测</li>
                <li>胆固醇</li>
                <li>糖尿病</li>
                <li>肾功能</li>
                <li>钙，磷检测</li>
                <li>肝功能检测</li>
                <li>尿液分析</li>
                <li>尿液微量蛋白与肌酐和比例</li>
                <li>心电图（另加费$30)</li>
            </ul>

            <div className='top-padding-50'/>

            <h3><u>Active</u></h3>
            <p>$150 不包括宫颈涂片试验</p>
            <ul>
                <li>医疗咨询和结果咨询</li>
                <li>血细胞数检测</li>
                <li>胆固醇</li>
                <li>糖尿病</li>
                <li>肾功能</li>
                <li>钙，磷，类风湿因子检测</li>
                <li>肝功能检测</li>
                <li>甲功能(Free T4)</li>
                <li>梅毒筛查</li>
                <li>艾滋病病毒筛查</li>
                <li>肝炎病毒筛查</li>
                <li>尿液分析</li>
                <li>尿液微量蛋白与肌酐和比例</li>
                <li>肿瘤筛查 (大肠癌和肝癌)</li>
                <li>大便潜血试验</li>
                <li>心电图（另加费$30)</li>
            </ul>

            <div className='top-padding-50'/>

            <h3><u>Comprehensive</u></h3>
            <p>$240 不包括宫颈涂片试验</p>
            <ul>
                <li>医疗咨询和结果咨询</li>
                <li>血细胞数检测</li>
                <li>胆固醇</li>
                <li>糖尿病</li>
                <li>肾功能</li>
                <li>钙，磷，类风湿因子检测</li>
                <li>肝功能检测</li>
                <li>甲功能(Free T4, TSH)</li>
                <li>梅毒筛查</li>
                <li>艾滋病病毒筛查</li>
                <li>肝炎病毒筛查</li>
                <li>尿液分析</li>
                <li>尿液微量蛋白与肌酐和比例</li>
                <li>肿瘤筛查 (大肠癌,肝癌, 胰腺癌)</li>
                <li>大便潜血试验</li>
                <li>Vitamin D 检测</li>
                <li>心电图 （另加费$30)</li>
            </ul>
            <p>任选择以下一种测试：</p>
            <p>CA125 (卵巢癌), Beta HCG, PSA （前列腺癌）, CA15.3 (乳房癌), HbA1c (血红蛋白), EBV-IgA (鼻咽癌), HCV Antibody (C 型肝炎病毒), Testosterone 睾酮</p>

            <div className='top-padding-50'/>

            <h3><u>STD General Package</u></h3>
            <p>$280 包括医疗咨询和结果咨询</p>
            <ul>
                <li>梅毒</li>
                <li>衣原体</li>
                <li>淋病</li>
                <li>B 型肝炎</li>
                <li>C 型肝炎</li>
                <li>艾滋病病毒</li>
            </ul>

            <div className='top-padding-50'/>

            <h3><u>婚前筛查</u></h3>
            <p>$138 (男性）</p>
            <p>$180 (女性-加风疹检测）*^</p>
            <ul>
                <li>医疗咨询和结果咨询</li>
                <li>血细胞数检测</li>
                <li>血型</li>
                <li>地中海贫血症检测</li>
                <li>梅毒检测</li>
                <li>艾滋病病毒检测</li>
                <li>风疹抗体检测*</li>
                <li>乙型肝炎筛查</li>
                <li>尿液分析</li>
                <li>心电图</li>
                <li>糖尿病</li>
            </ul>

            <div className='top-padding-50'/>

            <h3><u>Executive</u></h3>
            <p><b>Comprehensive package</b> as stated above with THREADMILL (at a designated centre)</p>
        </div>
    )
}


function HealthScreening(){
    
    const [languageToggle, setLanguageToggle] = useState(false)
    const [defaultState, setDefaultState] = useState('display')
    const [otherState, setOtherState] = useState('hide')

    function sliderUpdate()
    {
        document.getElementById('lang_slider').checked ? setLanguageToggle(true) : setLanguageToggle(false)
        if (defaultState === 'display')
        {
            setDefaultState('hide')
            setOtherState('display')
        }
        else
        {
            setDefaultState('display')
            setOtherState('hide')
        }
    }

    return(
        <div className="content_body animated fadeInRight">
            <h1>Health Screening</h1>
            <div className='bot-padding-30'/>
            <p>At MEDIVIEW CLINIC & SURGERY we strive to provide affordable and tailored health screening packages.</p>
            <p>Health screening is essential for the early detection of diseases and conditions, many of which do not produce early warning sign. Some of these can be silent killers such as heart disease, diabetes, hypertension and cancers.</p>
            <p>With early detection and good management of these chronic conditions, complications can be avoided or delayed.</p>
            <p>With so many health screening packages to choose from, our doctors are committed to work with you to stratify your risk and to choose a package most suitable for you.</p>
            <p>It is never too late to start health screening. Please contact us for more information.</p>
            <p>(It is better to have an appointment for health screening as it will make the process smoother. Please fast for at least 8 hours before your health screening with only plain water allowed. For those on daily medication, please continue your medication except for diabetic medication or medication that may cause gastritis or discuss with our doctor before doing so.)</p>
            <div>
                <div className='top-padding-50'/>
                <div className='top-padding-50'/>
                <h2>Available Packages</h2>
                <div className='bot-padding-30'/>

                {/* language toggle */}
                {/* react having issues :/ */}

                <div style={{fontSize: '1.2em', textAlign: 'right'}}>Language: {languageToggle ? '中文' : 'English'}<label style={{margin: '5px'}} className='switch'><input id="lang_slider" type='checkbox' defaultChecked={languageToggle} onChange={sliderUpdate}/><span className='slider round'></span></label></div>

                <div className={defaultState}>{ENContent()}</div>
                <div className={otherState}>{CNContent()}</div>
            </div>
            <div className='bot-padding-30'/>
        </div>
    );
}

export default HealthScreening;