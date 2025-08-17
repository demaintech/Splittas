import { faFacebook, faInstagram, faSnapchat, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AboutWaitlist = () => {
  return (
    <main className='w-full h-auto flex justify-center mt-[300px] '>
        <div className='w-[95%] md:w-[70%] lg:w-[60%] xl:w-[90%] pb-24 bg-white shadow-md shadow-gray-100 rounded-2xl'>
            <div className='mb-16 w-[100%] h-[30px]  bg-gradient-to-r from-[#5c07B7] via-blue-500 to-[#5c07B7] rounded-t-2xl  '></div>
                <div className=''>
                    <div>
                        <h2 className='text-center text-[35px] font-extrabold'>About <span>Campaign</span></h2>
                        <p className='text-[14px] text-gray-600 font-bold text-center mx-auto w-[90%] md:w-[70%] lg:w-[60%] mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minus doloribus, corporis consectetur officia esse qui delectus earum beatae dolores, cumque nemo repellendus fugit? Voluptates explicabo ut incidunt similique mollitia?</p>
                        <p className='text-[14px] text-gray-600 font-bold text-center mx-auto w-[90%] md:w-[70%] lg:w-[60%] mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis minus doloribus, corporis consectetur officia esse qui delectus earum beatae dolores, cumque nemo repellendus fugit? Voluptates explicabo ut incidunt similique mollitia?</p>
                    </div>
                    <div className=''>
                        <div>
                            <img src='/assets/aboutwaitlist.png' className='scale-75 w-90 h-90' />
                        </div>
                        <div className='w-[100%]  flex flex-col items-center'>
                            <button className='w-[160px] h-[45px] shadow-lg shadow-blue-200 mt-4 bg-[#5c07B7] rounded-xl text-[17px] text-white font-bold'>Join Campaign</button>

                        <div className='flex  items-center gap-2 mt-6 '>
                            <div>
                                <h2 className='text-[15px] font-bold  '>Contact us</h2>
                            </div>
                            <div className='w-[4px] h-6 bg-black'></div>
                            <div className='flex items-center gap-2'>
                                <a href="#" className='w-[25px] h-[25px] bg-black rounded-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faFacebook} className='text-white font-bold'/>
                                </a>

                                <a href="#" className='w-[25px] h-[25px] bg-black rounded-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faXTwitter} className='text-white font-bold'/>
                                </a>

                                <a href="#" className='w-[25px] h-[25px] bg-black rounded-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faInstagram} className='text-white font-bold'/>
                                </a>

                                <a href="#" className='w-[25px] h-[25px] bg-black rounded-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faSnapchat} className='text-white font-bold'/>
                                </a>

                                <a href="#" className='w-[25px] h-[25px] bg-black rounded-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faTiktok} className='text-white font-bold'/>
                                </a>

                                <a href="#" className='w-[25px] h-[25px] bg-black rounded-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={faWhatsapp} className='text-white font-bold'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default AboutWaitlist