import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Home = () => {
  return (

    // purple = #5c07B7 Blue = #0A3161 Blue = #27AAE1
    <div className='w-full h-[100vh] '>
        <nav className='w-full flex flex-row justify-around'>
            <div className='w-[110px] h-[100px] my-auto flex'>
                <img src={'/src/assets/brand.jpg'} alt="" className='w-auto h-auto scale-75'/>
                <h1 className='my-auto text-[26px] font-bold ml-[-25px] z-50 text-[#5c07B7]'>Splittas</h1>
            </div>

            <ul className='flex font-bold gap-4 my-auto'>
                <li className='text-[#5c07B7] '>Home</li>
                <li>About <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                <li>Services</li>
                <li>Contact <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                <li>How it works</li>
            </ul>

            <div className='my-auto'>
                <button className='w-[120px] h-[40px] bg-[#5c07B7] rounded-3xl text-white font-semibold text-[14px]'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
            </div>
        </nav>

    {/* Hero */}

        <section className='w-full flex justify-between'>
            <div className='w-[50%] pl-14 pt-8'>
                <h1 className='text-[65px] font-extrabold'>Split the<span className='text-[#5c07B7]'> Stress, </span><br /> Not just the <span className='text-[#5c07B7]'> Bills. </span></h1>
                <p className='w-[78%] mt-4 text-gray-600 font-normal text-sm/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia est sint! Tempore dolorum repudiandae rem consequatur praesentium hic iure, eaque pariatur soluta quidem quam doloremque culpa ipsam eos sapiente!</p>
                <div className='flex gap-4 mt-8'>
                    <button className='w-[120px] h-[37px] bg-[#5c07B7] rounded-3xl text-white font-semibold text-[14px]'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    <div className='flex items-center gap-2 my-auto'>
                        <h2 className='text-[20px] font-semibold'>Contact Us</h2>
                        <div className='w-[2px] bg-black h-[25px]'></div>
                        <ul className='flex gap-2'>
                            <li><FontAwesomeIcon icon={faXTwitter} /></li>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-[460px]  flex justify-center scale-75'>
                <img src={'/src/assets/fin.png'} alt="" className='w-auto h-auto '/>
            </div>
        </section>
    </div>
  )
}

export default Home;