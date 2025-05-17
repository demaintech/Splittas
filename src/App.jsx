import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/index.css';
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Campaign from './Pages/Campaign';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import Sections from './components/Sections';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <div className=''>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/waitlist' element={<Campaign />} />
        <Route path='*' element={<Sections />} />
        <Route path='/' element={<Sections />} />
      </Routes>
      <Footer />

    {/* Customer Support Container */}
      {/* <div className='w-full h-[100vh] z-500000 fixed  top-0 flex items-end'  >
        <div className='w-[100%] h-auto relative'>
          <div className='ml-[75%] lg:ml-[90%] mb-[30px]'>
            <button 
              className='w-[80px] h-[80px] rounded-full text-[#5c07B7] text-[30px] bg-white shadow-2xl shadow-gray-900 border-[1px] border-white'
            >
              <FontAwesomeIcon icon={faHeadset} />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default App;