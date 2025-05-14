import { faArrowRightLong, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Subscribe = () => {
  return (
    <div className="w-full h-[300px] bg-gray-100 pt-8 mt-24">
        <h2 className='text-center text-[35px] lg:text-[55px] font-bold text-[#5c07B7]'>Subscribe to our Newsletter.</h2>
        <p className='text-center mx-auto w-[95%] lg:w-[60%] text-[20px] font-semibold'>Get updates and tips from us right into your inbox. <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></p>
        <div className="w-[100%] flex gap-4 justify-center mt-8">
            <input 
                type="email" 
                placeholder="Enter your email address"
                required 
                className="w-[300px] h-[50px] rounded-3xl pl-4 font-bold text-[18px] outline-none border-none"
                
            />
            <button 
                className="w-[50px] h-[50px] rounded-full text-white bg-[#5c07B7] flex justify-center items-center text-[23px]"
            >
                <FontAwesomeIcon 
                    icon={faPaperPlane} />
            </button>
        </div>
    </div>
  )
}

export default Subscribe