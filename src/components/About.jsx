import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className='w-full flex justify-center mt-20 gap-4'>
        <div className='w-[45%] h-[400px]'>
            <img src={'/assets/about.png'} alt="" className='w-auto h-auto '/>
        </div>
        <div className='w-[45%] my-auto'>
            <h5 className='text-gray-600 text-[20px] font-semibold'>Who we are</h5>
            <h1 className='text-[30px] font-semibold'>Get to know about <span className='text-[#5c07B7]'>Splittas <br /> Technology.</span></h1>
            <p className='text-[16px] text-gray-600 font-normal text-sm/6 w-[80%] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deserunt dignissimos ipsum labore non dolor dolore animi quibusdam repellat perspiciatis expedita enim saepe assumenda vitae pariatur provident esse, itaque rerum.</p>
            <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-semibold text-[17px] mt-8'>Read more <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
        </div>
    </div>
  )
}

export default About