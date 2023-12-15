import React from 'react'

const Head = () => {
  return (
    <section className='head'>
    <div className='container flexSB'> 
      <div className="logo">
          <h1>U.L.K</h1>
          <span>Kigali Independent University</span>
      </div>
      <div className="socialMedia links">
                <a href="https://wa.link/v7lbdi" className='linkedIn' style={{"--color": "#48C857"}}>
                <i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/mucyo-prince-29321421b/" className='linkedIn' style={{"--color": "#0072b1"}}>
                        <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                    <a href="https://www.instagram.com/mucyoprince12/" className='instagram' style={{"--color":"#E1306c"}}>
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href="https://web.facebook.com/johnx.prince" className='facebook' style={{"--color":"#4267B2"}}>
                        <i className='fa-brands fa-facebook-f'></i>
                    </a>
                    <a href="https://twitter.com/mucyoprince12" className='twitter' style={{"--color":"#01C2F7"}}>
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                    
                    <a href="https://github.com/Prince-Kid" className='github'style={{"--color" :"white"}}>
                        <i className='fa-brands fa-github'></i>
                    </a>
                </div>
    </div>
  </section>
  )
}

export default Head
