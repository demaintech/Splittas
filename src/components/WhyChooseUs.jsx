import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

const WhyChooseus = () => {
  return (
    <div className='w-full mt-20 pb-24'>
        <h1 className='text-center font-bold text-[45px] lg:text-[55px] text-[#5c07B7]'>Why Choose Us?</h1>

        <div className='flex flex-col lg:flex-row w-[100%] justify-center mt-12'>
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
                <p className='text-center text-[16px] w-[90%] mt-2 text-gray-700 font-semibold mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi libero quis, corrupti officiis possimus maiores
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseus