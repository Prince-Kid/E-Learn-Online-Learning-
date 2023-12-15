import React from 'react'
import Heading from '../heading/Heading'
import {blog} from "../../Data"
import "../../components/Blogs/blog.css"
const Hblogs = () => {
  return (
    <section className='blogs'>
        <Heading subtitle="Our Blog" title="Recent From Blog"/>
         <div className="container grid2">           
            {
              blog.slice(0,3).map((val)=>{
                return(
                    <>
                      <div className="items shadow">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <div className='admin flexSB'>
                                <span>
                                    <i className='fa fa-user'></i>
                                    <label htmlFor="">{val.type}</label>
                                </span>
                                <span>
                                    <i className='fa fa-calender-alt'></i>
                                    <label htmlFor="">{val.date}</label>
                                </span>
                                <span>
                                    <i className='fa fa-comment'></i>
                                    <label htmlFor="">{val.com}</label>
                                </span>
                            </div>
                            <h1>{val.title}</h1>
                            <p>{val.desc}</p>
                        </div>
                      </div>
                    </>
                )
              })
            }
         </div>
    </section>
  )
}

export default Hblogs
