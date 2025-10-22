import React from 'react'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Course from '../Course.jsx'

import list from '../../../public/list.json'


function Courses() {
  // console.log(list);
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



