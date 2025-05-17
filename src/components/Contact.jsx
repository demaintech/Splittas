import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faArrowRightLong, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
  return (
    <div className='w-full pb-12 mt-12'>
        <h1 className='text-center text-[35px] lg:text-[55px] font-bold text-[#5c07B7]'>Get in touch with us.</h1>
        <p className='text-center mx-auto w-[80%] lg:w-[60%] text-[20px] font-semibold'>Got anything to tell us? We'll be glad to hear from you.</p>
        <div className='flex flex-col lg:flex-row w-full justify-between'>
            <div className='w-[100%] lg:w-[50%] flex flex-col pl-4 lg:pl-16 pt-24'>
                {/* <h2 className='text-[35px] font-bold'>Our social media.</h2> */}
                <ul className='flex gap-4 text-[28px] font-bold text-[#5c07B7] mt-4'>
                    <li><FontAwesomeIcon icon={faXTwitter} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faDiscord} /></li>
                </ul>
                <div className="mt-4 flex gap-4">
                    <span className="text-[25px] font-bold text-[#5c07B7]"><FontAwesomeIcon icon={faEnvelope} /></span>
                    <h2 className="text-[26px] font-bold">splittas@gmail.com <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></h2>
                </div>
                <div className="mt-4 flex gap-4">
                    <span className="text-[25px] font-bold text-[#5c07B7]"><FontAwesomeIcon icon={faPhone} /></span>
                    <h2 className="text-[26px] font-bold">+1 (433) 7823 000 <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></h2>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Contact