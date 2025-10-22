import React from 'react'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Course from '../Course.jsx'


function Courses() {
  
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Course/>
      </div>
      <Footer/>

    </>
  )
}

export default Courses



