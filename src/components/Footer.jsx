import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong, faCopy, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    // [#0A3161]
  return (
    <div className='w-full h-auto bg-[#0A3161] flex flex-col justify-between'>
        <div className='w-[100%] flex flex-col lg:flex-row lg:justify-evenly pl-4 pb-8 lg:pl-0'>
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
                    <li className='mt-4'>Inquires</li>
                    <li>splittas@gmail.com.</li>
                    <ul className='flex gap-4 text-[20px] font-bold text-white mt-4'>
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
  )
}

export default Footer