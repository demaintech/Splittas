import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faClose } from '@fortawesome/free-solid-svg-icons';
// import {  } from 'appwrite';
import { Query, ID } from 'appwrite';
import { databases, databaseId, usersCollectionId } from '../lib/appwrite';
import { useState } from 'react';

const WaitlistForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
    const [referralId, setReferralId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const generateReferralCode = () => {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Check if user already exists
            const existingUser = await databases.listDocuments(
                databaseId,
                usersCollectionId,
                [Query.equal('email', email)]
            );

            if (existingUser.total > 0) {
                onSuccess(existingUser.documents[0]);
                return;
            }

            const referralCode = generateReferralCode();
            const referredBy = referralId.trim();

            // Create new user
            const newUser = await databases.createDocument(
                databaseId,
                usersCollectionId,
                ID.unique(),
                {
                    email,
                    referralCode,
                    referredBy: referredBy || null,
                    referralCount: 0,
                    createdAt: new Date().toISOString()
                }
            );

            // If user was referred, update the referrer's count
            if (referredBy) {
                const referrer = await databases.listDocuments(
                    databaseId,
                    usersCollectionId,
                    [Query.equal('referralCode', referredBy)]
                );

                if (referrer.total > 0) {
                    await databases.updateDocument(
                        databaseId,
                        usersCollectionId,
                        referrer.documents[0].$id,
                        {
                            referralCount: referrer.documents[0].referralCount + 1
                        }
                    );
                }
            }

            onSuccess(newUser);
        } catch (err) {
            setError(err.message || 'Failed to submit. Please try again.');
        } finally {
            setLoading(false);
        }
      }


    // const [openErrorModal, setOpenErrorModal] = useState(true);
  return (
    <div className='w-full'>
        

        <h2 className='text-center text-[25px] lg:text-[55px] font-bold text-white'>Join the wailist.</h2>
        {error && <p className='text-red-300 text-[20px] font-semibold text-center'>{error}</p>}
        <form onSubmit={handleSubmit}
          className='flex flex-col justify-center gap-6 w-[100%] items-center mt-8'>
            <input 
              type="email" 
              required
              // name="email" 
              id="email" 
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address' 
              className='w-[100%] h-[55px] bg-transparent border-2 border-white text-white rounded-xl pl-4 text-[17px] lg:text-[20px] outline-none font-semibold'/>
            <input 
              type="email" 
              // name="" 
              id="referralId" 
              onChange={(e) => setReferralId(e.target.value)}
              placeholder='Ref. Code (optional)' 
              className='w-[100%]  h-[55px] bg-transparent border-2 border-white  text-white rounded-xl pl-4 text-[17px] lg:text-[20px] outline-none font-semibold'/>
            <button 
              className='w-[100%]  mt-4  bg-white h-[55px] rounded-xl  text-[20px] outline-none font-bold text-[#5c07B7]'
              type='submit'
              disabled={loading}>
                {loading ? 'Submitting...' : 'Join Waitlist'}
            </button>
        </form>
    </div>
  )
}

export default WaitlistForm