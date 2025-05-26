import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
        className='w-[90%] mx-auto rounded-3xl  mt-12 bg-[#5c07B7] text-white py-8 h-[820px] lg:h-[620px]'
        initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
        whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        >
        <h1 className='text-center text-[27px] lg:text-[55px] font-bold '>Get in touch with us.</h1>
        <p className='text-center mx-auto w-[80%] lg:w-[60%] text-[17px] font-semibold'>Got anything to tell us? We'll be glad to hear from you.</p>
        <div className='flex flex-col lg:flex-row w-full justify-between items-center'>
            <div className='w-[100%]  lg:w-[50%] flex flex-col lg:pl-16'>
                {/* <h2 className='text-[35px] font-bold'>Our social media.</h2> */}
                <ul className='flex gap-4 mx-auto lg:mx-0 text-[25px] font-bold mt-4'>
                    <li><FontAwesomeIcon icon={faXTwitter} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faDiscord} /></li>
                </ul>
                <div className="mt-4 flex gap-4 mx-auto items-center lg:mx-0">
                    <span className="text-[20px] font-bold "><FontAwesomeIcon icon={faEnvelope} /></span>
                    <h2 className="text-[26px] font-bold">splittas@gmail.com <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></h2>
                </div>
                <div className="mt-4 flex gap-4 items-center  mx-auto lg:mx-0">
                    <span className="text-[20px] font-bold "><FontAwesomeIcon icon={faPhone} /></span>
                    <h2 className="text-[26px] font-bold">+1 (433) 7823 000 <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></h2>
                </div>
            </div>
            <div className='w-[100%] lg:w-[50%] h-[460px] flex justify-center scale-75'>
                <img src={'/Splittas/assets/fin.png'} alt="" className='w-auto h-auto'/>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact