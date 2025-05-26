import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='w-[100%] mt-[100px]'>
        {/* <nav className='w-[100%] flex flex-row justify-between '>
            <div className='w-[110px] h-[100px] my-auto flex'>
                <img src={'/Splittas/assets/brand.jpg'} alt="" className='w-auto h-auto scale-75'/>
                <h1 className='my-auto text-[26px] font-bold ml-[-25px] z-50 text-[#5c07B7]'>Splittas</h1>
            </div>
                
            <div className='w-auto flex items-center pr-8'>
                <ul className='items-center flex font-bold gap-2 my-auto text-[18px]'>
                    <li>Home </li>
                    <li> <FontAwesomeIcon icon={faCaretRight} /></li>
                    <li  className='text-[#5c07B7]'>About</li>
                </ul>    
            </div>
        </nav> */}

        <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-[#5c07B7]'>Get to know about us.</h2>
        <div className='flex flex-col justify-between items-center mb-8'>
            <div className='w-[100%] h-[460px]  flex justify-center scale-100'>
                <img src={'/Splittas/assets/about.png'} alt="" className='w-auto h-auto '/>
            </div>
            
            <motion.div 
                className='w-[100%] flex flex-col pl-4 lg:pl-8'
                initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
                whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                >
                <h2 className='text-[30px] font-bold'>Overview</h2>
                <p className='text-[21px] text-gray-600 font-normal text-sm/7 w-[90%] lg:w-[65%] mt-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam deserunt id odio culpa ipsum mollitia aliquid beatae harum quod minus. Error voluptate deserunt dolore dolorum ipsam a nihil, distinctio velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni eos corporis, doloribus ut non sit deleniti placeat amet facilis iusto rerum recusandae. Illum iste saepe similique deleniti, vitae delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deleniti libero fugiat architecto, laboriosam cumque, ex culpa repellendus inventore maxime rerum expedita commodi fugit! Atque tempore deleniti eveniet ipsum. Esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo repudiandae corrupti! Fugit iure vel aliquam, labore maiores id pariatur consequatur ducimus reiciendis libero sunt beatae. Officiis consequatur laboriosam totam?</p>
                <h2 className='text-[30px] font-bold mt-8'>Our Mission</h2>
                <p className='text-[21px] text-gray-600 font-normal text-sm/7 w-[90%] lg:w-[65%] mt-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam deserunt id odio culpa ipsum mollitia aliquid beatae harum quod minus. Error voluptate deserunt dolore dolorum ipsam a nihil, distinctio velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni eos corporis, doloribus ut non sit deleniti placeat amet facilis iusto rerum recusandae. Illum iste saepe similique deleniti, vitae delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deleniti libero fugiat architecto, laboriosam cumque, ex culpa repellendus inventore maxime rerum expedita commodi fugit! Atque tempore deleniti eveniet ipsum. Esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo repudiandae corrupti! Fugit iure vel aliquam, labore maiores id pariatur consequatur ducimus reiciendis libero sunt beatae. Officiis consequatur laboriosam totam?</p>
                <h2 className='text-[30px] font-bold mt-8'>Our Vision</h2>
                <p className='text-[21px] text-gray-600 font-normal text-sm/7 w-[90%] lg:w-[65%] mt-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam deserunt id odio culpa ipsum mollitia aliquid beatae harum quod minus. Error voluptate deserunt dolore dolorum ipsam a nihil, distinctio velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni eos corporis, doloribus ut non sit deleniti placeat amet facilis iusto rerum recusandae. Illum iste saepe similique deleniti, vitae delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deleniti libero fugiat architecto, laboriosam cumque, ex culpa repellendus inventore maxime rerum expedita commodi fugit! Atque tempore deleniti eveniet ipsum. Esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo repudiandae corrupti! Fugit iure vel aliquam, labore maiores id pariatur consequatur ducimus reiciendis libero sunt beatae. Officiis consequatur laboriosam totam?</p>
            </motion.div>
        </div>



        
    </div>

  )
}

export default About;