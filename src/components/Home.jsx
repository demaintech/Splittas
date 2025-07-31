import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  return (

    // purple = #5c07B7 Blue = #0A3161 Blue = #27AAE1
    <div className='w-screen h-auto xl:h-screen z-0'>
    {/* Hero */}

        <section className='w-full flex flex-col items-center xl:flex-row justify-between mt-24'>
            <div className='w-[100%] lg:w-[50%] md:pl-14 xl:pl-24 pt-8'>
                <motion.h1 
                    className='text-[35px] xl:text-[65px] font-extrabold text-center xl:text-left'>Split the<span className='text-[#5c07B7]'> Stress, </span><br /> Not just the <span className='text-[#5c07B7]'
                    initial={{ opacity: 0, y: 40 }}           // Start 40px lower and invisible
                    whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
                    viewport={{ once: true }}
                    transition={{ duration: 30 }}
                    > Bills. </span>
                </motion.h1>
                <p className='w-[90%] mx-auto xl:mx-0 xl::w-[96%] mt-4 text-gray-600 font-semibold text-sm/6 text-center xl:text-left'><span className='text-gray-500 font-extrabold'>Plan Smarter, Live Better.</span> <br />  Join the waitlist now to secure your chance to participate and start your journey toward smarter money management.</p>
                <div className='flex flex-col sm:flex-row w-[100%] items-center xl:justify-start justify-center gap-4 mt-8 mx-auto xl::mx-0'>
                    <Link to="/waitlist">
                        <button className='w-[120px] lg:w-[150px] h-[40px] lg:h-[45px] bg-[#5c07B7] rounded-3xl text-white font-semibold text-[13px] lg:text-[17px]'>Join Waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    </Link>
                    <div className='flex items-center gap-2 my-auto '>
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
            <div className='w-[100%] lg:w-[60%] xl:h-[660px] h-[1100px] mb-20 xl:mb-0 flex justify-center lg:scale-105 pt-24'>
                <img src="/assets/Home3.png" alt="" className='w-auto h-auto ' />
            </div>
        </section>
    </div>
  )
}

export default Home;