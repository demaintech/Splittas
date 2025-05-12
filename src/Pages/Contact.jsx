import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='w-[100%] z-50000000000000000'>
        <nav className='w-[100%] flex flex-row justify-between '>
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
        </nav>

        <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-[#5c07B7]'>We'll love to hear from you.</h2>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-[100%] lg:w-[50%] h-[460px]  flex justify-center scale-75'>
                <img src={'/Splittas/assets/fin.png'} alt="" className='w-auto h-auto '/>
            </div>
            <div className='w-[100%] lg:w-[50%]  h-[550px] flex flex-col items-center'>
                <h2 className='text-center text-[25px] font-bold text-[#5c07B7] mt-2'>Send us a message.</h2>
                <form action="" className='w-[90%] mt-4 lg:w-[70%] h-[400px] border-2 flex flex-col items-center gap-4 pt-8 rounded-3xl'>
                    <input type="text" placeholder='Enter your Full name' className='w-[90%] h-[50px] border-2 rounded-3xl pl-4'/>
                    <input type="email" placeholder='Enter your Email or phone'  className='w-[90%] h-[50px] border-2 rounded-3xl pl-4'/>
                    <textarea type="text" placeholder='Enter your message...'  className='w-[90%] h-[150px] border-2 rounded-3xl pl-4 pt-4 pr-4'/>
                    <button className='w-[90%] h-[50px] border-2 rounded-3xl bg-[#5c07B7] outline-none border-none text-white text-[19px] font-bold'>Send message</button>
                </form>
                <ul className='flex gap-4 text-[25px] font-bold text-[#5c07B7] mt-4'>
                    <li><FontAwesomeIcon icon={faXTwitter} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>
            </div>
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

export default Contact