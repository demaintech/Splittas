import React from 'react'
import Home from './Home';
import Request from './Request';
import About from './About';
import Services from './Services';
import HowItWorks from './HowItWorks';
import WhyChooseus from './Whychooseus';
import Waitlist from './Waitlist';
import GetStarted from './GetStarted';
import Contact from './Contact';
import Subscribe from './Subscribe';

const Sections = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
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
      
    </div>
  )
}

export default Sections