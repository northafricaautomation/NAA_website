// client/src/pages/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setMessage('');
      setIsError(false);
      const token = localStorage.getItem('token');

      if (!token) {
        setMessage('You are not logged in. Redirecting to login...');
        setIsError(true);
        setTimeout(() => navigate('/login'), 2000);
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/dashboard/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Send the token
          },
        });

        const data = await response.json();

        if (response.ok) {
          setProfileData(data);
          setMessage(data.message || 'Profile loaded successfully!');
          setIsError(false);
        } else {
          setMessage(data.message || 'Failed to load profile. Please log in again.');
          setIsError(true);
          // If token is invalid/expired, clear it and redirect
          localStorage.removeItem('token');
          setTimeout(() => navigate('/login'), 2000);
        }
      } catch (error) {
        setMessage('Network error. Could not connect to server.');
        setIsError(true);
        console.error('Network error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [navigate]); // Dependency array includes navigate to avoid lint warnings

  const handleLogout = () => {
    localStorage.removeItem('token');
    setMessage('Logged out successfully!');
    setIsError(false);
    setProfileData(null);
    setTimeout(() => navigate('/login'), 1000);
  };

  return (
    <div className="bg-background-page min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-10 rounded-2xl shadow-3xl max-w-md w-full border border-border-light text-center">
        <h1 className="text-4xl font-bold font-display text-text-heading mb-8">
          {t('dashboard.title')}
        </h1>

        {message && (
          <div className={`p-3 rounded-md mb-4 ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}

        {profileData ? (
          <div className="space-y-4">
            <p className="text-lg text-text-body">
              {t('dashboard.welcome')}, <span className="font-semibold text-primary-dark">{profileData.name}</span>!
            </p>
            <p className="text-text-secondary">Email: {profileData.email}</p>
            <p className="text-text-secondary">{profileData.message}</p>
            <button onClick={handleLogout} className="btn btn-secondary mt-6">
              {t('dashboard.logout')}
            </button>
          </div>
        ) : (
          <p className="text-text-body">Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;