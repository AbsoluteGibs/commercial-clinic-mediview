import React, {useState, useRef} from 'react'
import ArrowIcon from './ArrowIcon'

import "../Accordion.css"

function Accordion({title, content})
{
    const [state, setState] = useState("")
    const [setHeight, setHeightState] = useState("0px")
    const [arrowState, setArrowState] = useState("accordion-icon")

    const accordionContent = useRef(null)

    function onClickIcon()
    {
        setState(state === "" ? "active" : "")
        setHeightState(state === "active" ? "0px" : `${accordionContent.current.scrollHeight}px`)
        setArrowState(state === "active" ? "accordion-icon" : "accordion-icon rotate")
        //console.log(accordionContent.current.scrollHeight)
        //console.log(content)
    }

    return(
        <div className="accordion-section">
            <button className={`accordion ${state}`} onClick={onClickIcon}>
                <p className="accordion-title">{title}</p>
                <ArrowIcon className={`${arrowState}`} width={10} fill={"#FFFFFF"} />
            </button>
            <div ref={accordionContent} style={{maxHeight: `${setHeight}`}} className="accordion-content-div">
                <div className="accordion-content">{content}</div>
            </div>
        </div>
    )
}

export default Accordion