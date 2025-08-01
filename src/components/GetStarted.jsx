import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const GetStarted = () => {
  return (
    <div className='h-auto py-16 flex flex-col lg:flex-row justify-between w-full mt-16 pb-16 items-center'>
        <div className='w-[100%] lg:w-[50%] flex flex-col pl-4 lg:pl-12'>
            <h2 className='text-[35px] lg:text-[55px] text-center lg:text-left font-bold mx-auto lg:mx-0'><span className='text-[#5c07B7]'>Plan</span> and Manage <br /> your <span className='text-[#5c07B7]'>Finances</span> with us.</h2>
            <p className='text-[20px] lg:text-[28px]  font-bold mx-auto lg:mx-0'>Download our app and get started <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></p>
            <div className='flex text-white gap-4 mt-8 mx-auto lg:mx-0'>
                <Link to="/waitlist">
                  <button className='w-[150px] h-[50px] text-[18px] font-semibold bg-[#0A3161] rounded-3xl'><FontAwesomeIcon icon={faAndroid} /> Android</button>
                </Link>
                <Link to="/waitlist">
                  <button className='w-[150px] h-[50px] text-[18px] font-semibold bg-[#0A3161] rounded-3xl'><FontAwesomeIcon icon={faApple} /> IOS</button>
                </Link>
            </div>
        </div>
        <div className='w-[100%] lg:w-[50%] h-auto flex justify-center scale-75'>
          <img src="/assets/Home3.png" alt="" className='w-[550px] h-[1200px] rounded-3xl'/>
        </div>
    </div>
  )
}

export default GetStarted