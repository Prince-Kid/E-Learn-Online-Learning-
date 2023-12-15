import React from 'react'
import {awrapper} from "../../Data"

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
         <div className="container flexSB">
          {
            awrapper.map((val)=>{
                return(
                    <div className='box'>
                    <div className="img">
                        <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                         <h3>{val.data}</h3>
                         <h1>{val.title}</h1>
                    </div>
                    </div>
                )
            })
          }
         </div>
      </section>
    </>
  )
}

export default Awrapper
