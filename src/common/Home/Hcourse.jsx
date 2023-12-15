import React from 'react'
import {coursesCard} from "../../Data"
import "./courses.css"
import CourseCard from '../../components/courses/CourseCard'
import Heading from '../heading/Heading'
const Hcourse = () => {
  return (
    <>
    <section className='coursesCard'>
      <Heading subtitle="Our Courses" title="Explore Our Popular Online Courses"/>
      <div className="container grid2">
           {
            coursesCard.slice(0,3).map((val)=>{
                return(
                    <div className="items shadow">
                      <div className="content flex">
                          <div className="left">
                              <div className="img">
                                <img src={val.cover} alt="" />                                
                              </div>                             
                          </div>
                          <div className="text">
                             <h1>{val.coursesName}</h1>
                            <div className="rate">
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                             <label htmlFor=''>(5.0)</label>
                             </div>
                          <div className="details">
                            {
                                val.courTeacher.map((details)=>(
                                    <>
                                    <div className="box">
                                        <div className="dimg">
                                            <img src={details.dcover} alt="" />
                                        </div>
                                    
                                          <div className="par">
                                             <h4>{details.name}</h4>
                                         </div>
                                    </div>
                                    <span>{details.totalTime}</span>
                                    </>
                                ))
                            }
                        </div>
                      </div>
                      </div>
                       <div className='price'>
                       <h3>
                        {val.priceAll} /{val.pricePer}
                       </h3>
                      </div>
                     <button className='outline-btn'>ENROLL NOW!</button>
                  </div>
                )
            })
           }
      </div>
    </section>
    <CourseCard/>
    </>
  )
}

export default Hcourse
