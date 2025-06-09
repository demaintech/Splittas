import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong, faCopy, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    // [#0A3161]
  return (
    <div className='w-full h-auto bg-gray-900 flex flex-col justify-between'>
        <div className='w-[100%] flex flex-col lg:flex-row lg:justify-evenly pl-4 pb-8 lg:pl-0 text-[16px]'>
            <div className='pt-8 pr-12 pl-6'>
                <div className='w-[70px] h-[70px] flex items-center -ml-8'>
                    <img src="/Splittas/assets/footer.png" alt="" />
                    <h2 className='text-[26px] text-white font-bold ml-2'>Splittas</h2>
                </div>
            </div>
            <div className='pt-8'>
                <ul className='flex flex-col gap-2 text-white '>
                        <li className='font-bold'>Company</li>
                   
                    <Link to="/about">
                        <li className='mt-4'>About </li>
                     </Link>
                     <Link to="/contact">
                        <li>Contacts </li>
                    </Link>
                    {/* <li>Demo</li> */}
                </ul>
            </div>
            <div className='pt-8'>
                <ul className='flex flex-col gap-2 text-white '>
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
                <ul className='flex flex-col gap-2 pt-8 text-white '>
                    <li className='font-bold'>Contacts</li>
                    <li className='mt-4'>(+234) 913 363 6596</li>
                    <li className='mt-2'>(+234) 814 150 0971</li>
                    <li>Abia State, Nigeria.</li>
                    <li className='mt-4'>Inquires</li>
                    <li>splittastechnology@gmail.com</li>
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
                </ul>
            </div>

            <div className='pt-8'>
                <ul className='flex flex-col gap-2 text-white '>
                    <li className='font-bold'>Legal</li>
                    <Link to="/privacypolicy">
                        <li className='mt-4'>Privacy policy </li>
                    </Link>
                    <Link to="/termsofservice">
                        <li>Terms of service </li>
                    </Link>
                    
                    {/* <li>Demo</li> */}
                </ul>
            </div>
        </div>

        <div className='w-[98%] border-t-[1px] flex justify-center items-center pb-6 pt-4 mx-auto h-[10%]'>
            <h2 className='text-center text-white font-semibold text-[13px] '>&copy;  SPLITTAS TECHNOLOGY ALL RIGHTS RESERVED. </h2>
        </div>
    </div>
  )
}

export default Footer