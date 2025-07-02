import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

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


const faqsection = faqs.map(faq => 
    <>
        <div className='w-[95%]  md:w-[80%] p-4 bg-[#5c07B7] bg-gray-800 shadow-sm shadow-gray-600 mx-auto rounded-[70px] text-white font-semibold flex justify-between items-center mt-6'>
            <h2>{faq.name}</h2>
            <span className='hidden'>
                <FontAwesomeIcon icon={faAngleDown} />
            </span>

            <span>
                <FontAwesomeIcon icon={faAngleUp  } />
            </span>
        </div>

        <div className='w-[95%]  md:w-[80%] hidden h-[150px] -mt-6 p-4 bg-[#5c07B7] mx-auto  text-white '>
            <p>{faq.content}</p>
        </div>
    </>
)
const Faq = () => {
  return (
    <div className='mt-32                                                                                                              '>
        <h2 className='text-center text-white font-semibold text-[4pc]'>Q&A</h2>
        <div className='w-full  py-16'>
          {faqsection}
        </div>
    </div>
  )
}

export default Faq;