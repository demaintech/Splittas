import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react';

const Footer = () => {
    // [#0A3161]
  return (
    <div className='w-full h-auto bg-[#060130] flex flex-col justify-between '>
        <div className='xl:pl-20 pl-12 xl:pr-20 pr-12 w-full  flex flex-row justify-between items-center'>
            <div className='w-[170px] h-[170px] flex items-center -ml-8'>
                <img src="/assets/FooterLogo.png" alt="" className='scale-125 w-auto h-auto'/>
                    {/* <h2 className='text-[26px] text-white font-bold ml-2'>Splittas</h2> */}
                </div>
                <Link to="/#home">
                    <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white'>
                        <img src="/assets/btn.png" alt="" className='-rotate-90'/>
                    </div>
                </Link>
        </div>
        <div className='md::w-[55%] md::mx-auto flex flex-col lg:flex-row lg:justify-evenly pl-4 pb-12 lg:pl-0 text-[16px]'>
            
            <div className='pt-8'>
                <ul className='flex flex-col gap-2 text-white '>
                        <li className='font-bold'>Company</li>
                   
                    <Link to="/about">
                        <li className='mt-4'>About </li>
                     </Link>
                     <Link to="/contact">
                        <li>Contacts </li>
                    </Link>
                    <Link to="/waitlist">
                        <li>Waitlist </li>
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
                    <li className='mt-4 text-blue-600'>(+234) 913 363 6596</li>
                    <li className='mt-2 text-blue-600'>(+234) 814 150 0971</li>
                    <li>Abia State, Nigeria.</li>
                    <li className='mt-4 font-bold'>Inquires</li>
                    <li>splittastechnology@gmail.com</li>
                    <ul className='flex gap-4 text-[20px] font-bold text-white mt-4'>
                        <a href="https://x.com/SplittasTech?t=Sz7beze2KkvC3IFD-FDfcg&s=09" target='_blank'>
                            <li><FontAwesomeIcon icon={faXTwitter} /></li>
                        </a>

                        <a href='https://www.facebook.com/profile.php?id=61574679375818'>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                        </a>

                        <li><FontAwesomeIcon icon={faLinkedin} /></li>

                        <a href="https://www.instagram.com/splittastechnology?igsh=YzljYTk1ODg3Zg==" target='_blank'>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                        </a>
                        
                        <a href='https://discord.gg/bPcmtB2SC2'>
                            <li><FontAwesomeIcon icon={faDiscord} /></li>
                        </a>
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

    <div className='w-[100%] bg-white border-t-[1px] flex justify-center  pt-8 items-center pb-6  h-[100px]'>
            <h2 className='text-center font-bold text-[13px] '>&copy;  SPLITTAS TECHNOLOGY ALL RIGHTS RESERVED. </h2>
        </div>
    </div>
  )
}

export default Footer