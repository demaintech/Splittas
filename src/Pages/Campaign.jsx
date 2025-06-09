// import { main } from 'framer-motion/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faMoon } from '@fortawesome/free-solid-svg-icons';

const Campaign = () => {
  return (
    <main className='w-screen h-screen bg-[#5c07B7]'>
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
              <FontAwesomeIcon icon={faMoon} />
            </span>
          </div>
        </nav>


        {/* Hero */}

        <div className='flex w-full justify-center gap-16 items-center'>
          <div className='flex flex-col w-[50%]'>
            <h2 className='text-white font-bold text-[56px]'>Splittas Premium <br /> Account</h2>
            <p className='text-gray-300 text-[17px] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit beatae voluptatum voluptas in eius quia, repudiandae unde, doloremque ex nobis voluptates. Eius facere distinctio rerum velit quia ipsum doloribus.</p>
            <button className='flex justify-between rounded-sm mt-8 items-center w-[350px] p-4 font-bold h-[50px] bg-white'>
              <div className='flex items-center gap-6'>
                <FontAwesomeIcon icon={faXTwitter} />
                <h2 className='text-[17px]'>Connect Twitter</h2>
              </div>
              <div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </main>  
  )
}

export default Campaign;