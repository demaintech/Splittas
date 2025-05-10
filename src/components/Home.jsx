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
                <li>How it works</li>
                <li>Contact <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
            </ul>

            <div className='my-auto'>
                <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px]'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
            </div>
        </nav>

    {/* Hero */}

        <section className='w-full flex justify-between'>
            <div className='w-[50%] pl-14 pt-8'>
                <h1 className='text-[65px] font-extrabold'>Split the<span className='text-[#5c07B7]'> Stress, </span><br /> Not just the <span className='text-[#5c07B7]'> Bills. </span></h1>
                <p className='w-[95%] mt-4 text-gray-600 font-semibold text-sm/6'><span className='text-gray-500 font-extrabold'>Plan Smarter, Live Better.</span> <br /> Be the first 100 users to unlock full premium access access to our all-in-one Fintech app - absolutely free. No fees, no transfer charges, no limits. Get powerful tools for strategic savings, budgetind, multi-currency accounts and smart financial planning - all designed to help you take full control of your money. This limited-time campaign is simple: register and complete a one-time deposit to qualify. The first 100 users to complete this step will gain exclusive, early access to the full premium experience - no subscriptions, no hidden costs. Only 100 spots are available - and they're going fast. Join the waitlist now to secure your chance to participate and start your journey toward smarter money management.</p>
                <div className='flex gap-4 mt-8'>
                    <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-semibold text-[17px]'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    <div className='flex items-center gap-2 my-auto'>
                        <h2 className='text-[20px] font-bold text-[#5c07B7]'>Contact us</h2>
                        <div className='w-[3px] bg-[#5c07B7] h-[25px]'></div>
                        <ul className='flex gap-2 text-[#5c07B7] text-[18px] font-bold'>
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