import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Campaign = () => {
  return (
    <div>
        <nav className='w-[100%] flex flex-row justify-between '>
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
        
        <div className='w-[100%] h-auto py-16 bg-[#5c07B7]'>
            <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-white'>Join the wailist.</h2>
            <form action="" className='flex justify-center gap-4 w-[100%] items-center mt-8'>
                <input type="email" name="" id="" placeholder='Enter your email address' className='w-[60%] h-[50px] rounded-3xl pl-4 text-[17px] lg:text-[20px] outline-none font-semibold'/>
                <button className='w-[50px]  text-white  h-[50px] rounded-full  text-[20px] outline-none font-semibold border-[3px]'>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
            </form>
        </div>

        <div className='w-[100%] py-16'>
            <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>How it works.</h1>

            {/* How it works */}
            <div></div>

            <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>FAQs.</h1>            
        </div>

        <div className='w-full h-auto bg-[#0A3161] flex flex-col justify-between'>
            <div className='w-[100%] flex flex-col lg:flex-row lg:justify-evenly pl-4 lg:pl-0'>
                <div className='pt-8 pr-12'>
                    <div className='w-[110px] h-[100px] flex items-center -ml-8'>
                        <img src="/Splittas/assets/footer.png" alt="" />
                        <h2 className='text-[26px] text-white font-bold -ml-4'>Splittas</h2>
                    </div>
                </div>
                <div className='pt-8'>
                    <ul className='flex flex-col gap-2 text-white text-[19px]'>
                        <li className='font-bold'>Company</li>
                        <li className='mt-4'>About <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                        <li>Contacts <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                        {/* <li>Demo</li> */}
                    </ul>
                </div>
                <div className='pt-8'>
                    <ul className='flex flex-col gap-2 text-white text-[18px]'>
                        <li className='font-bold text-[19px] '>Services</li>
                        <li className='mt-4'>Financial Planning</li>
                        <li>Strategic Savings</li>
                        <li>Global Transactions</li>
                        <li>Airtime and Data</li>
                        <li>Currency Conversions</li>
                        <li>Loan Services</li>
                        <li>Budget & Expenses Tracking</li>
                        <li>Savings Plan</li>
                        <li>Financial Education</li>
                        <li>Security and Support</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-2 pt-8 text-white text-[19px]'>
                        <li className='font-bold'>Contacts</li>
                        <li className='mt-4'>+1 (433) 7823 000</li>
                        <li>Ottawa, CA.</li>
                        <li className='mt-4 font-bold'>Inquires</li>
                        <li>splittas@gmail.com.</li>
                        <ul className='flex gap-4 text-[20px] font-bold text-white mt-4 pb-4'>
                            <li><FontAwesomeIcon icon={faXTwitter} /></li>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                        </ul>
                    </ul>
                </div>
            </div>
                
            <div className='w-[90%] border-t-[1px] flex justify-center items-center pt-4 mx-auto h-[10%]'>
                <h2 className='text-center text-white font-normal text-[20px]  '>SPLITTAS TECHNOLOGY &copy; ALL RIGHTS RESERVED. </h2>
            </div>
            </div>
    </div>
  )
}

export default Campaign