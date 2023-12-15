import React from 'react'
import Heading from '../../heading/Heading'
import "./hero.css"
const Hero = () => {
  return (
    <>
    <section className='hero'>
      <div className="container">
        <div className="row">
            <Heading subtitle="WELCOME TO ULK" title="Best Online Education Expertise"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit blanditiis rerum beatae tenetur, quae modi possimus repellendus veniam perspiciatis? Temporibus neque maiores natus, veritatis perspiciatis quos magni quae labore.</p>
        
        <div className='button'>
              <button className='primary-btn'>GET STARTED NOW</button>
              <button>VIEW COURSE</button>
        </div>
        </div>
    
      </div>
    </section>
        <div className='margin'></div>
        </>
  )
}

export default Hero
