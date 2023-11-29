import {Fragment, useEffect, useState} from "react";
import "./counter.css"
function Countres() {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')

    const hendsearch=(event)=>{
        setSearch(event.target.value)
    }
   useEffect( ()=>{
       const datafetch= async ()=>{

            if (search.trim()===''){
                let url='https://restcountries.com/v3.1/all'


                const count=await fetch(url,{
                    method: 'GET'
                })
                const respons=await count.json()
                setData(respons)
            }else {

                let url=`https://restcountries.com/v3.1/name/${search}`

                const count=await fetch(url,{
                    method: 'GET'
                })
                const respons=await count.json()
                setData(respons)
            }
           // let url='https://restcountries.com/v3.1/all'
           //
           //
           // const count=await fetch(url,{
           //     method: 'GET'
           // })
           // const respons=await count.json()
           //  setData(respons)

       }
       datafetch()

   },[search])

    console.log(data)

    return (
        <Fragment>
            <div className="container">

                <div className="root_counter">
                    <input type="string" className="input" value={search} onChange={hendsearch} placeholder="search caunt"/>
                    {data.map((e)=>(
                                <div className="items">
                                    <img className="flag_imgs" src={e.flags.png} alt="sas"/>
                                    <p>{e.name.common}</p>
                                    <p>population : {e.population}</p>
                                </div>
                            ))}
                </div>
            </div>
        </Fragment>
    );
}

export default Countres;