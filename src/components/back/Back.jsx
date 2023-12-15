import React from 'react'
import { useLocation } from "react-router-dom"
const Back = ({sub}) => {
    const location = useLocation()
  return (
    <>
    <section className='card'>
      <h2>HOME/{location.pathname.split("/")[1]}</h2>
      <h1>{sub}</h1>
    </section>
    <div className="margin"></div>
    </>

  )
}

export default Back
