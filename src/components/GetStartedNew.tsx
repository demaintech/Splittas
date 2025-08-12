import { faAndroid, faApple, faFacebook, faInstagram, faSnapchat, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const GetStartedNew = () => {
  return (
    <main className='w-full h-auto z-50'>
        <div className='w-[90%] pt-40 flex flex-col z-50 pb-12 items-center bg-white shadow-lg min-h-[200px] rounded-2xl -mt-32 mx-auto'>
            <div className='w-[100%] lg:w-[50%] flex flex-col pl-4 '>
                 <h2 className='text-[35px] lg:text-[55px] text-center font-bold mx-auto '><span className='text-[#5c07B7]'>Plan</span> and Manage <br /> your <span className='text-[#5c07B7]'>Finances</span> <br /> with us.</h2>
                 <p className='text-[15px] lg:text-[28px]  font-bold mx-auto'>Download our app and get started <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></p>
                 
             </div>
             <div className='w-[100%] lg:w-[50%] h-auto flex flex-col items-center justify-center scale-75'>
               <img src='/assets/aboutwaitlist.png' className='scale-50 w-100 h-100' />

               <div className='flex text-white gap-4  mx-auto lg:mx-0 '>
                    <Link to="/waitlist">
                       <button className='w-[150px] h-[50px] text-[18px] font-semibold bg-[#5c07B7] rounded-2xl'><FontAwesomeIcon icon={faAndroid} /> Android</button>
                     </Link>
                     <Link to="/waitlist">
                       <button className='w-[150px] h-[50px] text-[18px] font-semibold bg-[#5c07B7] rounded-2xl'><FontAwesomeIcon icon={faApple} /> IOS</button>
                     </Link>
                 </div>

                 <div className='flex  items-center gap-2 mt-6 '>
                    <div>
                        <h2 className='text-[15px] font-bold  '>Contact us</h2>
                    </div>
                    <div className='w-[2px] h-6 bg-black'></div>
                    <div className='flex items-center gap-2'>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} className='text-black font-bold'/>
                        </a>
                 
                        <a href="#">
                            <FontAwesomeIcon icon={faXTwitter} className='text-black font-bold'/>
                        </a>
                 
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} className='text-black font-bold'/>
                        </a>
                 
                        <a href="#">
                            <FontAwesomeIcon icon={faSnapchat} className='text-black font-bold'/>
                        </a>
                 
                        <a href="#">
                            <FontAwesomeIcon icon={faTiktok} className='text-black font-bold'/>
                        </a>
                 
                        <a href="#">
                            <FontAwesomeIcon icon={faWhatsapp} className='text-black font-bold'/>
                        </a>
                    </div>
                </div>
             </div>   
        </div>
    </main>
  )
}

export default GetStartedNew