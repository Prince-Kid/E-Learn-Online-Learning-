import React from 'react'
import {Link} from "react-router-dom"
import {blog} from "../../Data"
import "./footer.css"
const Footer = () => {
  return (
    <>
    <section className='Newsletter'>
      <div className="container flexSB">
          <div className="left">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <h4>Far far away, behind the word mountains</h4>
          </div>
          <div className="right">
              <input type="email" placeholder='Enter Email Here ....'/>
              <i className='fa fa-paper-plane'></i>
          </div>
      </div>
    </section>
    <footer>
        <div className="container flexSB">
            <div className="box logo">
                  <h1>U.L.K</h1>
                  <span>Kigali Independent University</span>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-twitter icon'></i>
                <i className='fab fa-instagram icon'></i>
            </div>
            <div className="box links">
                  <h3>Explore</h3>
                  <ul>
                  <li>
               <Link to ="/">Home</Link> 
                </li>
                <li>  
                  <Link to ="/courses">All Courses</Link>  
                </li>
                <li>
                  <Link to ="/about">About Us</Link>
                </li>
                <li>
                  <Link to ="/Team">Team</Link> 
                </li>
               
                  </ul>
            </div>
            <div className="box links">
                   <h3>Quick Links</h3>
                   <ul>
                <li>
                  <Link to ="/pricing">Pricing</Link>
                </li>
                <li>
                <Link to ="/journal">Journal</Link> 
                </li>
                <li>
                <Link to ="/contact">Contact</Link> 
                </li>
                   </ul>
            </div>
            <div className="box">
                <h3>recent Post</h3>
                  {
                    blog.slice(0,3).map((val)=>{
                        return(
                            <div className="items flexSB">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                    <span>
                                        <i className='fa fa-calendar-alt'></i>
                                       <label htmlFor="">{val.date}</label> 
                                    </span>
                                    <span>
                                        <i className='fa fa-user'></i>
                                        <label htmlFor=""> {val.type}</label>
                                       
                                    </span>
                                   <h4>
                                    {val.title.slice(0, 40)}...
                                   </h4>
                                </div>
                            </div>
                        )
                    })
                  }
            </div>
            <div className="box last">
                <h3>Have a Questions ?</h3> 
                <ul>
                <li>
                    <i className='fa fa-map'></i>
                    Rubavu,Rwanda</li>
                <li>
                    <i className='fa fa-phone-alt'></i>
                    +250783154587</li>
                <li>
                    <i className='fa fa-paper-plane'></i>
                    mucyoprinc@gmail.com</li>
                </ul>
              
            </div>
        </div>
      
    </footer>
    <div className="legal">
            <p>
                Copyright@2023 All rights reserved | Made With <i className='fa fa-heart'></i>by Prince~Kid
            </p>
        </div>
    </>
  )
}

export default Footer
