import React from 'react'
import "./Testmony.css"
import {testimonal} from "../../Data"
import Heading from '../../common/heading/Heading'
const Testimony = () => {
  return (
    <>
      <section className='testimony'>
         <div className="container">
           <Heading title="Our Successful Students" subtitle="TESTIMONIAL"/>
             <div className="content grid2">
                 {
                  testimonal.map((val)=>{
                    return(
                      <>
                         <div className="items shadow">
                             <div className='box flex'>
                                <div className="img">
                                     <img src={val.cover} alt="" />
                                     <i className='fa fa-quote-left icon'>55</i>
                              </div>
                                 <div className="name">
                                    <h2>{val.name}</h2>
                                    <span>{val.post}</span>
                                 </div>
                             </div>
                             <p>{val.desc}</p>
                         </div>
                      </>
                    )
                  })
                 }
             </div>
         </div>
      </section>
    </>
  )
}

export default Testimony
