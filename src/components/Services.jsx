import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBullseye, faChartArea, faGlobe, faHeadset, faMoneyBillTransfer, faMoneyCheckDollar, faSeedling, faWallet, faWifi } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const service = [
    {
        servicename: "Financial Planning",
        description: "We provide personalized financial planning tools",
        serviceicon: <FontAwesomeIcon icon={faChartArea} />,
    },

    {
        servicename: "Strategic Savings",
        description: "Customized savings plans with competitive interest rate",
        serviceicon: <FontAwesomeIcon icon={faBullseye} />,
    },

    {
        servicename: "Global Transaction",
        description: "Secure and low cost transactions globally.",
        serviceicon: <FontAwesomeIcon icon={faGlobe} />,
    },

    {
        servicename: "Airtime and Data",
        description: "Purchase airtime and data with ease.",
        serviceicon: <FontAwesomeIcon icon={faWifi} />,
    },

    {
        servicename: "Currency Conversions",
        description: "Convert currencies easily.",
        serviceicon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
    },

    {
        servicename: "Loan Services",
        description: "Access Loans with flexible repayment term.",
        serviceicon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
    },

    {
        servicename: "Budget & Expense Tracking",
        description: "Track your expenses",
        serviceicon: <FontAwesomeIcon icon={faWallet} />,
    },

    {
        servicename: "Savings Plans",
        description: "Manage multiple savings plans.",
        serviceicon: <FontAwesomeIcon icon={faSeedling} />,
    },

    {
        servicename: "Financial Education",
        description: "Improve your financial literacy with our financial education.",
        serviceicon: <FontAwesomeIcon icon={faBookOpen} />,
    },

    {
        servicename: "Security and Support",
        description: "Two factor authentication to secure your account.",
        serviceicon: <FontAwesomeIcon icon={faHeadset} />,
    },
];



const servicesection = service.map(services =>
    <motion.div 
        className='w-[95%] mx-auto mt-8 h-[180px] bg-[#5c07B7] rounded-xl flex flex-col justify-between items-center'
            initial={{ opacity: 0, y: 200 }}           // Start 40px lower and invisible
            whileInView={{ opacity: 1, y: 0 }}        // Animate to visible and y=0
            viewport={{ once: false }}
            transition={{ duration: 1 }}
        >
        <div className='text-center flex flex-col items-center text-white pt-6'>
            <span className='text-[30px]'>
                {services.serviceicon}
            </span>
            <h2 className='text-[17px] font-semibold'>{services.servicename}</h2>
            <p className='text-[15px] w-[90%]'>{services.description}</p>
        </div>
        <div className='w-[80px] h-[2px] bg-white mb-2'></div>
    </motion.div>
)


const Test = () => {
  return (
    <div className='w-full mt-[100px]' id="service">
        <h1 className='text-center font-bold text-[45px] lg:text-[55px] text-[#5c07B7]'>Our Services</h1>
        <div className='w-[100%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-auto'>
          {servicesection}
      </div>
    </div>
  )
}

export default Test