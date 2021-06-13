import React from 'react'
import {Link} from 'react-router-dom'

function Logo()
{
    return(
        //<img className="logo" src={require('../mediview_logo.jpg')} style={{textAlign: 'left'}} alt="Mediview logo"/>
        <Link to="/"><div className="logo-bg-image"></div></Link>
    )
}

export default Logo