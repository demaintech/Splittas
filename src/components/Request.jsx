import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Request = () => {
  return (
    <div className='w-full h-[100px] p-6 bg-[#0a042c]  flex justify-between mt-6'>
      <div className='flex flex-col text-white my-auto pl-[6px] lg:pl-16'>
        <h1 className='text-[14px] lg:text-[25px] font-bold'>Request a call back right now?</h1>
        <h5 className='text-[12px] lg:text-[16px]'>We'll be glad to hear from you.</h5>
      </div>

      <div className='my-auto pr-2 lg:pr-24'>
        <Link to="/contact">
          <button className='w-[120px] lg:w-[150px] h-[40px] lg:h-[45px] bg-transparent border-[1.8px] border-white rounded-xl text-white font-medium text-[16px] lg:text-[17px]'>Contact Us </button>
        </Link>
      </div>
    </div>
  )
}

export default Request