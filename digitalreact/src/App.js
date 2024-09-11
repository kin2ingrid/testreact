import React from 'react'
import About from './pages/About'
import Service from './pages/Service'
import Testimonial from './pages/Testimonial'
import Project from './pages/Project'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Teams from './pages/Teams'
import Contacts from './pages/Contacts'


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contacts' element={<Contacts/>}></Route>
    <Route path='/teams' element={<Teams/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/testimonial' element={<Testimonial/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/projet' element={<Project/>}></Route>
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;