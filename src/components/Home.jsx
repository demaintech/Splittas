import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Home = () => {
  return (

    // purple = #5c07B7 Blue = #0A3161 Blue = #27AAE1
    <div className='w-full h-[100%]'>
    {/* Hero */}

        <section className='w-full flex flex-col lg:flex-row justify-between mt-24'>
            <div className='w-[100%] lg:w-[50%] pl-6 md:pl-14 pt-8'>
                <h1 className='text-[45px] lg:text-[65px] font-extrabold'>Split the<span className='text-[#5c07B7]'> Stress, </span><br /> Not just the <span className='text-[#5c07B7]'> Bills. </span></h1>
                <p className='w-[96%] mt-4 text-gray-600 font-semibold text-sm/6'><span className='text-gray-500 font-extrabold'>Plan Smarter, Live Better.</span> <br /> Be the first 100 users to unlock full premium access access to our all-in-one Fintech app - absolutely free. No fees, no transfer charges, no limits. Get powerful tools for strategic savings, budgetind, multi-currency accounts and smart financial planning - all designed to help you take full control of your money. This limited-time campaign is simple: register and complete a one-time deposit to qualify. The first 100 users to complete this step will gain exclusive, early access to the full premium experience - no subscriptions, no hidden costs. Only 100 spots are available - and they're going fast. Join the waitlist now to secure your chance to participate and start your journey toward smarter money management.</p>
                <div className='flex gap-4 mt-8'>
                    <button className='w-[120px] lg:w-[150px] h-[40px] lg:h-[45px] bg-[#5c07B7] rounded-3xl text-white font-semibold text-[14px] lg:text-[17px]'>Join Waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    <div className='flex items-center gap-2 my-auto'>
                        <h2 className='text-[17px] lg:text-[20px] font-bold text-[#5c07B7]'>Contact us</h2>
                        <div className='w-[3px] bg-[#5c07B7] h-[25px]'></div>
                        <ul className='flex gap-2 text-[#5c07B7] text-[18px] font-bold'>
                            <li><FontAwesomeIcon icon={faXTwitter} /></li>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[50%] h-[460px]  flex justify-center scale-75'>
                <img src={'/Splittas/assets/fin.png'} alt="" className='w-auto h-auto '/>
            </div>
        </section>
    </div>
  )
}

export default Home;