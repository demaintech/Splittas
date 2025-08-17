import { faFacebook, faInstagram, faSnapchat, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

const WhyJoinWaitlist = () => {
  return (
    <main className='w-full py-20'>
        <div className="w-full -skew-y-6 h-[900px] bg-[#090247]">
            <div className='relative skew-y-6 z-10 h-full w-full flex flex-col gap-4 items-center justify-cente pt-20 px-4 transform '>
                <div>
                    <h1 className='text-[30px] text-center font-extrabold text-white'>Why Join Campaign?</h1>
                    <p className='w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] mt-4 mx-auto text-center text-white text-[13px] font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi magnam accusamus ut libero non odit! Sint pariatur reprehenderit tempore, recusandae corporis saepe expedita autem distinctio neque. Expedita necessitatibus atque saepe.</p>
                    <p className='w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] mt-4 mx-auto text-center text-white text-[13px] font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi magnam accusamus ut libero non odit! Sint pariatur reprehenderit tempore, recusandae corporis saepe expedita autem distinctio neque. Expedita necessitatibus atque saepe.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-white'>
                    <button className='w-[160px] h-[45px] mt-4 bg-[#5c07B7] rounded-xl text-[18px] text-white font-bold'>Join waitlist</button>
                    <div className='flex  items-center gap-2 mt-6 '>
                        <div>
                            <h2 className='text-[15px] font-bold  '>Contact Us</h2>
                        </div>
                        <div className='w-[4px] h-6 bg-white'></div>
                        <div className='flex items-center gap-2'>
                            <a href="#" className='w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faFacebook} className='text-black font-extrabold'/>
                            </a>
                    
                            <a href="#" className='w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faXTwitter} className='text-black font-extrabold'/>
                            </a>
                    
                            <a href="#" className='w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faInstagram} className='text-black font-extrabold'/>
                            </a>
                    
                            <a href="#" className='w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faSnapchat} className='text-black font-extrabold'/>
                            </a>
                    
                            <a href="#" className='w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faTiktok} className='text-black font-extrabold'/>
                            </a>
                    
                            <a href="#" className='w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faWhatsapp} className='text-black font-extrabold'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='absolute w-[100%] h-auto border- mt-[280px] z-5'>
                    <img src='/assets/blurred.png' className='w-auto h-auto scale-90 mt-24 z-50'/>
                </div>
                 <div className='absolute top-0 right-0 mt-[580px]  mr-[80px]'>
                    <img src="/assets/splittas.png" className='scale-75 w-72 h-w-72 ' alt=''/>
                </div>
            </div>
            
        </div>
    </main>
  )
}

export default WhyJoinWaitlist