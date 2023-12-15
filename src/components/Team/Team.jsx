import React from 'react'
import {team} from "../../Data"
import "./team.css"
const Team = () => {
  return (
    <section className='team'>
       <div className="container grid4">
           {
            team.map((val)=>{
                return(
                    <div className="items shadow">
                        <div className="img">
                            <img src={val.cover} alt="" />
                            <div className='overlay'>
                               <i className='fab fa-facebook-f icon'></i>
                               <i className='fab fa-twitter icon'></i>
                               <i className='fab fa-instagram icon'></i>
                               <i className='fab fa-tiktok icon'></i>
                           </div>
                           </div>
                        <div className="text">
                             <h2>{val.name}</h2>
                             <p>{val.work}</p>
                        </div>
                        
                    </div>
                )
            })
           }
       </div> 
    </section>
  )
}

export default Team
