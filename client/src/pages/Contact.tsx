// client/src/pages/Contact.tsx
import React, { useState } from 'react'; // Import useState for managing form messages
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Ensure Link is imported if used elsewhere in the app

const Contact: React.FC = () => {
  const { t } = useTranslation();
  // State to manage the display of success or error messages after form submission
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend API.
    // For this example, we'll simulate a successful submission after a short delay.
    console.log("Form submitted!");

    // Simulate API call success
    setTimeout(() => {
      setMessage({ text: t('contactPage.successMessage'), type: 'success' });
      // Clear the message after a few seconds
      setTimeout(() => setMessage(null), 5000);
    }, 1000);

    // You could also simulate an error:
    // setTimeout(() => {
    //   setMessage({ text: t('contactPage.errorMessage'), type: 'error' });
    //   setTimeout(() => setMessage(null), 5000);
    // }, 1000);
  };

  return (
    <div className="bg-background-page py-16 text-text-body font-inter">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-bold font-display text-text-heading text-center mb-8">
          {t('contactPage.title')}
        </h1>
        <p className="text-lg text-text-body text-center mb-12">
          {t('contactPage.subtitle')}
        </p>

        {/* NEW SVG Animation Section for Communication */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12 flex justify-center items-center">
          <svg
            className="w-full h-auto max-w-lg text-accent-teal"
            viewBox="0 0 600 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1A237E" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#FF6F00" stopOpacity="0.8"/>
              </linearGradient>

              <style type="text/css">
                {`
                  .node-pulse-small {
                    animation: pulseSmall 2s infinite alternate;
                  }

                  @keyframes pulseSmall {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(1.1); opacity: 1; }
                  }

                  .signal-flow {
                    stroke-dasharray: 15 10;
                    stroke-dashoffset: 0;
                    animation: flow 3s linear infinite;
                  }

                  @keyframes flow {
                    to { stroke-dashoffset: -100; }
                  }

                  .message-icon-bounce {
                    transform-origin: center;
                    animation: bounce 2s infinite ease-in-out;
                  }

                  @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                  }

                  .globe-pulse-subtle {
                    animation: subtlePulse 4s infinite ease-in-out;
                  }

                  @keyframes subtlePulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 0.9; }
                  }
                `}
              </style>
            </defs>

            {/* Background grid/dots - subtle */}
            <g opacity="0.05">
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`h-grid-${i}`} x1="0" y1={20 + i * 35} x2="600" y2={20 + i * 35} stroke="#1A237E" strokeWidth="0.5"/>
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <line key={`v-grid-${i}`} x1={20 + i * 35} y1="0" x2={20 + i * 35} y2="300" stroke="#1A237E" strokeWidth="0.5"/>
              ))}
            </g>

            {/* Central Communication Hub (Company) */}
            <circle cx="300" cy="150" r="40" fill="#1A237E" className="node-pulse-small"/>
            <text x="300" y="155" textAnchor="middle" fontSize="18" fill="white" fontFamily="Arial" fontWeight="bold">NAA</text>

            {/* Incoming/Outgoing Communication Lines */}
            <path d="M50 100 Q150 80 260 130" stroke="url(#connection-gradient)" strokeWidth="3" fill="none" className="signal-flow"/>
            <path d="M550 100 Q450 80 340 130" stroke="url(#connection-gradient)" strokeWidth="3" fill="none" className="signal-flow" style={{ animationDelay: '1s' }}/>
            <path d="M50 200 Q150 220 260 170" stroke="url(#connection-gradient)" strokeWidth="3" fill="none" className="signal-flow" style={{ animationDelay: '0.5s' }}/>
            <path d="M550 200 Q450 220 340 170" stroke="url(#connection-gradient)" strokeWidth="3" fill="none" className="signal-flow" style={{ animationDelay: '1.5s' }}/>

            {/* Message Icon */}
            <g transform="translate(280, 130)" className="message-icon-bounce">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#FF6F00" strokeWidth="2" fill="none"/>
              <polyline points="22,6 12,13 2,6" stroke="#FF6F00" strokeWidth="2" fill="none"/>
            </g>

            {/* Global Network / Reach */}
            <g transform="translate(100, 250)" className="globe-pulse-subtle">
              <circle cx="0" cy="0" r="25" stroke="#004D40" strokeWidth="1.5" fill="none" opacity="0.6"/>
              <path d="M-20 0 A20 20 0 0 1 20 0" stroke="#004D40" strokeWidth="1" opacity="0.6"/>
              <path d="M0 -20 A20 20 0 0 1 0 20" stroke="#004D40" strokeWidth="1" opacity="0.6"/>
            </g>

            <g transform="translate(500, 250)" className="globe-pulse-subtle" style={{ animationDelay: '0.7s' }}>
              <circle cx="0" cy="0" r="25" stroke="#004D40" strokeWidth="1.5" fill="none" opacity="0.6"/>
              <path d="M-20 0 A20 20 0 0 1 20 0" stroke="#004D40" strokeWidth="1" opacity="0.6"/>
              <path d="M0 -20 A20 20 0 0 1 0 20" stroke="#004D40" strokeWidth="1" opacity="0.6"/>
            </g>

            {/* Contact Text */}
            <text x="300" y="280" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1A237E" fontFamily="Arial">
              Connect With Us
            </text>
          </svg>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-background-section p-12 rounded-xl shadow-lg">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold font-display text-text-heading mb-6">{t('contactPage.infoTitle')}</h2>
            <div className="space-y-6 text-lg text-text-body">
              <p>
                {/* Using translated label and value for address */}
                <strong className="font-semibold">{t('contactPage.addressLabel')}:</strong><br/>
                {t('contactPage.addressValue')}
              </p>
              <p>
                {/* Using translated label and value for phone */}
                <strong className="font-semibold">{t('contactPage.phoneLabel')}:</strong><br/>
                <a href={`tel:${t('contactPage.phoneValue')}`} className="hover:text-secondary-action">
                  {t('contactPage.phoneValue')}
                </a>
              </p>
              <p>
                {/* Using translated label and value for email */}
                <strong className="font-semibold">{t('contactPage.emailLabel')}:</strong><br/>
                <a href={`mailto:${t('contactPage.emailAddress')}`} className="hover:text-secondary-action">
                  {t('contactPage.emailAddress')}
                </a>
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-text-heading mb-4">{t('contactPage.socialsTitle')}</h3>
                <div className="flex space-x-6">
                  {/* Social Media Icons (using Lucide React for consistency) */}
                  <a href="#" className="text-2xl text-primary-dark hover:text-secondary-action transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="text-2xl text-primary-dark hover:text-secondary-action transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="text-2xl text-primary-dark hover:text-secondary-action transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-19 11.6 1.1.8 3 2.2 5 2.2 2.1 0 3.9-.7 5.1-1.8 1.1-.9 1.9-2.5 2.3-4.2C17.6 10.6 19 8.2 19 8c-1.2 1.4-2.5 2.1-4 2.6-1.5.5-3.1.7-4.7.7-2.6 0-5.1-.7-7.2-2.1C4 8 2 5.5 2 4c2.5 1.5 5.1 2.3 7.8 2.6C12.5 7 15 6.2 17.5 5.1c2.5-1.1 4.5-3.1 5.5-5.1z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold font-display text-text-heading mb-6">{t('contactPage.formTitle')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder={t('contactPage.namePlaceholder')} required 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <input type="email" placeholder={t('contactPage.emailPlaceholder')} required 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <input type="text" placeholder={t('contactPage.subjectPlaceholder')} 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <textarea rows={7} placeholder={t('contactPage.messagePlaceholder')} required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light resize-y"
              ></textarea>
              <button type="submit" className="btn btn-primary w-full text-lg py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
                {t('contactPage.sendButton')}
              </button>
            </form>

            {/* Message display for form submission */}
            {message && (
              <div className={`mt-4 p-4 rounded-md text-center ${
                message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
