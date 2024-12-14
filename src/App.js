import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
// import './App.css';
import Home from './components/Home';
import About from './components/About';
import OurMenu from './components/OurMenu';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Contact from './components/Contact';

// import Section1 from './components/Section1';
// import About from './components/About';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route/> 
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/ourmenu' element={<OurMenu/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
     
        </Routes>
        {/* <Layout/> */}
      </Router>
    </div>
  )
}

export default App
