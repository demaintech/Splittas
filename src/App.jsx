import React from 'react'
import '/src/index.css';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import LandingPage from './Pages/LandingPage';
import Campaign from './Pages/Campaign';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const App = () => {
  return (
    <div className=''>
      <LandingPage />
      {/* <Campaign /> */}

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