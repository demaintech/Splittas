import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Request = () => {
  return (
    <div className='w-full h-[100px] bg-[#5c07B7] mb-8 flex justify-between'>
      <div className='flex flex-col text-white my-auto pl-24'>
        <h1 className='text-[25px] font-bold'>Request a call back right now?</h1>
        <h5 className='text-[16px]'>We'll be glad to hear from you.</h5>
      </div>

      <div className='my-auto pr-24'>
        <button className='w-[150px] h-[45px] bg-transparent border-[1.8px] border-white rounded-3xl text-white font-bold text-[17px]'>Contact Us <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
      </div>
    </div>
  )
}

export default Request