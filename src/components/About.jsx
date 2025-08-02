import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='w-full flex-col lg:flex-row flex justify-center mt-20 gap-4'>
        <div className='w-[100%] flex justify-center items-center lg:w-[45%] h-[400px]'>
            <img src="/assets/about.png" alt="" className='w-auto h-auto '
            // initial={{ opacity: 0, x: -400 }}           // Start 40px lower and invisible
            // whileInView={{ opacity: 1, x: 0 }}        // Animate to visible and y=0
            // viewport={{ once: false }}
            // transition={{ duration: 1 }}
            />
        </div>
        <motion.div 
          className='w-[100%] lg:w-[45%] pl-4 my-auto flex flex-col gap-4 text-center lg:text-left'
          initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
          whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <h5 className='text-gray-600 text-[20px] font-semibold'>Who we are</h5>
          <h1 className='text-[25px] lg:text-[30px] font-semibold'>Get to know about <span className='text-[#5c07B7]'>Splittas <br /> Technology.</span></h1>
          <p className='text-[16px] text-gray-600 font-semibold text-sm/7 w-[85%] lg:w-[80%] mx-auto lg:mx-0  mt-4'> At SPLITTAS TECHNOLOGY, we believe that financial stability is the key to unlocking a brighter future. However, we also recognize that many people struggle with financial instability due to a lack of knowledge on how to properly manage their finances. This is why we are committed to providing platforms that not only offers a wide range of financial services but also educates and guides users on effective financial planning and management.</p>
          <Link to="/about">
            <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-semibold text-[17px] mt-8'>Read more <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
          </Link>
        </motion.div>
    </div>
  )
}

export default About;