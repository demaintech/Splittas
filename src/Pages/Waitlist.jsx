import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faArrowRightLong, faCaretRight, faMarker } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { div, h2 } from 'framer-motion/client';
import WaitlistHowItWorks from './WaitlistHowItWorks';

const refcode = "sp00721x";



const faqs = [
    {
        name: "What is waitlist?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error recusandae fugit enim vitae? Doloremque eos dolore, enim incidunt distinctio error nihil dolor dolorum quasi dolores quod inventore qui officiis?"
    },

    {
        name: "What is waitlist?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error recusandae fugit enim vitae? Doloremque eos dolore, enim incidunt distinctio error nihil dolor dolorum quasi dolores quod inventore qui officiis?"
    },
];


const faqsection = faqs.map(faq => 
    <>
        <div className='w-[80%] p-4 bg-[#5c07B7] mx-auto rounded-lg text-white font-semibold flex justify-between items-center mt-6'>
            <h2>{faq.name}</h2>
            <span className='hidden'>
                <FontAwesomeIcon icon={faAngleDown} />
            </span>

            <span>
                <FontAwesomeIcon icon={faAngleUp} />
            </span>
        </div>

        <div className='w-[80%] h-[150px] -mt-4 p-4 bg-[#5c07B7] mx-auto rounded-lg text-white hidden'>
            <p>{faq.content}</p>
        </div>
    </>
)

const Waitlist = () => {
  return (
    <div className='mt-[100px]'>
        
        <div className='w-[100%] h-auto py-16 bg-[#5c07B7]'>
            <div className=''>
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
            <div className='flex flex-col items-center hidden'>
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
            <WaitlistHowItWorks />

        {/* Faq Section */}
            <div className='mt-24'>
                <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>FAQs.</h1> 
                {faqsection}
            </div>          
        </div>

       
    </div>
  )
}

export default Waitlist;