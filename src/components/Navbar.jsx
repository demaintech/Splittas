import React from 'react'
import { faArrowRightLong, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full fixed bg-white top-0 shadow-lg z-2000'>
        <nav className='w-[100%] flex flex-row justify-between '>
            <div className='w-[110px] h-[100px] my-auto flex'>
                <img src={'/Splittas/assets/brand.jpg'} alt="" className='w-auto h-auto scale-75'/>
                <h1 className='my-auto text-[26px] font-bold ml-[-25px] z-50 text-[#5c07B7]'>Splittas</h1>
            </div>
        
            <ul className='hidden lg:flex font-bold gap-4 my-auto'>
                <NavLink to="/">
                    <li className=''>Home</li>
                </NavLink>
                
                <NavLink to="/about">
                    <li>About <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                </NavLink>

                <li>Services</li>
                <li>How it works</li>

                <NavLink to="/contact">
                    <li>Contact <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                </NavLink>
            </ul>
        
            <div className='my-auto flex items-center'>
                <Link to="/waitlist">
                    <button className='w-[120px] lg:w-[150px] h-[40px] lg:h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[14px] lg:text-[17px] mr-4'>Join waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                </Link>
                <button className='text-[29px] pr-2 text-black lg:hidden'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
        
        
    </div>
  )
}

export default Navbar;