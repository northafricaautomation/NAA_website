// client/src/pages/Login.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Hook for navigation

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // For success/error messages
  const [isError, setIsError] = useState(false); // To style messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setIsError(false);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Login successful!');
        setIsError(false);
        console.log('Login successful:', data);
        // Store the token (e.g., in localStorage)
        localStorage.setItem('token', data.token);
        // Redirect to a protected dashboard or home page
        navigate('/'); // Or '/dashboard' if you create one
      } else {
        setMessage(data.message || 'Login failed.');
        setIsError(true);
        console.error('Login error:', data);
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
      setIsError(true);
      console.error('Network error during login:', error);
    }
  };

  return (
    <div className="bg-background-page min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-10 rounded-2xl shadow-3xl max-w-md w-full border border-border-light">
        <h1 className="text-4xl font-bold font-display text-text-heading text-center mb-8">{t('auth.login.title')}</h1>
        <p className="text-center text-text-body mb-8">{t('auth.login.subtitle')}</p>

        {/* NEW SVG Animation Section for Login */}
        <div className="flex justify-center items-center mb-8">
          <svg
            className="w-full h-auto max-w-[200px] text-primary-dark"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lock-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1A237E" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#FF6F00" stopOpacity="0.9"/>
              </linearGradient>
              <style type="text/css">
                {`
                  .lock-body-glow {
                    animation: lockGlow 3s infinite alternate;
                  }

                  @keyframes lockGlow {
                    0% { filter: drop-shadow(0 0 5px rgba(26, 35, 126, 0.5)); }
                    100% { filter: drop-shadow(0 0 15px rgba(26, 35, 126, 1)); }
                  }

                  .key-path-flow {
                    stroke-dasharray: 50 50;
                    stroke-dashoffset: 0;
                    animation: keyFlow 2s linear infinite;
                  }

                  @keyframes keyFlow {
                    to { stroke-dashoffset: -100; }
                  }

                  .check-appear {
                    opacity: 0;
                    transform: scale(0.5);
                    animation: appearScale 1s forwards;
                    animation-delay: 2s; /* Appear after some flow */
                  }

                  @keyframes appearScale {
                    to { opacity: 1; transform: scale(1); }
                  }
                `}
              </style>
            </defs>

            {/* Lock Body */}
            <rect x="50" y="80" width="100" height="80" rx="10" fill="#1A237E" className="lock-body-glow"/>
            {/* Lock Shackle */}
            <path d="M70 80 A30 30 0 0 1 130 80 V50 H70 V80 Z" fill="#FF6F00" stroke="#FF6F00" strokeWidth="5"/>

            {/* Keyhole */}
            <circle cx="100" cy="120" r="10" fill="#F0F4F8"/>
            <rect x="95" y="130" width="10" height="20" fill="#F0F4F8"/>

            {/* Animated Path for "Key" / Credentials */}
            <path d="M20 100 Q60 120 90 120" stroke="url(#lock-gradient)" strokeWidth="4" fill="none" className="key-path-flow"/>

            {/* Checkmark for successful login (initially hidden) */}
            <g transform="translate(85, 105)" className="check-appear">
              <path d="M5 12 L10 17 L20 7" stroke="#2E7D32" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </g>

            {/* Text */}
            <text x="100" y="185" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1A237E" fontFamily="Arial">
              Secure Access
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

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="h-4 w-4 text-secondary-action border-border-light rounded focus:ring-secondary-action" />
              <label htmlFor="rememberMe" className="ml-2 text-text-body">{t('auth.rememberMe')}</label>
            </div>
            <Link to="/forgot-password" className="text-secondary-action hover:text-primary-dark transition-colors">
              {t('auth.forgotPassword')}
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-full text-lg shadow-lg">
            {t('auth.login.button')}
          </button>
        </form>

        <div className="mt-8 text-center text-text-body">
          {t('auth.noAccount')}
          <Link to="/register" className="text-secondary-action hover:text-primary-dark font-semibold">
            {t('auth.register.link')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
