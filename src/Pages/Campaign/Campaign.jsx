// import { main } from 'framer-motion/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Hero from './Hero';
import Faq from './Faq';
import UserProfile from './UserProfile';


const Campaign = () => {
  return (
    <main className='w-screen h-screen overflow-auto bg-[#5c07B7] bg-gray-900'>
      <div>
        <nav className='flex justify-evenly items-center'>
          <div>
            <h2>.</h2>
          </div>
          <div>
            <ul className='flex gap-4 text-[20px] font-bold text-white mt-4'>
              <a href="https://x.com/SplittasTech?t=Sz7beze2KkvC3IFD-FDfcg&s=09" target='_blank'>
                  <li><FontAwesomeIcon icon={faXTwitter} /></li>
              </a>
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faLinkedin} /></li>
              <a href="https://www.instagram.com/splittastechnology?igsh=YzljYTk1ODg3Zg==" target='_blank'>
                  <li><FontAwesomeIcon icon={faInstagram} /></li>
              </a>
                                    
              <li><FontAwesomeIcon icon={faDiscord} /></li>
            </ul>
          </div>
          <div>
            <span className='text-white text-xl'>
              {/* <FontAwesomeIcon icon={faMoon} /> */}
              <FontAwesomeIcon icon={faSun} />
            </span>
          </div>
        </nav>


      {/* Hero */}
        <UserProfile />
      </div>

      {/* Questions and answers */}
        <Faq /> 

      {/* Footer */}
      <div className='w-full flex justify-center items-center py-8'>
        <h2 className='text-[19px] text-gray-400'>&copy; Splittas Technology, 2025.</h2>
      </div>
    </main>  
  )
}

export default Campaign;