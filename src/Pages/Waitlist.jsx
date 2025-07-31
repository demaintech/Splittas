import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faArrowRightLong, faCaretRight, faMarker } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Navigate } from 'react-router-dom';
import WaitlistHowItWorks from './WaitlistHowItWorks';
import WaitlistPage from './WaitlistPage';
import DashboardPage from './DashboardPage';
import Loading from './Loading';
import { Route, Routes, useLocation } from 'react-router-dom';
// ...existing code...





const faqs = [
    {
        name: "What is the waitlist for? ",
        content: "The waitlist grants early access to our upcoming fintech app and keeps you updated with exclusive announcements."
    },

    {
        name: "How do I join the waitlist?",
        content: "Simply enter your email address on our website and follow the steps provided to complete your registration."
    },

    {
        name: " Will I receive updates after joining? ",
        content: "Yes! You’ll get important updates through email and can also follow us on social media or join our Discord community for more insights."
    },

    {
        name: "Is it free to join the waitlist?",
        content: "Absolutely. Joining the waitlist is completely free and open to everyone interested."
    },

    {
        name: "What happens after I join the waitlist?  ",
        content: "You'll be among the first to know when we launch, receive early access benefits, and be part of our growing community"
    },

    {
        name: "Can I invite others to join?",
        content: "Yes! Feel free to share the waitlist link with friends who might be interested."
    },

    {
        name: " How will I know when the app is live? ",
        content: "We’ll send you an email notification with all the details once the app is officially launched"
    },
];




// const faqsection = faqs.map(faq => 
    
//     <>
    
//         <div className='w-[95%]  md:w-[80%] p-4 bg-[#5c07B7] mx-auto rounded-[70px] text-white font-semibold flex justify-between items-center mt-6'>
//             <h2>{faq.name}</h2>
//             <button  className='hidden outline-none border-none bg-transparent'>
//                 <FontAwesomeIcon icon={faAngleDown} />
//             </button>

//             <button
//                 onClick={() => setShowFaq(true)}
//             >
//                 <FontAwesomeIcon icon={faAngleUp} />
//             </button>
//         </div>

//         <div className={`${showFaq ? "" : "hidden"} w-[95%]  md:w-[80%] h-[150px] -mt-6 p-4 bg-[#5c07B7] mx-auto  text-white `}>
//             <p>{faq.content}</p>
//         </div>
//     </>


// )

const Waitlist = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const faqsection = faqs.map((faq, idx) => (
    <div key={idx}>
      <div className='w-[95%]  md:w-[80%] p-4 bg-[#5c07B7] mx-auto rounded-[70px] text-white font-semibold flex justify-between items-center mt-6'>
        <h2>{faq.name}</h2>
        <button
          onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
          className='outline-none border-none bg-transparent'
        >
          <FontAwesomeIcon icon={openFaqIndex === idx ? faAngleUp : faAngleDown} />
        </button>
      </div>
      <div className={`${openFaqIndex === idx ? "" : "hidden"} w-[95%]  md:w-[80%] h-[150px] -mt-6 p-4 bg-[#5c07B7] mx-auto  text-white`}>
        <p>{faq.content}</p>
      </div>
    </div>
  ));


  const location = useLocation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkExistingUser = async () => {
            try {
                // In a real app, you might check localStorage or cookies for user session
                // For this example, we'll check the URL for an email parameter
                const params = new URLSearchParams(location.search);
                const email = params.get('email');

                if (email) {
                    const response = await databases.listDocuments(
                        databaseId,
                        usersCollectionId,
                        [Query.equal('email', email)]
                    );

                    if (response.total > 0) {
                        setUser(response.documents[0]);
                    }
                }
            } catch (err) {
                console.error('Error checking user:', err);
            } finally {
                setLoading(false);
            }
        };

        checkExistingUser();
    }, [location.search]);

    
  return (
    <div className='mt-[100px]'>
        
        <div className='w-[100%] flex justify-center items-center  h-auto py-16 bg-[#5c07B7]'>
             <Routes>
                <Route
                    path="/waitlist"
                    element={
                        user ? (
                            <Navigate to="/dashboard" state={{ user }} />
                        ) : (
                            <WaitlistPage />
                        )
                    }
                />
                <Route
                    path="/waitlist"
                    element={<DashboardPage user={user} />}
                />
                <Route path="*" element={<WaitlistPage />} />
            </Routes>
        {/* This section will be displayed If email already exists. */}    
            {/* <div className='flex-col items-center hidden'>
                <h2 className='text-center text-[20px] lg:text-[55px] font-bold text-white'>This Email already joined the waitlist.</h2>
                <div className='flex  justify-center items-center gap-2'>
                    <h2 className='text-center text-[20px] lg:text-[30px] font-bold text-white'>Your ref code:</h2>
                    <span className='text-center text-[22px] lg:text-[30px] font-bold text-white'>{refcode}
                        <button>
                            <FontAwesomeIcon icon={faCopy} className='ml-2'/>
                            
                        </button>
                    </span>
                </div>
            </div> */}
            
        </div>

        <div className='w-[100%] py-16'>
            <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>How it works.</h1>

        {/* How it works */}
            <WaitlistHowItWorks />

        {/* Faq Section */}
            <div className='mt-24'>
                <h1 className='text-[#5c07B7] text-[45px] font-bold text-center'>FAQs.</h1> 
                {faqsection}
            </div>          
        </div>

       
    </div>
  )
}

export default Waitlist;