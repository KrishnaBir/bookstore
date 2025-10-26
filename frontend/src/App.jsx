import React from 'react'
import Home from './components/home/home.jsx'
import Courses from './components/courses/Courses.jsx'

import Signup from './components/Signup.jsx'

import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Courses/>} />
        <Route path='/signup' element={<Signup/>} />


      </Routes>


    {/* <Temp/> */}
    </>
  )
}

export default App
