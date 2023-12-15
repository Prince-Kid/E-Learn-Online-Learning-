import React from 'react'
import PricingCard from './PricingCard'
import "./pricing.css"
const Pricing = () => {
  return (
    <section className='pricing'>
      <div className="container grid4">
         <PricingCard/>
      </div>
    </section>
  )
}

export default Pricing
