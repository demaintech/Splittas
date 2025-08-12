import { faFacebook, faInstagram, faSnapchat, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

const WhyJoinWaitlist = () => {
  return (
    <main className='w-full py-20'>
        <div className="w-full -skew-y-6 h-[500px] bg-[#090247]">
            <div className='relative skew-y-6 z-10 h-full w-full flex flex-col gap-4 items-center justify-center px-4 transform '>
                <div>
                    <h1 className='text-[17px] text-center font-bold text-white'>Why Join waitlist?</h1>
                    <p className='w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] mt-4 mx-auto text-center text-white text-[13px] font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi magnam accusamus ut libero non odit! Sint pariatur reprehenderit tempore, recusandae corporis saepe expedita autem distinctio neque. Expedita necessitatibus atque saepe.</p>
                    <p className='w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] mt-4 mx-auto text-center text-white text-[13px] font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi magnam accusamus ut libero non odit! Sint pariatur reprehenderit tempore, recusandae corporis saepe expedita autem distinctio neque. Expedita necessitatibus atque saepe.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-white'>
                    <button className='w-[120px] h-[40px] mt-4 bg-[#5c07B7] rounded-xl text-[15px] text-white font-bold'>Join waitlist</button>
                    <div className='flex  items-center gap-2 mt-6 '>
                        <div>
                            <h2 className='text-[15px] font-bold  '>Contact us</h2>
                        </div>
                        <div className='w-[2px] h-6 bg-white'></div>
                        <div className='flex items-center gap-2'>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook} className='text-white font-bold'/>
                            </a>
                    
                            <a href="#">
                                <FontAwesomeIcon icon={faXTwitter} className='text-white font-bold'/>
                            </a>
                    
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} className='text-white font-bold'/>
                            </a>
                    
                            <a href="#">
                                <FontAwesomeIcon icon={faSnapchat} className='text-white font-bold'/>
                            </a>
                    
                            <a href="#">
                                <FontAwesomeIcon icon={faTiktok} className='text-white font-bold'/>
                            </a>
                    
                            <a href="#">
                                <FontAwesomeIcon icon={faWhatsapp} className='text-white font-bold'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default WhyJoinWaitlist