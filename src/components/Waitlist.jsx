import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Waitlist = () => {
  return (
    <div className='w-full h-[400px] lg:h-[300px] bg-[#0A3161] mb-8 flex flex-col lg:flex-row justify-between'>
      <div className='flex flex-col text-white my-auto pl-4 lg:pl-24'>
        <h1 className='text-[19px] font-semibold'>Why Join Waitlist?</h1>
        <h5 className='text-[15px]/6 w-[90%] lg:w-[43%] mt-2'>Be the First to Experience Smarter Money Management. <br /> Want to be financially confident and in control? Join our waitlist today and become part of the future of personal finance. As a thank you, waitlist members will receive exclusive launch incentives, early access, and the opportunity to shape how the app grows. This is your chance to be ahead of the curve and take full advantage of what we're building.</h5>
      </div>

      <div className='my-auto pl-4 lg:pl-0 lg:pr-24'>
        <button className='w-[150px] h-[45px] bg-transparent border-[1.9px] border-white rounded-3xl text-white font-semibold text-[17px]'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
      </div>
    </div>
  )
}

export default Waitlist