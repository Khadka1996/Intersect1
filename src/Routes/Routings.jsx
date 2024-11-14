import React from 'react'
import {  Routes ,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Applicationform from '../Pages/Applicationform'
import Career from '../Component/Career'
import SingleCareer from '../Component/singleCareer'
import Message from '../Message'
import OurProducts from '../Component/OurProducts'
const Routings = () => {
  return (
    <>
   
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<OurProducts/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/applicationform' element={<Applicationform/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/career/:id" element={<SingleCareer/>}/>
        
    </Routes>

    </>
  )
}

export default Routings