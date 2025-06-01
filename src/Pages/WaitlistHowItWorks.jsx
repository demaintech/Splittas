import { motion } from "framer-motion";
const howitworkssection = [
    {
        title: "Join the Waitlist",
        description: "Enter your email address to secure early access to our upcoming app. By signing up, you’ll be part of an exclusive group that gets updates before anyone else. Stay tuned for the launch and be among the first to experience our innovative features.",
    },

    {
        title: " Stay Connected",
        description: "Follow our official social media pages to receive important announcements. Join our active Discord community where you can share your thoughts, engage with the team, ask questions, and get firsthand insights about the project’s progress."
    },

    {
        title: "Get Notified First",
        description: "When our app goes live, you'll receive a direct email notification with access details. Being on the waitlist means you're first in line for early features, exclusive content, and special community perks."
    },
];

const WaitlistHowItWorks = () => {
  return (
    <div className='w-[100%] flex justify-center  mt-24 overflow-hidden'>
        <div className='flex flex-col items-center text-[14px] md:text-[20px] font-bold gap-2  md:w-[10%]  lg:mt-28'>
            <h2 className="">Step 1</h2>
            <div className='w-[2px] h-[700px] md:h-[800px] lg:h-[480px] bg-gray-500'></div>                    
            <h2>Step 2</h2>
            <div className='w-[2px] h-[700px] md:h-[800px] lg:h-[480px] bg-gray-500'></div>
            <h2>Step 3</h2>
        </div>
        <div className='flex flex-col overflow-hidden gap-8 w-[82%] md:w-[70%]'>
            {howitworkssection.map((howitworks, index) =>{ 
                return(
                    <div 
                        key={index}
                        className='flex flex-col lg:flex-row items-center justify-between overflow-hidden gap-8 lg:gap-0 '
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
                            whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className='flex flex-col md:w-[45%]'
                        >
                            <h2 className='text-[20px] md:text-[45px] font-bold text-center lg:text-left '>{howitworks.title}</h2>
                            <p className='text-[18px] text-gray-500 text-sm/6 mt-4 text-center lg:text-left'>{howitworks.description}</p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
                            whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className='w-[300px] md:w-[400px] h-[500px] bg-[#5c07B7] rounded-xl mx-auto lg:mx-0'
                        ></motion.div>
                    </div>
                            
            )})}
                        
        </div>
    </div>
    
  )
}

export default WaitlistHowItWorks;