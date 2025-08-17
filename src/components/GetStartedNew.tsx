import { faAndroid, faApple, faFacebook, faInstagram, faSnapchat, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const GetStartedNew = () => {
  return (
    <main className='w-full h-auto z-50'>
        <div className='w-[95%] pt-40 flex flex-col z-50 pb-12 items-center bg-white shadow-lg min-h-[200px] rounded-2xl -mt-32 mx-auto'>
            <div className='w-[100%] lg:w-[50%] flex flex-col pl-4 '>
                 <h2 className='text-[35px] lg:text-[45px] text-center font-extrabold mx-auto '><span className='text-[#5c07B7]'>Plan</span> and <span className='text-[#5c07B7]'> Manage <br /> your Finances</span> <br /> with us.</h2>
                 <p className='text-[15px] lg:text-[20px]  font-bold mx-auto'>Download our app and get started</p>
                 
             </div>
             <div className='w-[100%] lg:w-[50%] h-auto flex flex-col items-center justify-center scale-75'>
               <img src='/assets/aboutwaitlist.png' className='scale-105 w-100 h-100' />

               <div className='flex text-white gap-4  mx-auto lg:mx-0 '>
                    <Link to="/waitlist">
                       <button className='w-[160px] h-[50px] shadow-lg shadow-blue-300 text-[18px] font-semibold bg-[#5c07B7] rounded-2xl'><FontAwesomeIcon icon={faAndroid} /> Android</button>
                     </Link>
                     <Link to="/waitlist">
                       <button className='w-[160px] h-[50px] shadow-lg shadow-blue-300 text-[18px] font-semibold bg-[#5c07B7] rounded-2xl'><FontAwesomeIcon icon={faApple} /> IOS</button>
                     </Link>
                 </div>

                 <div className='flex  items-center gap-2 mt-12 '>
                    <div>
                        <h2 className='text-[20px] font-bold'>Contact us</h2>
                    </div>
                    <div className='w-[4px] h-8 bg-black'></div>
                    <div className='flex items-center gap-2'>
                        <a href="#" className='w-[28px] h-[28px] bg-black rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faFacebook} className='text-white font-bold'/>
                        </a>
                 
                        <a href="#" className='w-[28px] h-[28px] bg-black rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faXTwitter} className='text-white font-bold'/>
                        </a>
                 
                        <a href="#" className='w-[28px] h-[28px] bg-black rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faInstagram} className='text-white font-bold'/>
                        </a>
                 
                        <a href="#" className='w-[28px] h-[28px] bg-black rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faSnapchat} className='text-white font-bold'/>
                        </a>
                 
                        <a href="#" className='w-[28px] h-[28px] bg-black rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faTiktok} className='text-white font-bold'/>
                        </a>
                 
                        <a href="#" className='w-[28px] h-[28px] bg-black rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faWhatsapp} className='text-white font-bold'/>
                        </a>
                    </div>
                </div>
             </div>   
        </div>
    </main>
  )
}

export default GetStartedNew