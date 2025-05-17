import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Campaign = () => {
  return (
    <div className='mt-[100px]'>
        {/* <nav className='w-[100%] flex flex-row justify-between '>
            <div className='w-[110px] h-[100px] my-auto flex'>
                <img src={'/Splittas/assets/brand.jpg'} alt="" className='w-auto h-auto scale-75'/>
                <h1 className='my-auto text-[26px] font-bold ml-[-25px] z-50 text-[#5c07B7]'>Splittas</h1>
            </div>
                        
            <div className='w-auto flex items-center pr-8'>
                <ul className='items-center flex font-bold gap-2 my-auto text-[18px]'>
                    <li>Home </li>
                    <li> <FontAwesomeIcon icon={faCaretRight} /></li>
                    <li  className='text-[#5c07B7]'>Waitlist</li>
                </ul>    
            </div>
        </nav>
         */}
        <div className='w-[100%] h-auto py-16 bg-[#5c07B7]'>
            <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-white'>Join the wailist.</h2>
            <form action="" className='flex flex-col justify-center gap-6 w-[100%] items-center mt-8'>
                <input type="email" name="" id="" placeholder='Enter your email address' className='w-[70%] lg:w-[47%] h-[50px] bg-transparent border-2 border-white text-white rounded-3xl pl-4 text-[17px] lg:text-[20px] outline-none font-semibold'/>
                <input type="email" name="" id="" placeholder='Ref. Code (optional)' className='w-[70%] lg:w-[47%] h-[50px] bg-transparent border-2 border-white  text-white rounded-3xl pl-4 text-[17px] lg:text-[20px] outline-none font-semibold'/>
                <button className='w-[70%] lg:w-[47%] mt-4  bg-white h-[50px] rounded-full  text-[20px] outline-none font-bold text-[#5c07B7]'>
                    Join Waitlist <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
            </form>
        </div>

        <div className='w-[100%] py-16'>
            <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>How it works.</h1>

            {/* How it works */}
            <div></div>

            <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>FAQs.</h1>            
        </div>

       
    </div>
  )
}

export default Campaign