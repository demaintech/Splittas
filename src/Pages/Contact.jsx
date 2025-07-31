import React from 'react'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='w-[100%] mt-[150px] '>
        {/* <nav className='w-[100%] flex flex-row justify-between '>
            <div className='w-[110px] h-[100px] my-auto flex'>
                <img src={'/Splittas/assets/brand.jpg'} alt="" className='w-auto h-auto scale-75'/>
                <h1 className='my-auto text-[26px] font-bold ml-[-25px] z-50 text-[#5c07B7]'>Splittas</h1>
            </div>
                
            <div className='w-auto flex items-center pr-8'>
                <ul className='items-center flex font-bold gap-2 my-auto text-[18px]'>
                    <li>Home </li>
                    <li> <FontAwesomeIcon icon={faCaretRight} /></li>
                    <li  className='text-[#5c07B7]'>Contact</li>
                </ul>    
            </div>
        </nav> */}

        <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-[#5c07B7]'>We'll love to hear from you.</h2>
    
        <div className='flex flex-col lg:flex-row justify-between items-center py-20'>
            <div className='w-[100%] lg:w-[50%] h-auto flex items-center justify-center '>
                <img src="/assets/contactus.jpg" alt="" className='w-auto h-auto rounded-3xl scale-105'/>
            </div>
            <div className='w-[100%] lg:w-[50%]  h-[750px] flex flex-col items-center mt-24 lg:mt-0'>
                <h2 className='text-center text-[25px] font-bold text-[#5c07B7] mt-2'>Send us a message.</h2>
                <form action="" className='w-[90%] mt-4 lg:w-[70%] xl:w-[60%] h-[520px] border-2 flex flex-col items-center gap-6 pt-8 rounded-3xl'>
                    <input 
                        type="text"  
                        placeholder='Enter your Full name' 
                        className='w-[90%] h-[55px] border-2 rounded-xl pl-4 focus:border-[#5c07B7] focus:outline-none'
                        required
                        />
                    <input 
                        type="email" 
                        placeholder='Enter your Email or phone'  
                        className='w-[90%] h-[55px] border-2 rounded-xl pl-4 focus:border-[#5c07B7] focus:outline-none'
                        required
                        />
                    <textarea 
                        type="text" 
                        placeholder='Enter your message...'  
                        className='w-[90%] h-[150px] border-2 rounded-xl pl-4 pt-4 pr-4'
                        required
                        />
                    <button className='w-[90%] h-[50px] border-2 rounded-xl bg-[#5c07B7] outline-none border-none text-white text-[19px] font-bold mt-12 focus:border-[#5c07B7] focus:outline-none'>Send message</button>
                </form>
                <ul className='flex gap-4 text-[25px] font-bold text-[#5c07B7] mt-4'>
                    <li><FontAwesomeIcon icon={faXTwitter} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>
            </div>
        </div>



        
    </div>

  )
}

export default Contact