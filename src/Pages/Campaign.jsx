import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCaretRight, faMarker } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const refcode = "sp00721x";

const Campaign = () => {
  return (
    <div className='mt-[100px]'>
        
        <div className='w-[100%] h-auto py-16 bg-[#5c07B7]'>
            <div className='hidden'>
                <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-white'>Join the wailist.</h2>
                <form action="" className='flex flex-col justify-center gap-6 w-[100%] items-center mt-8'>
                    <input type="email" name="" id="" placeholder='Enter your email address' className='w-[70%] lg:w-[47%] h-[50px] bg-transparent border-2 border-white text-white rounded-3xl pl-4 text-[17px] lg:text-[20px] outline-none font-semibold'/>
                    <input type="email" name="" id="" placeholder='Ref. Code (optional)' className='w-[70%] lg:w-[47%] h-[50px] bg-transparent border-2 border-white  text-white rounded-3xl pl-4 text-[17px] lg:text-[20px] outline-none font-semibold'/>
                    <button className='w-[70%] lg:w-[47%] mt-4  bg-white h-[50px] rounded-full  text-[20px] outline-none font-bold text-[#5c07B7]'>
                        Join Waitlist <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                </form>
            </div>

        {/* This Section will be displayed after successful registration*/}
            <div className='hidden'>
                <div className='flex  justify-center items-center gap-2'>
                    <h2 className='text-center text-[25px] lg:text-[30px] font-bold text-white'>Your ref code:</h2>
                    <span className='text-center text-[25px] lg:text-[30px] font-bold text-white'>{refcode}
                        <button>
                            <FontAwesomeIcon icon={faCopy} className='ml-2'/>
                        </button>
                    </span>
                </div>
                <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-white'>Thank you for joining the waitlist!</h2>
                <p className='text-[20px] lg:text-[28px] font-bold mx-auto lg:mx-0 text-center text-white'>
                    We'll notify you when our app is ready.
                </p>
                <div className='mt-16 flex flex-col items-center'>
                    <h2 className='text-center text-[20px] font-semibold text-white'>Join our communities</h2>
                    <ul className='flex gap-4 text-white mx-auto text-[30px] mt-6'>
                        <li>
                            <FontAwesomeIcon icon={faDiscord} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXTwitter} />
                        </li>
                    </ul>

                    <div className='flex items-center flex-col'>
                        <h2 className='text-center text-[20px] font-semibold text-white mt-6'>Follow our social medias below to stay on top of the trend.</h2>
                        <ul className='flex  items-center gap-4 text-white mx-auto text-[30px] mt-6'>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faXTwitter} />
                            </li>
                    </ul>
                    </div>
                </div>
            </div>


        {/* This section will be displayed If email already exists. */}    
            <div className='flex flex-col items-center'>
                <h2 className='text-center text-[20px] lg:text-[55px] font-bold text-white'>This Email already joined the waitlist.</h2>
                <div className='flex  justify-center items-center gap-2'>
                    <h2 className='text-center text-[20px] lg:text-[30px] font-bold text-white'>Your ref code:</h2>
                    <span className='text-center text-[22px] lg:text-[30px] font-bold text-white'>{refcode}
                        <button>
                            <FontAwesomeIcon icon={faCopy} className='ml-2'/>
                            
                        </button>
                    </span>
                </div>
            </div>
            
        </div>

        <div className='w-[100%] py-16'>
            <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>How it works.</h1>

            {/* How it works */}
            <div></div>

            <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>FAQs.</h1>            
        </div>

       
    </div>
  )
}

export default Campaign