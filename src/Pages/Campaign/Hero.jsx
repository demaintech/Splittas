import { faSwift } from "@fortawesome/free-brands-svg-icons";
import { faBell, faCar, faMobile, faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const aboutcampaign = [
  {
    icon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
    title: "Free Transfers",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimu"
  },

    {
    icon: <FontAwesomeIcon icon={faBell} />,
    title: "Exclusive updates",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimu"
  },

    {
    icon: <FontAwesomeIcon icon={faMobile} />,
    title: "Premium in-app experience",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimu"
  },
];


const aboutcampaignsection = aboutcampaign.map(campaign =>
  <div className='w-[300px] h-[200px] border-2 rounded-2xl flex flex-col justify-center p-4 mx-auto'>
    <div className='w-[45px] h-[45px] mb-2 rounded-full'>
      <span className="text-white text-[40px]">
        {campaign.icon}
      </span>
    </div>
    <h2 className='text-[17px] text-white font-bold'>{campaign.title}</h2>
    <p className='text-white text-[15px] w-[90%] '>{campaign.description}</p>
  </div>
)

const Hero = () => {
  return (
    <main>
        <div className='flex w-full justify-center items-center'>
            <div className='flex flex-col justify-center gap-4 items-center text-center pt-16'>
                <h2 className='text-white font-extrabold text-[25px] w-[90%] md:text-[45px] lg:text-[60px]'>Get Exclusive Experience <br />   with our Premium  Account</h2>
                <p className='text-gray-300 text-[17px] font-semibold w-[95%] md:w-[70%] lg:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit beatae voluptatum voluptas in eius quia, repudiandae unde, doloremque ex nobis voluptates. Eius facere distinctio rerum velit quia ipsum doloribus.</p>
                <div className="flex gap-4">
                  <button className='w-[160px] h-[50px] bg-white text-[19px] text-gray-800 shadow-lg font-bold rounded-3xl mt-8'>Get started</button>
                  <Link to="/landing">
                    <button className='w-[200px] h-[50px] border-2 text-white border-white text-[19px] shadow-lg font-bold rounded-3xl mt-8'>Visit our website</button>
                  </Link>
                </div>
            </div>
          {/* <div></div> */}
        </div>

        <div className='w-[70%] mt-16 mx-auto grid grid-cols-1 gap-y-4 lg:grid-cols-3'>
            {aboutcampaignsection}
        </div>
    </main>
  )
}

export default Hero;