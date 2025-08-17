import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Subscribe = () => {
  return (
    <div className="w-full h-[300px] bg-gray-100 pt-8 pb-12 ">
        <h2 className='text-center text-[30px] lg:text-[45px] font-extrabold '>Subscribe to our <br /> <span className="text-[#5c07B7]">Newsletter.</span> </h2>
        <p className='text-center mx-auto w-[55%] lg:w-[60%] text-[15px] font-semibold'>Get updates and tips from us right into your inbox. </p>
        <div className="w-[100%] flex gap-4 justify-center mt-8">
            <input 
                type="email" 
                placeholder="Enter your email address"
                required 
                className="w-[300px] h-[50px] rounded-xl pl-4 font-bold text-[18px] outline-none border-2 border-gray-300 bg-transparent border-transparent focus:border-[#5c07B7] focus:bg-transparent"
                
            />
            <button 
                className="w-[50px] h-[50px] rounded-full text-white bg-[#5c07B7] flex justify-center items-center text-[23px]"
            >
                {/* <FontAwesomeIcon 
                    icon={faPaperPlane} /> */}
                <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full bg-whit'>
                    <img src="/assets/btn.png" alt="" className='rotate-20 scale-150'/>
                </div>    
            </button>
        </div>
    </div>
  )
}

export default Subscribe