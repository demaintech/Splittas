import { faFacebook, faInstagram, faSnapchat, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AboutWaitlist = () => {
  return (
    <main className='w-full h-auto flex justify-center py-  '>
        <div className='w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] pb-24 bg-white shadow-sm rounded-2xl'>
            <div className='mb-16 w-[100%] h-[50px]  bg-gradient-to-r from-[#5c07B7] via-blue-500 to-[#5c07B7] rounded-t-2xl  '></div>
            <div>
                <div>
                    <h2 className='text-center text-[35px] font-extrabold'>About <span>Waitlist</span></h2>
                    <p className='text-[14px] text-gray-600 font-semibold text-center mx-auto w-[86%] md:w-[70%] lg:w-[60%] mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minus doloribus, corporis consectetur officia esse qui delectus earum beatae dolores, cumque nemo repellendus fugit? Voluptates explicabo ut incidunt similique mollitia?</p>
                    <p className='text-[14px] text-gray-600 font-semibold text-center mx-auto w-[86%] md:w-[70%] lg:w-[60%] mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minus doloribus, corporis consectetur officia esse qui delectus earum beatae dolores, cumque nemo repellendus fugit? Voluptates explicabo ut incidunt similique mollitia?</p>
                </div>
                <div>
                    <img src='/assets/aboutwaitlist.png' className='scale-50 w-100 h-100' />
                </div>
                <div className='w-[100%]  flex flex-col items-center'>
                    <button className='w-[120px] h-[40px] mt-4 bg-[#5c07B7] rounded-xl text-[15px] text-white font-bold'>Join waitlist</button>

                    <div className='flex  items-center gap-2 mt-6 '>
                        <div>
                            <h2 className='text-[15px] font-bold  '>Contact us</h2>
                        </div>
                        <div className='w-[2px] h-6 bg-black'></div>
                        <div className='flex items-center gap-2'>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook} className='text-black font-bold'/>
                            </a>

                            <a href="#">
                                <FontAwesomeIcon icon={faXTwitter} className='text-black font-bold'/>
                            </a>

                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} className='text-black font-bold'/>
                            </a>

                            <a href="#">
                                <FontAwesomeIcon icon={faSnapchat} className='text-black font-bold'/>
                            </a>

                            <a href="#">
                                <FontAwesomeIcon icon={faTiktok} className='text-black font-bold'/>
                            </a>

                            <a href="#">
                                <FontAwesomeIcon icon={faWhatsapp} className='text-black font-bold'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default AboutWaitlist