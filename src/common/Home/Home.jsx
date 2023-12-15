import React from 'react'
import Hero from './hero/Hero'
import AboutCard from "../../components/About/AboutCard"
import Hcourse from './Hcourse'
import Testimony from '../../components/testimon/Testimony'
import Hblogs from './Hblogs'
import Hprice from './Hprice'

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <Hcourse/>
      <Testimony/>
      <Hblogs/> 
      <Hprice/>
    </>
  )
}

export default Home
