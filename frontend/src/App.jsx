import React from 'react'
import Home from './components/home/home.jsx'
import Course from './components/Course.jsx'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Course/>} />
      </Routes>


    {/* <Temp/> */}
    </>
  )
}

export default App
