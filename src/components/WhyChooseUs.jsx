import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

const WhyChooseus = () => {
  return (
    <div className='w-full pb-24'>
        <h1 className='text-center  mx-auto font-extrabold text-[35px] lg:text-[55px]'>Why Choose Us?</h1>
        <p className='w-[90%] md:w-[60%] lg:[50%] xl:w-[40%]  text-[15px] font-semibold mx-auto text-center'>Our app lets you ceate real bank accounts in multiple currencies, send and receive moneey instantly, grow your savings through smart, goal based plans, and many more-with all in one place.</p>

        <div className='flex flex-col lg:flex-row items-center lg:items-start w-[100%] justify-center mt-24'>
            <div className='flex flex-col w-[240px] h-auto'>
                <div className='w-[120px] flex justify-center items-center mx-auto h-[120px] border-2 border-[#5c07B7] rounded-full'>
                    <span className='text-[40px] text-[#27AAE1] font-semibold'>$</span>
                </div>
                <h2 className='text-center text-[26px] mt-4 font-bold'>Multi-Currency Accounts</h2>
                <p className='text-center text-[16px] w-[90%] mt-2 text-gray-700 font-semibold mx-auto'>Open and manage accounts in multiple currencies with ease, helping you save and spend globally without hassle
                </p>
            </div>

            <div className='h-[120px] flex items-center'>
                <h2 className='my-auto text-[20px] font-semibold text-[#5c07B7]'>.................</h2>
            </div>

            <div className='flex flex-col w-[240px] h-auto'>
                <div className='w-[120px] flex justify-center items-center mx-auto h-[120px] border-2 border-[#5c07B7] rounded-full'>
                    <span className='text-[40px] text-[#27AAE1] font-semibold'>$</span>
                </div>
                <h2 className='text-center text-[26px] mt-4 font-bold'>Smart Savings Plans</h2>
                <p className='text-center text-[16px] w-[90%] mt-2 text-gray-700 font-semibold mx-auto'>Set goals, track progress, and automate your savings to acheive financial freedom faster.
                </p>
            </div>

            <div className='h-[120px] flex items-center'>
                <h2 className='my-auto text-[20px] font-semibold text-[#5c07B7] '>.................</h2>
            </div>
            <div className='flex flex-col w-[240px] h-auto'>
                <div className='w-[120px] flex justify-center items-center mx-auto h-[120px] border-2 border-[#5c07B7] rounded-full'>
                    <span className='text-[40px] text-[#27AAE1] font-semibold'>
                        <FontAwesomeIcon icon={faHeadset} />
                    </span>
                </div>
                <h2 className='text-center text-[26px] mt-4 font-bold'>24/7 Customer Support</h2>
                <p className='text-center text-[16px] w-[90%] mt-2 text-gray-700 font-semibold mx-auto'>We're here for you around the clock. Our dedicated support team is available anytime
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseus