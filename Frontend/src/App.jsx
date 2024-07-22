import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Route,Routes} from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
const App = () => {
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={<Courses/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>

    </Routes>
    

    </>
  )
}

export default App