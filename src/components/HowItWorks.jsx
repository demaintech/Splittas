import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <div className='w-full mt-20'>
        <h1 className='text-center font-bold text-[55px] text-[#5c07B7]'>How it works</h1>

        <div className='flex flex-col '>
            <div className='w-full flex justify-center'>
                <div className='w-[50%] h-[460px] flex justify-center scale-75'>
                    <img src={'/Splittas/assets/fin.png'} alt="" className='w-auto h-auto '/>
                </div>
                <div className='w-[50%] my-auto'>
                    <h4 className='text-[25px] font-bold'>01</h4>
                    <h1 className='text-[29px] font-bold'>Sign up</h1>
                    <p className='w-[60%] text-[18px]/7 font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam voluptatum perferendis est delectus! Pariatur voluptatem repellendus libero cum eos quasi deserunt dolorum laboriosam minus, distinctio, ea soluta architecto deleniti.</p>
                    <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] mt-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='w-[50%] my-auto text-left pl-24'>
                    <h4 className='text-[25px] font-bold'>01</h4>
                    <h1 className='text-[29px] font-bold'>Sign up</h1>
                    <p className='w-[60%] text-[18px]/7 text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam voluptatum perferendis est delectus! Pariatur voluptatem repellendus libero cum eos quasi deserunt dolorum laboriosam minus, distinctio, ea soluta architecto deleniti.</p>
                    <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] mt-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                </div>

                <div className='w-[50%] h-[460px] flex justify-center scale-75'>
                    <img src={'/Splittas/assets/fin.png'} alt="" className='w-auto h-auto '/>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='w-[50%] h-[460px] flex justify-center scale-75'>
                    <img src={'/Splittas/assets/fin.png'} alt="" className='w-auto h-auto '/>
                </div>
                <div className='w-[50%] my-auto'>
                    <h4 className='text-[25px] font-bold'>01</h4>
                    <h1 className='text-[29px] font-bold'>Sign up</h1>
                    <p className='w-[60%] text-[18px]/7 text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam voluptatum perferendis est delectus! Pariatur voluptatem repellendus libero cum eos quasi deserunt dolorum laboriosam minus, distinctio, ea soluta architecto deleniti.</p>
                    <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] mt-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='w-[50%] my-auto text-left pl-24'>
                    <h4 className='text-[25px] font-bold'>01</h4>
                    <h1 className='text-[29px] font-bold'>Sign up</h1>
                    <p className='w-[60%] text-[18px]/7 text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam voluptatum perferendis est delectus! Pariatur voluptatem repellendus libero cum eos quasi deserunt dolorum laboriosam minus, distinctio, ea soluta architecto deleniti.</p>
                    <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] mt-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                </div>

                <div className='w-[50%] h-[460px] flex justify-center scale-75'>
                    <img src={'/Splittas/assets/fin.png'} alt="" className='w-auto h-auto '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks