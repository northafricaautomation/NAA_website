// client/src/pages/Register.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Register: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Hook for navigation

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // For success/error messages
  const [isError, setIsError] = useState(false); // To style messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setIsError(false);

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setIsError(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Registration successful!');
        setIsError(false);
        // Optionally, store token or redirect to login
        console.log('Registration successful:', data);
        // Redirect to login page after successful registration
        navigate('/login');
      } else {
        setMessage(data.message || 'Registration failed.');
        setIsError(true);
        console.error('Registration error:', data);
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
      setIsError(true);
      console.error('Network error during registration:', error);
    }
  };

  return (
    <div className="bg-background-page min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-10 rounded-2xl shadow-3xl max-w-md w-full border border-border-light">
        <h1 className="text-4xl font-bold font-display text-text-heading text-center mb-8">{t('auth.register.title')}</h1>
        <p className="text-center text-text-body mb-8">{t('auth.register.subtitle')}</p>

        {/* NEW SVG Animation Section for Register */}
        <div className="flex justify-center items-center mb-8">
          <svg
            className="w-full h-auto max-w-[200px] text-primary-dark"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="register-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#A7FFEB" stopOpacity="0.9"/>
              </linearGradient>
              <style type="text/css">
                {`
                  .user-icon-bounce {
                    transform-origin: center;
                    animation: bounce 2s infinite ease-in-out;
                  }

                  @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                  }

                  .plus-appear {
                    opacity: 0;
                    transform: scale(0.5);
                    animation: appearScale 1s forwards;
                    animation-delay: 1s; /* Appear after some flow */
                  }

                  @keyframes appearScale {
                    to { opacity: 1; transform: scale(1); }
                  }

                  .data-flow-line {
                    stroke-dasharray: 20 10;
                    stroke-dashoffset: 0;
                    animation: flowLine 3s linear infinite;
                  }

                  @keyframes flowLine {
                    to { stroke-dashoffset: -100; }
                  }

                  .secure-lock-pulse {
                    animation: lockPulse 2s infinite alternate;
                  }

                  @keyframes lockPulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(1.05); opacity: 1; }
                  }
                `}
              </style>
            </defs>

            {/* User Icon */}
            <g transform="translate(75, 50)" className="user-icon-bounce">
              <circle cx="25" cy="25" r="20" fill="#1A237E"/> {/* Head */}
              <path d="M5 60 C5 40, 45 40, 45 60 Z" fill="#1A237E"/> {/* Body */}
            </g>

            {/* Plus Sign for Registration */}
            <g transform="translate(110, 60)" className="plus-appear">
              <line x1="0" y1="10" x2="20" y2="10" stroke="#FF6F00" strokeWidth="4" strokeLinecap="round"/>
              <line x1="10" y1="0" x2="10" y2="20" stroke="#FF6F00" strokeWidth="4" strokeLinecap="round"/>
            </g>

            {/* Data Flow Lines */}
            <path d="M20 100 Q60 120 90 120" stroke="url(#register-gradient)" strokeWidth="3" fill="none" className="data-flow-line"/>
            <path d="M180 100 Q140 120 110 120" stroke="url(#register-gradient)" strokeWidth="3" fill="none" className="data-flow-line" style={{ animationDelay: '1.5s' }}/>

            {/* Secure Lock (subtle) */}
            <rect x="75" y="140" width="50" height="40" rx="5" fill="#004D40" opacity="0.7" className="secure-lock-pulse"/>
            <path d="M85 140 A10 10 0 0 1 115 140 V130 H85 V140 Z" fill="#004D40" stroke="#004D40" strokeWidth="3" opacity="0.7"/>

            {/* Text */}
            <text x="100" y="185" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1A237E" fontFamily="Arial">
              Create Account
            </text>
          </svg>
        </div>

        {message && (
          <div className={`p-3 rounded-md mb-4 text-center ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-dark">{t('auth.nameLabel')}</label>
            <input
              type="text"
              placeholder={t('auth.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-dark">{t('auth.emailLabel')}</label>
            <input
              type="email"
              placeholder={t('auth.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-dark">{t('auth.passwordLabel')}</label>
            <input
              type="password"
              placeholder={t('auth.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-dark">{t('auth.confirmPasswordLabel')}</label>
            <input
              type="password"
              placeholder={t('auth.confirmPasswordPlaceholder')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full text-lg shadow-lg">
            {t('auth.register.button')}
          </button>
        </form>

        <div className="mt-8 text-center text-text-body">
          {t('auth.haveAccount')}
          <Link to="/login" className="text-secondary-action hover:text-primary-dark font-semibold">
            {t('auth.login.link')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
