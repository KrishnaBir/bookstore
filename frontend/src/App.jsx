import React from 'react'
import Home from './components/home/home.jsx'
import Courses from './components/courses/Courses.jsx'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Courses/>} />
      </Routes>


    {/* <Temp/> */}
    </>
  )
}

export default App
