import React, { useState } from 'react';
import { faAngleDown, faArrowRightLong, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";


//  const [isVisible, setIsVisible] = useState(true);

  // const showElement = () => {
  //   setIsVisible(true);
  // };

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
  
    <div 
      className="w-full fixed h-[100px] bg-white top-0 shadow-lg z-10"
    >
      <nav className="w-[100%] flex flex-row justify-between">
        <Link to="/">
          <div className="w-[220px] h-[100px] my-auto flex">
            <img src="/assets/ICONS-30.png" alt="" className="w-auto h-auto scale-75" />
            {/* <h1 className="my-auto text-[26px] font-bold ml-[-25px] z-50 text-[#5c07B7]">Splittas</h1> */}
          </div>
        </Link>
        

        <ul className=" font-bold gap-4 my-auto lg:flex hidden">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>

          <NavLink to="/about">
            <li>About <FontAwesomeIcon className="-rotate-45" icon={faArrowRightLong} /></li>
          </NavLink>

          <NavLink to="/contact">
            <li>Contact <FontAwesomeIcon className="-rotate-45" icon={faArrowRightLong} /></li>
          </NavLink>
            

            <NavLink to="/waitlist">
            <li>Waitlist <FontAwesomeIcon className="-rotate-45" icon={faArrowRightLong} /></li>
          </NavLink>

          {/* <HashLink smooth to="/#service">
            <li>Services</li>
          </HashLink>

          <HashLink smooth to="/#how-it-works">
            <li>How it works</li>
          </HashLink> */}

        </ul>

        <div className="my-auto flex items-center">
          <Link to="/waitlist">
            <button className="w-[120px] lg:w-[150px] h-[40px] lg:h-[45px] bg-[#5c07B7] rounded-3xl text-white font-bold text-[14px] lg:text-[17px] mr-4">
              Join waitlist <FontAwesomeIcon className="-rotate-45" icon={faArrowRightLong} />
            </button>
          </Link>
          <button 
            className="text-[29px] pr-2 text-black lg:hidden" 
            onClick={() => setOpenNav(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

      {/* Mobile NavBar */}

  {/* {isVisible ? ( */}
     <motion.div 
      initial={{ opacity: 0, x: -300 }}           // Start 40px lower and invisible
      whileInView={{ opacity: 1, x: 0 }}        // Animate to visible and y=0
      viewport={{ once: false }}
      transition={{ duration: 0.05 }}
      className={`${openNav === true ? "flex" : "hidden"}  w-[70%] md:w-[60%] lg:hidden  h-[100vh] bg-white shadow-lg z-50 fixed  flex-col justify-between`}>
          <div className='w-[100%] '>
            <div className='flex items-center w-[100%] justify-between pr-4  border-b-2'>
              <div>
                <div className="  h-[100px] my-auto flex">
                  <img src={'/assets/brand.jpg'} alt="" className="w-auto h-auto scale-75" />
                  <h1 className="my-auto text-[26px] font-bold ml-[-25px]  z-50 text-[#5c07B7]">Splittas</h1>
                </div>
              </div>
              <div>
                <button onClick={() => setOpenNav(false)}>
                <span className='text-[27px] text-black'>
                  <FontAwesomeIcon icon={faClose} />
                </span>
                </button>
              </div>
            </div> 

            <ul className='font-bold gap-8 flex flex-col text-[25px] pl-6 pt-6'>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>

              <NavLink to="/about">
                <li>About <FontAwesomeIcon className="-rotate-45" icon={faArrowRightLong} /></li>
              </NavLink>

              <HashLink smooth to="/#service">
                <li>Services</li>
              </HashLink>

              <HashLink smooth to="/#how-it-works">
                <li>How it works</li>
              </HashLink>

              <NavLink to="/contact">
                <li>Contact <FontAwesomeIcon className="-rotate-45" icon={faArrowRightLong} /></li>
              </NavLink>

               <Link to="/waitlist">
              <button 
                onClick={() => setOpenNav(false)}
                className="w-[160px] h-[50px] mt-8 bg-[#5c07B7] rounded-3xl text-white font-bold text-[17px] ">
                Join waitlist <FontAwesomeIcon className="-rotate-45" icon={faArrowRightLong} />
              </button>
            </Link>
            </ul>

           
          </div>
          <div className='flex justify-center items-center pb-4 text-[18px] font-semibold text-gray-500'>
            <h2>&copy; Splittas Technology, 2025</h2>
          </div>
        </motion.div> 
        {/* ) : null} */}
        
      </nav>
    </div>
  );
};

export default Navbar;