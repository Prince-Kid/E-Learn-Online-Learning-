import React from 'react'
import Back from "../back/Back"
import OnlineCourses from "./OnlineCourses"
import CourseCard from './CourseCard'
const Courses = () => {
  return (
    <> 

    <Back sub="Explore Courses"/>
      <OnlineCourses/>
      <CourseCard/>
    </>
  )
}

export default Courses
