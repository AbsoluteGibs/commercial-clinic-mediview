import React, {useState, useEffect} from 'react'
import axios from 'axios'
import parse from 'html-react-parser'

function Article({match})
{

    const [article, setArticle] = useState([])
    const [altContentToggle, setAltContentToggle] = useState(false)
    const [originalState, setOriginalState] = useState('display')
    const [altState, setAltState] = useState('hide')

    const getArticle = () => {
        axios.get(`http://localhost:3001/articlesDatabase?name=${match.params.fullArticle}`)
        .then((response) => {
            setArticle(response.data)
        })
        .catch(e => console.log(e))
    }

    function sliderUpdate()
    {
        document.getElementById('lang_slider').checked ? setAltContentToggle(true) : setAltContentToggle(false)
        if (originalState === 'display')
        {
            setOriginalState('hide')
            setAltState('display')
        }
        else
        {
            setOriginalState('display')
            setAltState('hide')
        }
    }

    function articleRender(article)
    {
        if('htmlContentAlt' in article)
        {
            return(
                <div className="content_body animated fadeIn" key={article.id} style={{border: 'solid 1px', margin: '12px'}}>
                    <p>{`Published Date: ${article.dateOfPublish}`}</p>
                    <div style={{fontSize: '1.2em', textAlign: 'right'}}>Language: {altContentToggle ? '中文' : 'English'}<label style={{margin: '5px'}} className='switch'><input id="lang_slider" type='checkbox' defaultChecked={altContentToggle} onChange={sliderUpdate}/><span className='slider round'></span></label></div>
                    <div className={originalState}>{parse(`${article.htmlContent}`)}</div>
                    <div className={altState}>{parse(`${article.htmlContentAlt}`)}</div>
                </div>
            )
        }

        else{
            return(
                <div className="content_body animated fadeIn" key={article.id} style={{border: 'solid 1px', margin: '12px'}}>
                    <p>{`Published Date: ${article.dateOfPublish}`}</p>
                    <div>{parse(`${article.htmlContent}`)}</div>
                </div>
            )
        }
    }

    useEffect(() => {
        getArticle()
    }, [])

    //console.log(article)

    return(
        <div>
            {article.map(articleDetails => articleRender(articleDetails))}
        </div>
    )
}

export default Article