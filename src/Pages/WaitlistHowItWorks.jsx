import { motion } from "framer-motion";
const howitworkssection = [
    {
        title: "Step 1",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at blanditiis facilis necessitatibus delectus tempora, consequuntur vel. Aliquid distinctio incidunt magni voluptates aliquam corrupti nihil, molestias, dolor provident, natus blanditiis."
    },

    {
        title: "Step 2",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at blanditiis facilis necessitatibus delectus tempora, consequuntur vel. Aliquid distinctio incidunt magni voluptates aliquam corrupti nihil, molestias, dolor provident, natus blanditiis."
    },

    {
        title: "Step 3",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at blanditiis facilis necessitatibus delectus tempora, consequuntur vel. Aliquid distinctio incidunt magni voluptates aliquam corrupti nihil, molestias, dolor provident, natus blanditiis."
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

export default WaitlistHowItWorks