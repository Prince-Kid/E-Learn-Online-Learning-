import React from 'react'
import "./about.css"
import {homeAbout} from "../../Data"
import Heading from '../../common/heading/Heading'
import Awrapper from './Awrapper'


const AboutCard = () => {
 
  return (
    <section className='about'>
       <div className="container flexSB">
          <div className='left row'>
           <img src="./images/about.webp" alt="" />
          </div>
          <div className='right row'>
            <Heading subtitle="Learn Anything" title="Benefit About Online Learning Expertise"/>
           {
            homeAbout.map((val)=>{
                return(
                    <div className='item flexSb'>
                       <div className='img'>
                         <img src={val.cover} alt="" />
                       </div>
                       <div className='text'>
                          <h2>{val.title}</h2>
                          <p>{val.desc}</p>
                       </div>
                    </div>
                )
            })
           }
          </div>
       </div>
       <Awrapper/>
    </section>
  )
}

export default AboutCard
