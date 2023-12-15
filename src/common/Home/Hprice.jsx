import React from 'react'
import Heading from '../heading/Heading'
import PricingCard from '../../components/pricing/PricingCard'
import "../../components/pricing/pricing.css"
const Hprice = () => {
  return (
    <section className='pricing'>
        <Heading subtitle="Our Pricing" title="Pricing & Packages"/>
         <div className="container grid4">
              <PricingCard/>
         </div>
    </section>
  )
}

export default Hprice
