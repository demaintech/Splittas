import { faNavicon, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const username = "demaintech";

const tasks = [
  {
    taskname: "Follow our X page",
    buttontag: "follow",
    status: false
  },

  {
    taskname: "Add your waitlist email address",
    buttontag: "Add",
    status: false
  },

   {
    taskname: "Follow our CEO X",
    buttontag: "follow",
    status: false
  },

   {
    taskname: "Follow our CEO Facebook",
    buttontag: "follow",
    status: false
  },

   {
    taskname: "Follow our CEO Instgram",
    buttontag: "follow",
    status: false
  },

   {
    taskname: "Join Discord Community",
    buttontag: "Join",
    status: false
  },

   {
    taskname: "Follow our Facebook page",
    buttontag: "follow",
    status: false
  },

   {
    taskname: "Follow our Instagram page",
    buttontag: "follow",
    status: false
  },

  {
    taskname: "Join out waitlist",
    buttontag: "Join",
    status: false
  },

  {
    taskname: "Visit our Landing page",
    buttontag: "visit",
    status: false
  },
];

const useranalytics = [
  {
    waitlistreferal: 105,
    title: "Waitlist referals",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimu"
  },

    {
    icon: "",
    title: "Earn with tasks",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimu"
  },

    {
    icon: "",
    title: "Earn with tasks",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimu"
  },
];


const useranalyticssection = useranalytics.map(analytic =>
  <div className='w-[300px] h-[200px] border-2 rounded-2xl flex flex-col justify-center p-4 mx-auto'>
    <h1 className="text-[30px] text-gray-200">{analytic.waitlistreferal}</h1>
    <h2 className='text-[20px] text-white font-bold'>{analytic.title}</h2>
    <p className='text-white text-[15px] w-[90%] '>{analytic.description}</p>
  </div>
)

const tasksection = tasks.map(task => 
  <div className="w-[90%] h-[90px] bg-gray-800 rounded-xl flex justify-between items-center p-4">
    <div>
      <h2 className="text-gray-200 text-[20px] font-semibold">{task.taskname}</h2>
    </div>
    <div>
      <button className='w-[100px] h-[40px] bg-white text-[15px] text-gray-800 shadow-lg font-bold rounded-3xl'>{task.buttontag}</button>
      <h4 className="text-[20px] font-bold text-green-500 hidden">Done</h4>  
    </div>
  </div>
)

const UserProfile = () => {
  return (
    <main>
      <div className='w-full flex flex-col items-center pt-16'>
        <div className='w-[100px] h-[100px] bg-gray-400 rounded-full'></div>
        <div className="flex items-center justify-center gap-[2px]">
          <h2 className="text-gray-200 text-[20px] font-semibold">
            @{username}
          </h2>
          {/* <span className="text-green-400">
            <FontAwesomeIcon icon={faCertificate} />
          </span> */}
        </div>
        <p className="text-[17px] text-white ">Complete tasks below to be eligible</p>
        <button className="text-[19px] font-bold text-red-400">Logout <FontAwesomeIcon className="ml-2 text-[16px]" icon={faSignOut} /></button>
      </div>


      {/* Task */}
      <div className="pt-24">
        <div className="w-[70%] mx-auto grid grid-cols-3 py-8">
          {useranalyticssection}
        </div>
        <h2 className="text-white text-[25px] font-bold ml-12">Tasks  </h2>
        <div className="w-full mt-16 flex flex-col justify-center items-center gap-6">
          {tasksection}
        </div>
      </div>
    </main>
  )
}

export default UserProfile