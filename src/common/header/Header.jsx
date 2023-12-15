import React from 'react'
import Head from './Head'
import {Link} from "react-router-dom"
import "./header.css"


const Header = () => {
  return (
    <>
    <Head/>
    <header>   
        <nav className='flexSB'>
            <ul className='flexSB'>
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
        </nav>
    </header>
   
    </>
  )
}

export default Header
