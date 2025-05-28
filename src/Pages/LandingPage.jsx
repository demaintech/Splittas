import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from './About'
import Contact from './Contact';
import Waitlist from './Waitlist';
import Sections from '../components/Sections';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


const LandingPage = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/waitlist' element={<Waitlist />} />
        <Route path='*' element={<Sections />} />
        <Route path='/' element={<Sections />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default LandingPage;

