import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div className='w-full mt-20 pt-[100px]' id="how-it-works">
        <motion.h1
            initial={{ opacity: 0, y: 40 }}           // Start 40px lower and invisible
            whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='text-center font-bold text-[45px] lg:text-[55px] text-[#5c07B7]'
        >
        How it works
        </motion.h1>
        <div className='flex flex-col '>
            <div className='w-full flex flex-col lg:flex-row justify-center'>
                <div className='w-[100%] lg:w-[50%] h-[460px] flex justify-center scale-75'>
                    <img src="/assets/how1.jpeg" alt="" className='w-auto h-auto rounded-3xl'
                    // initial={{ opacity: 0, x: -400 }}           // Start 40px lower and invisible
                    // whileInView={{ opacity: 1, x: 0 }}        // Animate to visible and y=0
                    // viewport={{ once: false }}
                    // transition={{ duration: 1 }}
                    />
                </div>
                <motion.div className='w-[100%] lg:w-[50%] my-auto pl-4'
                    initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
                    whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <h4 className='text-[25px] font-bold text-[#27AAE1]'>01</h4>
                    <h1 className='text-[29px] font-bold'>Create your account</h1>
                    <p className='w-[95%] lg:w-[60%] text-[18px]/7 font-semibold text-gray-600'>Getting started is quick and easy. Simply signup using your email or phone number, and set a secure password. Once you're in, you'll be welcomed with a smooth onboarding experience that guides you step by step.</p>
                    <Link to="/waitlist">
                        <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] mt-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    </Link>
                </motion.div>
            </div>

            <div className='w-full flex flex-col-reverse lg:flex-row justify-center'>
                <motion.div className='w-[100%] lg:w-[50%] my-auto text-left pl-4 lg:pl-24'
                    initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
                    whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <h4 className='text-[25px] font-bold text-[#27AAE1]'>02</h4>
                    <h1 className='text-[29px] font-bold'>Open an account in any currency</h1>
                    <p className='w-[95%] lg:w-[60%] text-[18px]/7 text-gray-600 font-semibold'>Our app gives you the flexibility to open a financial account in your preferred currency - whether it's USD, EUR, GBP, NGN, or others. This  feature makes it easier to manage your finances locally or internaionally all from one place.</p>
                    <Link to="/waitlist">
                        <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] mt-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    </Link>
                </motion.div>

                <div className='w-[100%] lg:w-[50%] h-[460px] flex justify-center scale-75'>
                    <img src="assets/how2.jpeg" alt="" className='w-auto h-auto rounded-3xl'
                        // initial={{ opacity: 0, x: 400 }}           // Start 40px lower and invisible
                        // whileInView={{ opacity: 1, x: 0 }}        // Animate to visible and y=0
                        // viewport={{ once: false }}
                        // transition={{ duration: 1 }}
                    />
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-center'>
                <div className='w-[100%] lg:w-[50%] h-[460px] flex justify-center scale-75'>
                 
                    <img src="/assets/how3.jpeg" alt="" className='w-auto h-auto rounded-3xl'
                        // initial={{ opacity: 0, x: -400 }}           // Start 40px lower and invisible
                        // whileInView={{ opacity: 1, x: 0 }}        // Animate to visible and y=0
                        // viewport={{ once: false }}
                        // transition={{ duration: 1 }}
                    />
                </div>
                <motion.div className='w-[100%] lg:w-[50%] my-auto pl-4'
                    initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
                    whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <h4 className='text-[25px] font-bold text-[#27AAE1]'>03</h4>
                    <h1 className='text-[29px] font-bold'>Set and Manage Savings Plan</h1>
                    <p className='w-[95%] lg:w-[60%] text-[18px]/7 text-gray-600 font-semibold'>Define your financial goals- whether it's savings for a trip, emergency funds, or big purchase. You can create multiple savings plans, set targets amounts, deadline, and track your progress overtime. We also send friendly reminders and insights to keep you motivated and consistend.</p>
                    <Link to="/waitlist">
                        <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] mt-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    </Link>
                </motion.div>
            </div>

            <div className='w-full flex flex-col-reverse lg:flex-row justify-center'>
                <motion.div className='w-[100%] lg:w-[50%] my-auto text-left pl-4 lg:pl-24'
                    initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
                    whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                >
                    <h4 className='text-[25px] font-bold text-[#27AAE1]'>04</h4>
                    <h1 className='text-[29px] font-bold'>Access Powerful Financial Tools</h1>
                    <p className='w-[95%] lg:w-[60%] text-[18px]/7 text-gray-600 font-semibold'>Once your account is set up, you'll unlock all app features. Access personalized financial tips, budgets planning tools, spending analysis, and smart suggestions tailored to your habits - everything you need to make better money decisions and build stronger financial future.</p>
                    <Link to="/waitlist">
                        <button className='w-[150px] h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] mt-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    </Link>
                </motion.div>

                <div className='w-[100%] lg:w-[50%] h-[460px] flex justify-center scale-75'>
                    <img src="/assets/how4.jpeg" alt="" className='w-auto h-auto rounded-3xl'
                    // initial={{ opacity: 0, x: 400 }}           // Start 40px lower and invisible
                    // whileInView={{ opacity: 1, x: 0 }}        // Animate to visible and y=0
                    // viewport={{ once: faBullseye }}
                    // transition={{ duration: 1 }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks