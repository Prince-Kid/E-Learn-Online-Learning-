import React from 'react'
import {price} from "../../Data"
const PricingCard = () => {
  return (
    <>
      {
       price.map((val)=>{
        return(
            <div className="items shadow">
                <div className="title">
                    <h2>{val.name}</h2>
                </div>
                <div className="price">
                  
                    <h1><span>$</span>{val.price}</h1>
                </div>
                <p>
                    {val.desc}
                </p>
                <button className='outline-btn'>Get Started</button>
            </div>
        )
       })
      }
    </>
  )
}

export default PricingCard
