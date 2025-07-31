import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faDiscord, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Query, ID } from 'appwrite';
// ...other imports...
import { databases, databaseId, usersCollectionId } from '../lib/appwrite';
const refcode = "sp00721x";
import { useLocation } from 'react-router-dom';
import { faCheck, faHeart, faSmile } from '@fortawesome/free-solid-svg-icons';
// ...existing code...
const Dashboard = ({ user }) => {
    const [referrals, setReferrals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReferrals = async () => {
            try {
                const response = await databases.listDocuments(
                    databaseId,
                    usersCollectionId,
                    [Query.equal('referredBy', user.referralCode)]
                );
                setReferrals(response.documents);
            } catch (err) {
                console.error('Failed to fetch referrals:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchReferrals();
    }, [user.referralCode]);

    const referralLink = `${window.location.origin}?ref=${user.referralCode}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        alert('Referral link copied to clipboard!');
    };
  return (
    <div>
   
        <div className='flex  justify-center items-center gap-2'>
            <h2 className='text-center text-[25px] lg:text-[30px] font-bold text-white'>Your ref code:</h2>
            <div className='flex items-center gap-3'>
                <span className='text-center text-[25px] lg:text-[30px] font-bold text-white'>{user.referralCode}</span>
                <button 
                    onClick={copyToClipboard}
                    className='w-[140px] h-[50px] bg-white rounded-xl text-[17px] text-[#5c07B7] font-bold shadow-md'>
                    {/* <FontAwesomeIcon icon={faCopy} className='ml-2'/> */}
                    Copy Link
                </button>
            </div>
        </div>
        <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-white'>Thank you for joining the waitlist!</h2>
        <p className='text-[20px] lg:text-[28px] font-bold mx-auto lg:mx-0 text-center text-white'>
            We'll notify you when our app is ready.
        </p>

        <div className='flex flex-col items-center'>
            <div className='w-[300px] h-[200px] mt-8 border-2 rounded-xl flex flex-col justify-center items-center gap-4'>
                <h2 className='text-white text-[40px] font-bold'>{user.referralCount}</h2>
                <h5 className='text-white text-[20px] font-semibold'>Referrals</h5>
            </div>

            <div className='w-full text-center text-white text-[20px] font-semibold mt-6 gap-4 '>
                {loading ? (
                    <p className='text-white text-[20px] font-semibold'>Loading referrals...</p>
                ) : (
                <div className="referral-list">
                    <h3 className='mt-6'>Your Referrals</h3>
                    {referrals.length > 0 ? (
                        <ul className='flex flex-col gap-3 text-center text-[25px] mt-6'>
                            {referrals.map((referral) => (
                                <li key={referral.$id}>{referral.email}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No referrals yet</p>
                    )}
                </div>
            )}
        </div>
        
        </div>
        <div className='mt-16 flex flex-col items-center'>
            <h2 className='text-center text-[25px] font-bold text-white'>Join our communities</h2>
            <ul className='flex gap-4 text-white mx-auto text-[30px] mt-6'>
                <li>
                    <FontAwesomeIcon icon={faDiscord} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faXTwitter} />
                </li>
            </ul>
        
            <div className='flex items-center flex-col'>
                <h2 className='text-center text-[25px] font-bold text-white mt-6'>Follow our social medias below to stay on top of the trend.</h2>
                <ul className='flex  items-center gap-4 text-white mx-auto text-[30px] mt-6'>
                    <li>
                        <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </li>
            </ul>
            </div>
        </div>
    {/* <div className='w-full h-[100vh] absolute top-0 left-0 -z-50'>
        <div className=''>
            <div className='w-[160px] h-[160px] bg-white mt-60 ml-20 rounded-full absolute flex justify-center items-center z-50'>
                <FontAwesomeIcon icon={faHeart} className='text-[40px] text-[#5c07B7]'/>
            </div>
            <div className='w-[140px] h-[140px] bg-white shadow-lg border-[1px] mt-[340px] ml-32 rounded-full absolute flex justify-center items-center z-50'>
                <FontAwesomeIcon icon={faSmile} className='text-[40px] text-[#5c07B7]'/>
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default Dashboard;