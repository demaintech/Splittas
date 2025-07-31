// src/pages/WaitlistPage.jsx
import { useState } from 'react';
import WaitlistForm from './WaitlistForm';
import Dashboard from './Dashboard';

export default function WaitlistPage() {
    const [user, setUser] = useState(null);

    const handleSuccess = (userData) => {
        setUser(userData);
    };

    return (
        <div className="waitlist-page">
            <div className="container">
                {!user ? (
                    <WaitlistForm onSuccess={handleSuccess} />
                ) : (
                    <Dashboard user={user} />
                )}
            </div>
        </div>
    );
}