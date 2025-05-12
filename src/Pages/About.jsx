import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className='w-[100%] z-50000000000000000'>
        <nav className='w-[100%] flex flex-row justify-between '>
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
        </nav>

        <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-[#5c07B7]'>Get to know about us.</h2>
        <div className='flex flex-col justify-between items-center mb-8'>
            <div className='w-[100%] h-[460px]  flex justify-center scale-100'>
                <img src={'/Splittas/assets/about.png'} alt="" className='w-auto h-auto '/>
            </div>
            
            <div className='w-[100%] flex flex-col pl-4 lg:pl-8'>
                <h2 className='text-[30px] font-bold'>Overview</h2>
                <p className='text-[21px] text-gray-600 font-normal text-sm/7 w-[90%] lg:w-[65%] mt-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam deserunt id odio culpa ipsum mollitia aliquid beatae harum quod minus. Error voluptate deserunt dolore dolorum ipsam a nihil, distinctio velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni eos corporis, doloribus ut non sit deleniti placeat amet facilis iusto rerum recusandae. Illum iste saepe similique deleniti, vitae delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deleniti libero fugiat architecto, laboriosam cumque, ex culpa repellendus inventore maxime rerum expedita commodi fugit! Atque tempore deleniti eveniet ipsum. Esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo repudiandae corrupti! Fugit iure vel aliquam, labore maiores id pariatur consequatur ducimus reiciendis libero sunt beatae. Officiis consequatur laboriosam totam?</p>
                <h2 className='text-[30px] font-bold mt-8'>Our Mission</h2>
                <p className='text-[21px] text-gray-600 font-normal text-sm/7 w-[90%] lg:w-[65%] mt-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam deserunt id odio culpa ipsum mollitia aliquid beatae harum quod minus. Error voluptate deserunt dolore dolorum ipsam a nihil, distinctio velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni eos corporis, doloribus ut non sit deleniti placeat amet facilis iusto rerum recusandae. Illum iste saepe similique deleniti, vitae delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deleniti libero fugiat architecto, laboriosam cumque, ex culpa repellendus inventore maxime rerum expedita commodi fugit! Atque tempore deleniti eveniet ipsum. Esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo repudiandae corrupti! Fugit iure vel aliquam, labore maiores id pariatur consequatur ducimus reiciendis libero sunt beatae. Officiis consequatur laboriosam totam?</p>
                <h2 className='text-[30px] font-bold mt-8'>Our Vision</h2>
                <p className='text-[21px] text-gray-600 font-normal text-sm/7 w-[90%] lg:w-[65%] mt-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam deserunt id odio culpa ipsum mollitia aliquid beatae harum quod minus. Error voluptate deserunt dolore dolorum ipsam a nihil, distinctio velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni eos corporis, doloribus ut non sit deleniti placeat amet facilis iusto rerum recusandae. Illum iste saepe similique deleniti, vitae delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deleniti libero fugiat architecto, laboriosam cumque, ex culpa repellendus inventore maxime rerum expedita commodi fugit! Atque tempore deleniti eveniet ipsum. Esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo repudiandae corrupti! Fugit iure vel aliquam, labore maiores id pariatur consequatur ducimus reiciendis libero sunt beatae. Officiis consequatur laboriosam totam?</p>
            </div>
        </div>



        <div className='w-full h-auto bg-[#0A3161] flex flex-col justify-between'>
                <div className='w-[100%] flex flex-col lg:flex-row lg:justify-evenly pl-4 lg:pl-0'>
                    <div className='pt-8 pr-12'>
                        <div className='w-[110px] h-[100px] flex items-center -ml-8'>
                            <img src="/Splittas/assets/footer.png" alt="" />
                            <h2 className='text-[26px] text-white font-bold -ml-4'>Splittas</h2>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <ul className='flex flex-col gap-2 text-white text-[19px]'>
                            <li className='font-bold'>Company</li>
                            <li className='mt-4'>About <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                            <li>Contacts <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                            {/* <li>Demo</li> */}
                        </ul>
                    </div>
                    <div className='pt-8'>
                        <ul className='flex flex-col gap-2 text-white text-[18px]'>
                            <li className='font-bold text-[19px] '>Services</li>
                            <li className='mt-4'>Financial Planning</li>
                            <li>Strategic Savings</li>
                            <li>Global Transactions</li>
                            <li>Airtime and Data</li>
                            <li>Currency Conversions</li>
                            <li>Loan Services</li>
                            <li>Budget & Expenses Tracking</li>
                            <li>Savings Plan</li>
                            <li>Financial Education</li>
                            <li>Security and Support</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2 pt-8 text-white text-[19px]'>
                            <li className='font-bold'>Contacts</li>
                            <li className='mt-4'>+1 (433) 7823 000</li>
                            <li>Ottawa, CA.</li>
                            <li className='mt-4 font-bold'>Inquires</li>
                            <li>splittas@gmail.com.</li>
                            <ul className='flex gap-4 text-[20px] font-bold text-white mt-4 pb-4'>
                                <li><FontAwesomeIcon icon={faXTwitter} /></li>
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                            </ul>
                        </ul>
                    </div>
                </div>
        
                <div className='w-[90%] border-t-[1px] flex justify-center items-center pt-4 mx-auto h-[10%]'>
                    <h2 className='text-center text-white font-normal text-[20px]  '>SPLITTAS TECHNOLOGY &copy; ALL RIGHTS RESERVED. </h2>
                </div>
            </div>
    </div>

  )
}

export default About;