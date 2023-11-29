import {Fragment, useEffect, useState} from "react";
import "./accunt.css"
import {Link} from "react-router-dom";
function Account() {
    const [artic,setArtic]=useState([])

    useEffect(()=>{
        const _function=async ()=>{
            let raespons=await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-10-29&sortBy=publishedAt&apiKey=df53bd02bca94630a9f98abafc20c539',{
                method: 'GET'
            })
            let data=await raespons.json()
            setArtic(data.articles)
            console.log(data)
        }
        _function()
    },[])
    console.log(artic)
    return (
        <Fragment>
            <div className="container">
                <div className="root_acount">
                    {artic.map((e)=>(
                        <div className="items">
                            <img className="account_image" src={e.urlToImage} alt="sas"/>
                            <p>{e.title}</p>
                            <p>population : {e.author}</p>
                            <Link className="links" to={`/accaunt/${e.publishedAt}`} >See More</Link>
                        </div>
                    ))}

                </div>
            </div>
        </Fragment>
    );
}

export default Account;