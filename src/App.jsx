import React from 'react'
import '/src/index.css';
import Home from './components/Home';
import Request from './components/Request';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyChooseus from './components/Whychooseus';
import Waitlist from './components/Waitlist';
import Userhome from './components/Userhome';
// import TradeCenter from './components/TradeCenter';

const App = () => {
  return (
    <div className='bg-black'>
      {/* <Home />
      <Request />
      <About />
      <Services />
      <HowItWorks />
      <WhyChooseus />
      <Waitlist /> */}
      <Userhome />
    </div>
  )
}

export default App;