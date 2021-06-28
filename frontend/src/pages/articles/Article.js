import React, {useState, useEffect} from 'react'
import ArticlesDB from './ArticlesDB'
import parse from 'html-react-parser'
import {Helmet} from 'react-helmet-async'


function Article({match})
{

    const [article, setArticle] = useState([])
    const [altContentToggle, setAltContentToggle] = useState(false)
    const [originalState, setOriginalState] = useState('display')
    const [altState, setAltState] = useState('hide')

    const getArticle = () => {
        ArticlesDB.forEach(selectedArticle => {
            if (selectedArticle.name === `${match.params.fullArticle}`)
            {
                // console.log(selectedArticle)
                setArticle(selectedArticle)
            }
        })
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
                <div className="content_body  animated fadeIn" key={article.id}>
                    <Helmet>
                        <title>{`${article.title} | Mediview Clinic & Surgery`}</title>
                        <meta charSet="utf-8"/>
                        <meta name="description" content={`${article.shortDesc}`}/>
                    </Helmet>
                    {/* <p>{`Published Date: ${article.dateOfPublish}`}</p> */}
                    <div style={{fontSize: '1.2em', textAlign: 'right'}}>Language: {altContentToggle ? '中文' : 'English'}<label style={{margin: '5px'}} className='switch'><input id="lang_slider" type='checkbox' defaultChecked={altContentToggle} onChange={sliderUpdate}/><span className='slider round'></span></label></div>
                    <div className={originalState}>{parse(`${article.htmlContent}`)}</div>
                    <div className={altState}>{parse(`${article.htmlContentAlt}`)}</div>
                </div>
            )
        }

        else{
            return(
                <div className="content_body box-shadow animated fadeIn" key={article.id}>
                    <Helmet>
                        <title>{`${article.title} | Mediview Clinic & Surgery`}</title>
                        <meta charSet="utf-8"/>
                        <meta name="description" content={`${article.shortDesc}`}/>
                    </Helmet>
                    {/* <p>{`Published Date: ${article.dateOfPublish}`}</p> */}
                    <div>{parse(`${article.htmlContent}`)}</div>
                </div>
            )
        }
    }

    useEffect(() => {
        getArticle()
    }, [])

    return(
        <div>
            {articleRender(article)}
        </div>
    )
}

export default Article