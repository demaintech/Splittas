import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
        className='w-[95%] mx-auto rounded-3xl  mt-12  contactImg text-white h-[700px] lg:h-[620px]'
        initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
        whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        >
        <div className="bg-black bg-opacity-60 w-[100%] h-[100%] py-8 rounded-3xl flex lg:flex-row justify-center items-center  lg:justify-between">
        <div className=""></div>
        
        <div className="flex flex-col text-center lg:w-[60%] justify-center items-center gap-8">
        <h1 className='text-center text-[27px] lg:text-[55px] font-bold '>Get in touch with us.</h1>
        <p className='text-center mx-auto w-[80%] lg:w-[60%] text-[17px] font-semibold'>Got anything to tell us? We'll be glad to hear from you.</p>
        <div className='flex flex-col lg:flex-row text-center w-full justify-between items-center'>
            <div className='w-[100%] flex flex-col justify-center items-center'>
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
                    <h2 className="text-[17px] lg:text-[20px] font-bold">splittastechnology@gmail.com<FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></h2>
                </div>
                <div className="mt-4 flex gap-4 items-center  mx-auto lg:mx-0">
                    <span className="text-[20px] font-bold "><FontAwesomeIcon icon={faPhone} /></span>
                    <h2 className="text-[17px] lg:text-[20px] font-bold">(+234) 913 363 6596 <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></h2>
                </div>
            </div>
            {/* <div className='w-[100%] lg:w-[50%] bg-white h-[460px] flex justify-center scale-75'>
                <img src={'/Splittas/assets/deal.jpeg'} alt="" className='w-[100%] h-[] bg-contain'/>
            </div> */}
        </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Contact