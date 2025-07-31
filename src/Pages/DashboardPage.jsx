// src/pages/DashboardPage.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Query, ID } from 'appwrite';
// ...other imports...
import { databases, databaseId, usersCollectionId } from '../lib/appwrite';
// import Dashboard from '../components/Dashboard';
// import Loading from '../components/Loading';
import Loading from './Loading';
import Dashboard from './Dashboard';

export default function DashboardPage({ user }) {
    const location = useLocation();
    const [userState, setUserState] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const checkUser = async () => {
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
                        setUserState(response.documents[0]);
                    } else {
                        setError('User not found. Please join the waitlist first.');
                    }
                } else {
                    setError('No user email provided.');
                }
            } catch (err) {
                setError('Failed to fetch user data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        checkUser();
    }, [location.search]);

    if (loading) return <Loading />;
    if (error) return <div className="error">{error}</div>;
    if (!userState) return <div>Please join the waitlist first</div>;
  return <Dashboard user={userState} />;
}