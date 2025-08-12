import React from 'react';  
import Home from './Home';
import Request from './Request';
import Services from './Services';
import WhyChooseus from './WhyChooseUs';
import Contact from './Contact';
import Subscribe from './Subscribe';
import AboutWaitlist from './AboutWaitlist';
import HowitWorksNew from './HowitWorksNew';
import WhyJoinWaitlist from './WhyJoinWaitlist';
import GetStartedNew from './GetStartedNew';

const Sections = () => {
  return (
    <div className='w-[100%] overflow-hidden'>
        <Home />
        <AboutWaitlist />
        <Request />
        <Services />
        <HowitWorksNew />
        <WhyChooseus />
        <WhyJoinWaitlist />
        <GetStartedNew />
        <Contact />
        <Subscribe /> 
      
    </div>
  )
}

export default Sections