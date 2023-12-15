import React from 'react'
import BogCard from './BogCard'
import "./blog.css"
const Blog = () => {
  return (
    <section className='blogs'>
      <div className="container grid2">
          <BogCard/>
      </div>
    </section>
  )
}

export default Blog
