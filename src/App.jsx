import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/index.css';
import Home from './components/Home';
import Request from './components/Request';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyChooseus from './components/Whychooseus';
import Waitlist from './components/Waitlist';
import GetStarted from './components/GetStarted';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Test from './Test';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className=''>
      <Home />
      <Request />
      <About />
      <Services />
      <HowItWorks />
      <WhyChooseus />
      <Waitlist />
      <GetStarted />
      <Contact />
      <Subscribe />
      <Footer />
      {/* <Test /> */}

      {/* Customer Support Container */}
      <div 
        className='w-full h-[100vh] z-50000000000000 fixed  top-0 flex items-end'  
      >
        <div 
          className='w-[100%] h-auto relative'>
          <div
            className='ml-[90%] mb-[30px]'
          >
            <button 
              className='w-[80px] h-[80px] rounded-full text-[#5c07B7] text-[30px] bg-white shadow-2xl shadow-gray-900 border-[1px] border-white'
            >
              <FontAwesomeIcon icon={faHeadset} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;