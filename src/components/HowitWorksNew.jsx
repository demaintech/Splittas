import React from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const howitworks = [
    {
        icon: <FontAwesomeIcon icon={faPen} className='text-[70px] text-[#5c07B7]'/>,
        step: '01',
        title: <h1 className='font-bold'>Create <span className='text-[#5c07B7]'>Your Account</span></h1>,
        description: 'Our app lets you ceate real bank accounts in multiple currencies, send and receive moneey instantly, grow your savings through smart, goal based plans, and many more-with all in one place.',
    },

    {
        icon: <FontAwesomeIcon icon={faPen} className='text-[70px] text-[#5c07B7]'/>,
        step: '02',
        title: <h1 className='text-center'>Open an <span className='text-[#5c07B7]'>Account</span> in any <span className='text-[#5c07B7]'>Currency</span></h1>,
        description: 'Our app lets you ceate real bank accounts in multiple currencies, send and receive moneey instantly, grow your savings through smart, goal based plans, and many more-with all in one place.',
    },

    {
        icon: <FontAwesomeIcon icon={faPen} className='text-[70px] text-[#5c07B7]'/>,
        step: '03',
        title: <h1 className='text-center font-bold'>Set and Manage <br /><span className='text-[#5c07B7]'> Savings Plan</span></h1>,
        description: 'Our app lets you ceate real bank accounts in multiple currencies, send and receive moneey instantly, grow your savings through smart, goal based plans, and many more-with all in one place.',
    },

    {
        icon: <FontAwesomeIcon icon={faPen} className='text-[70px] text-[#5c07B7]'/>,
        step: '04',
        title: <h1 className='text-center font-bold'>Access Powerful <br /><span className='text-[#5c07B7]'> Financial Tools</span></h1>,
    }
]
            
const howitworkssection = howitworks.map(item =>
    <div className='w-[100%] md:w-[380px] h-[450px] gap-4 bg-white shadow-md rounded-2xl border-2 border-blue-100 flex flex-col items-center p-4'>
        <h3 className='text-[25px] font-bold'>Step {item.step}</h3>
        <div>
            {item.icon}
        </div>
        <h2 className='text-[25px] font-extrabold'>{item.title}</h2>
        <p className='w-[95%]  mx-auto text-center text-[12px] font-semibold text-gray-700'>Our app lets you ceate real bank accounts in multiple currencies, send and receive moneey instantly, grow your savings through smart, goal based plans, and many more-with all in one place.</p>
        <button className='w-[180px] h-[50px] mt-2 bg-gradient-to-r from-[#5c07B7] via-blue-500 text-white to-[#5c07B7] rounded-xl text-[18px] font-bold shadow-lg shadow-blue-300'>Join waitlist</button>
    </div>
)

const HowitWorksNew = () => {
  return (
    <main className='w-full py-24'>
         <motion.h1
            initial={{ opacity: 0, y: 40 }}           // Start 40px lower and invisible
            whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='text-center font-extrabold text-[45px] lg:text-[55px] '
        >
        How it works
        </motion.h1>
        <p className='w-[90%] md:w-[60%] lg:[50%] xl:w-[40%] text-[15px] font-semibold mx-auto text-center'>Our app lets you ceate real bank accounts in multiple currencies, send and receive moneey instantly, grow your savings through smart, goal based plans, and many more-with all in one place.</p>

        <div className='w-[95%] mx-auto mt-24 flex flex-wrap justify-center gap-4'>
            {howitworkssection}
        </div>
    </main>
  )
}

export default HowitWorksNew;