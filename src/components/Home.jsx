import { faFacebook, faInstagram, faSnapchat, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Home = () => {
  return (

    <main className='relative h-screen w-full overflow-hidden" mb-32' id='home'>
        <div className="absolute inset-0 transform -skew-y-6 bg-gradient-to-r from-black via-blue-900 to-purple-700"></div>
        <div className='relative z-10 h-full w-full flex items-center justify-center px-4 transform '>
           {/* <img src='/assets/heroBg.png' className=' absolute top-0'/>  */}
           <div className='w-full h-[100%]  xl:pl-12 flex flex-col items-center xl:items-start text-center xl:text-left -z-20 mt-[230px]'>
                <div className='absolute top-0 left-0 -ml-32 mt-20'>
                    <img src="/assets/splittas.png" className='scale-50 w-72 h-w-72  blur' alt=''/>
                </div>

                 <div className='absolute top-0 right-0 mt-24 blur -mr-32'>
                    <img src="/assets/splittas.png" className='scale-50 w-72 h-w-72 ' alt=''/>
                </div>

                <div className='absolute top-0 right-0 mt-96 -mr-32'>
                    <img src="/assets/splittas.png" className='scale-50 w-72 h-w-72 ' alt=''/>
                </div>

                <div className='absolute top-0 -mt-8 -z-50 xl:ml-96'>
                    <img src="/assets/splittas.png" className='opacity-75 scale-50 w-72 h-w-72 ' alt=''/>
                </div>
                <h1 className='mt-12 xl:mt-0 text-white text-[35px] font-bold lg:text-[50px] xl:text-[45px]'>Split the Stress <br /> Not just the Bills.</h1>
                <h5 className='text-gray-300 text-[17px] xl:text-[20px] mt-2 font-bold'>Plan Smarter, Live Better.</h5>
                <p className='w-[70%] m:w-[60%] lg:w-[50%] xl:w-[40%] text-[12px] lg:text-[14px] text-white font-medium mt-4 mx-auto xl:mx-0'>Our app lets you ceate real bank accounts in multiple currencies, send and receive moneey instantly, grow your savings through smart, goal based plans, and many more-with all in one place.</p>
                <h3 className='capitalize text-[14px] xl:text-[20px] text-white mt-4 font-bold'>app is not yet out!!! anticipate!!!</h3>
                <button className='w-[140px] h-[45px] mt-4 bg-[#5c07B7] rounded-xl text-[15px] text-white font-bold'>Join waitlst</button>
                <div className='flex items-center gap-2 mt-4 '>
                    <div>
                        <h2 className='text-[15px] font-bold text-white '>Contact us</h2>
                    </div>
                    <div className='w-[2px] h-6 bg-white'></div>
                    <div className='flex items-center gap-2'>
                        <Link>
                            <FontAwesomeIcon icon={faFacebook}  className='text-white text-sm'/>
                        </Link>

                        <Link>
                            <FontAwesomeIcon icon={faXTwitter}  className='text-white text-sm'/>
                        </Link>

                        <Link>
                            <FontAwesomeIcon icon={faInstagram}  className='text-white text-sm'/>
                        </Link>

                        <Link>
                            <FontAwesomeIcon icon={faSnapchat}  className='text-white'/>
                        </Link>

                        <Link>
                            <FontAwesomeIcon icon={faTiktok}  className='text-white text-sm'/>
                        </Link>

                        <Link>
                            <FontAwesomeIcon icon={faWhatsapp}  className='text-white text-sm'/>
                        </Link>
                    </div>
                </div>

                 <div className='w-full h-auto '>
                    {/* <img src='/assets/App.png' className='w-auto h-auto scale-90 z-50'/> */}
        
                </div>
           </div>
          
        </div>
    </main>

    // // purple = #5c07B7 Blue = #0A3161 Blue = #27AAE1
    // <div className='w-screen h-auto xl:h-screen z-0'>
    // {/* Hero */}

    //     <section className='w-full flex flex-col items-center xl:flex-row justify-between mt-24'>
    //         <div className='w-[100%] xl:w-[50%]  xl:pl-24  pt-[25vh] xl:pt-0 xl:mt-0 flex flex-col items-center xl:items-start'>
    //             <motion.h1 
    //                 className='text-[45px] xl:text-[65px] font-extrabold text-center xl:text-left'>Split the<span className='text-[#5c07B7]'> Stress, </span><br /> Not just the <span className='text-[#5c07B7]'
    //                 initial={{ opacity: 0, y: 40 }}           // Start 40px lower and invisible
    //                 whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
    //                 viewport={{ once: true }}
    //                 transition={{ duration: 30 }}
    //                 > Bills. </span>
    //             </motion.h1>
    //             <p className='w-[85%] mx-auto xl:mx-0 lg:w-[60%] xl:w-[96%] mt-4 text-gray-600 font-semibold text-sm/7 text-center xl:text-left'><span className='text-gray-500 font-extrabold'>Plan Smarter, Live Better.</span> <br />  Join the waitlist now to secure your chance to participate and start your journey toward smarter money management. Manage your money without borders. Our app lets you create real bank accounts in multiple currencies, send and receive money instantly, and grow your savings through smart, goal-based plans — all in one place. </p>
    //             <div className='flex flex-col sm:flex-row w-[100%] items-center xl:justify-start justify-center gap-6 mt-8 mx-auto xl::mx-0'>
    //                 <Link to="/waitlist">
    //                     <button className='w-[120px] lg:w-[150px] h-[40px] lg:h-[45px] bg-[#5c07B7] rounded-3xl text-white font-semibold text-[13px] lg:text-[17px]'>Join Waitlist <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
    //                 </Link>
    //                 <div className='flex items-center gap-2 my-auto '>
    //                     <h2 className='text-[17px] lg:text-[20px] font-bold text-black'>Contact us</h2>
    //                     <div className='w-[3px] bg-[#5c07B7] h-[25px]'></div>
    //                     <ul className='flex gap-2 text-[#5c07B7] text-[18px] font-bold'>
    //                         <a href="https://x.com/SplittasTech?t=Sz7beze2KkvC3IFD-FDfcg&s=09" target='_blank'>
    //                             <li><FontAwesomeIcon icon={faXTwitter} /></li>
    //                         </a>
    //                         <a href="https://www.facebook.com/profile.php?id=61574679375818" target='_blank'>
    //                             <li><FontAwesomeIcon icon={faFacebook} /></li>
    //                         </a>
    //                         <a href="https://x.com/SplittasTech?t=Sz7beze2KkvC3IFD-FDfcg&s=09" target='_blank'>
    //                             <li><FontAwesomeIcon icon={faEnvelope} /></li>
    //                         </a>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <div className='w-[100%] lg:w-[60%] xl:h-[660px] h-[1100px] mb-20 xl:mb-0 flex justify-center lg:scale-105 pt-24'>
    //             <img src="/assets/Home3.png" alt="" className='w-auto h-auto ' />
    //         </div> */}
    //     </section>
    // </div>
  )
}

export default Home;