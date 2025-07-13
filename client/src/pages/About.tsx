// client/src/pages/About.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background-page text-text-body font-inter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-dark to-primary-light text-white py-24 px-6 sm:px-12 lg:px-24 rounded-b-3xl shadow-xl overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm12 10V6h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 10V6H10v4H6v2h4v4h2v-4h4v-2h-4zM36 46v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm12 10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 46v-4H10v4H6v2h4v4h2v-4h4v-2h-4zM24 22v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-24V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 12V6h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H-2v4H-6v2h4v4h2v-4h4v-2h-4zm0-24V0H-2v4H-6v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg>")` }} />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold font-display mb-4 animate-fade-in-up">
            {t('aboutPage.title')}
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in-up delay-100">
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white shadow-inner rounded-xl mx-auto -mt-12 relative z-10 transform transition-all duration-500 hover:scale-[1.02]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-display text-primary-dark mb-6 border-b-4 border-accent-teal pb-2 transition-all duration-300 hover:border-secondary-action">
              {t('aboutPage.missionTitle')}
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              {t('aboutPage.missionParagraph')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('aboutPage.visionParagraph')}
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* IMPROVED SVG: Focused on PLC to AI and AI to Optimization Process */}
            <svg
              className="w-full h-auto max-w-sm text-accent-teal shadow-lg rounded-xl p-4 transform transition-transform duration-300 hover:rotate-3 hover:scale-105"
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradient for data flow lines */}
                <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1A237E" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#FF6F00" stopOpacity="0.8"/>
                </linearGradient>

                {/* Define animations */}
                <style type="text/css">
                  {`
                    .ai-glow {
                      animation: glow 3s infinite alternate;
                    }

                    @keyframes glow {
                      0% { filter: drop-shadow(0 0 5px rgba(26, 35, 126, 0.7)); }
                      100% { filter: drop-shadow(0 0 15px rgba(26, 35, 126, 1)); }
                    }

                    .data-pulse {
                      animation: pulseData 2s infinite alternate;
                    }

                    @keyframes pulseData {
                      0% { transform: scale(1); opacity: 0.8; }
                      100% { transform: scale(1.1); opacity: 1; }
                    }

                    .data-stream {
                      stroke-dasharray: 10 5;
                      stroke-dashoffset: 0;
                      animation: stream 4s linear infinite;
                    }

                    @keyframes stream {
                      to { stroke-dashoffset: -100; }
                    }

                    .plc-pulse {
                      animation: plcPulse 2s infinite alternate;
                    }

                    @keyframes plcPulse {
                      0% { opacity: 0.9; }
                      100% { opacity: 1; }
                    }

                    .optimization-pulse {
                      animation: optimizationPulse 2.5s infinite alternate;
                    }

                    @keyframes optimizationPulse {
                      0% { opacity: 0.8; transform: scale(1); }
                      100% { opacity: 1; transform: scale(1.05); }
                    }

                    /* Particle animation for data flow */
                    .particle {
                      fill: url(#data-gradient);
                      animation: moveParticle 4s linear infinite;
                      transform-box: fill-box; /* Important for path-based animation */
                      transform-origin: center;
                    }

                    @keyframes moveParticle {
                      0% { transform: translate(0, 0); opacity: 1; }
                      100% { transform: translate(1, 0); opacity: 0; }
                    }
                  `}
                </style>
                {/* Arrowhead Marker */}
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#1A237E"/>
                </marker>
              </defs>

              {/* Background grid/dots - very subtle */}
              <g opacity="0.05">
                {Array.from({ length: 15 }).map((_, i) =>
                  <line key={`h-${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} stroke="#1A237E" strokeWidth="0.5"/>
                )}
                {Array.from({ length: 20 }).map((_, i) =>
                  <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="400" stroke="#1A237E" strokeWidth="0.5"/>
                )}
              </g>

              {/* PLC (Programmable Logic Controller) */}
              <rect x="100" y="160" width="80" height="80" rx="10" fill="#004D40" opacity="0.9" className="plc-pulse"/>
              <text x="140" y="200" textAnchor="middle" fontSize="16" fill="white" fontFamily="Arial" fontWeight="bold">PLC</text>
              {/* PLC I/O ports - simplified for visual clarity */}
              <circle cx="105" cy="180" r="3" fill="#FF6F00"/>
              <circle cx="105" cy="200" r="3" fill="#FF6F00"/>
              <circle cx="105" cy="220" r="3" fill="#FF6F00"/>
              <circle cx="175" cy="180" r="3" fill="#FF6F00"/>
              <circle cx="175" cy="200" r="3" fill="#FF6F00"/>
              <circle cx="175" cy="220" r="3" fill="#FF6F00"/>

              {/* Central AI Processing Unit */}
              <rect x="260" y="150" width="80" height="80" rx="15" fill="#1A237E" className="ai-glow"/>
              <text x="300" y="190" textAnchor="middle" fontSize="20" fill="white" fontFamily="Arial" fontWeight="bold">AI</text>
              <text x="300" y="215" textAnchor="middle" fontSize="12" fill="white" fontFamily="Arial">Core</text>

              {/* Optimization Process */}
              <rect x="420" y="160" width="80" height="80" rx="10" fill="#2E7D32" opacity="0.9" className="optimization-pulse"/>
              <text x="460" y="200" textAnchor="middle" fontSize="12" fill="white" fontFamily="Arial" fontWeight="bold">Optimization</text>
              <text x="460" y="215" textAnchor="middle" fontSize="10" fill="white" fontFamily="Arial">Process</text>

              {/* Data Flow Lines: PLC -> AI Core */}
              <path id="path-plc-ai" d="M180 200 C200 200, 230 185, 260 185" stroke="url(#data-gradient)" strokeWidth="3" fill="none" className="data-stream"/>
              {/* Animated particle for PLC -> AI */}
              <circle r="5" className="particle">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#path-plc-ai" />
                </animateMotion>
              </circle>

              {/* Data Flow Lines: AI Core -> Optimization Process */}
              <path id="path-ai-opt" d="M340 200 C370 200, 390 185, 420 185" stroke="url(#data-gradient)" strokeWidth="3" fill="none" className="data-stream" style={{ animationDelay: '2s' }}/>
              {/* Animated particle for AI -> Optimization */}
              <circle r="5" className="particle" style={{ animationDelay: '2s' }}>
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#path-ai-opt" />
                </animateMotion>
              </circle>

              {/* Company Vision Text */}
              <text x="300" y="360" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1A237E" fontFamily="Arial">
                North Africa Automation
              </text>
              <text x="300" y="380" textAnchor="middle" fontSize="14" fill="#263238" fontFamily="Arial">
                Intelligent Automation & AI Collaboration
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-background-page">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-display text-primary-dark text-center mb-12 border-b-4 border-secondary-action pb-2">
            {t('aboutPage.valuesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-108 hover:shadow-2xl transition-all duration-300 ring-2 ring-transparent hover:ring-accent-teal">
                {/* Dynamic Icons for Values - using Lucide React for better visual consistency */}
                {num === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb text-accent-teal mb-4"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 9c0 1.8.7 3.3 1.5 4.5 1 .8 1.5 2 1.5 3.5 0 1.5-.5 2.7-1.5 3.5-.8.8-1.5 1.5-1.5 2.5h12c0-1 .7-1.7 1.5-2.5 1-.8 1.5-2 1.5-3.5 0-1.3.5-2.6 1.5-3.5.8-.8 1.3-1.5 1.5-2.5z"/><path d="M7 22h10"/></svg>}
                {num === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-accent-teal mb-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>}
                {num === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake text-accent-teal mb-4"><path d="m11 17 2 2c1.4 1.4 3.3 1.4 4.8 0 .7-.7 1.2-1.7 1.2-2.8V10c0-.5-.4-1-1-1h-4L8 2H4c-1.1 0-2 .9-2 2v10c0 1.2.5 2.3 1.3 3.1L11 17Z"/><path d="M14 17h7c1.1 0 2-.9 2-2V9c0-.5-.4-1-1-1h-3.3L14 2H9.6c-.4 0-.8.2-1 .5L3 10"/><path d="M18 10h-1.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H18"/></svg>}
                {num === 4 && <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-accent-teal mb-4"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17.76 20l-5.76-2-5.76 2 2.283-7.11C9.29 12.95 10.79 13 12 13s2.71-.05 3.477-.11z"/></svg>}
                {num === 5 && <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-accent-teal mb-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                <h3 className="text-2xl font-semibold text-primary-dark mb-3">
                  {t(`aboutPage.value${num}Title`)}
                </h3>
                <p className="text-text-body">
                  {t(`aboutPage.value${num}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey/History Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-l from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-primary-dark mb-8 border-b-4 border-accent-teal pb-2 inline-block">
            {t('aboutPage.historyTitle')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed relative">
            {/* Simple Timeline Visual */}
            <div className="absolute left-1/2 -ml-0.5 w-1 bg-gray-300 h-full hidden md:block"></div>
            
            {/* History Paragraph 1 */}
            <div className="relative md:flex items-center md:space-x-8 mb-8">
              <div className="hidden md:block w-10 h-10 rounded-full bg-accent-teal border-4 border-white absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <p className="md:w-1/2 md:pr-4 md:text-right">{t('aboutPage.historyParagraph1')}</p>
              <div className="hidden md:block w-1/2"></div> {/* Spacer */}
            </div>

            {/* History Paragraph 2 */}
            <div className="relative md:flex items-center md:space-x-8">
              <div className="hidden md:block w-10 h-10 rounded-full bg-secondary-action border-4 border-white absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div className="hidden md:block w-1/2"></div> {/* Spacer */}
              <p className="md:w-1/2 md:pl-4 md:text-left">{t('aboutPage.historyParagraph2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Team Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-background-page">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-primary-dark mb-8 border-b-4 border-secondary-action pb-2 inline-block">
            {t('aboutPage.teamTitle')}
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            {t('aboutPage.teamParagraph')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {/* Belaid Benmahrez */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <img
                src="https://placehold.co/150x150/A7FFEB/004D40?text=Belaid"
                alt={t('aboutPage.teamMembers.belaidBenmahrez.name')}
                className="rounded-full w-36 h-36 object-cover mb-4 border-4 border-accent-teal transition-all duration-300 hover:border-secondary-action"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/A7FFEB/004D40?text=User'; }}
              />
              <h3 className="text-2xl font-bold text-primary-dark mb-1">
                {t('aboutPage.teamMembers.belaidBenmahrez.name')}
              </h3>
              <p className="text-accent-teal font-semibold mb-2">
                {t('aboutPage.teamMembers.belaidBenmahrez.title')}
              </p>
              <p className="text-neutral-dark text-sm">
                {t('aboutPage.teamMembers.belaidBenmahrez.location')}
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-19 11.6 1.1.8 3 2.2 5 2.2 2.1 0 3.9-.7 5.1-1.8 1.1-.9 1.9-2.5 2.3-4.2C17.6 10.6 19 8.2 19 8c-1.2 1.4-2.5 2.1-4 2.6-1.5.5-3.1.7-4.7.7-2.6 0-5.1-.7-7.2-2.1C4 8 2 5.5 2 4c2.5 1.5 5.1 2.3 7.8 2.6C12.5 7 15 6.2 17.5 5.1c2.5-1.1 4.5-3.1 5.5-5.1z"/></svg>
                </a>
              </div>
            </div>
            {/* Massinissa TINOUCHE */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <img
                src="https://placehold.co/150x150/A7FFEB/004D40?text=Massinissa"
                alt={t('aboutPage.teamMembers.massinissaTinouche.name')}
                className="rounded-full w-36 h-36 object-cover mb-4 border-4 border-accent-teal transition-all duration-300 hover:border-secondary-action"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/A7FFEB/004D40?text=User'; }}
              />
              <h3 className="text-2xl font-bold text-primary-dark mb-1">
                {t('aboutPage.teamMembers.massinissaTinouche.name')}
              </h3>
              <p className="text-accent-teal font-semibold mb-2">
                {t('aboutPage.teamMembers.massinissaTinouche.title')}
              </p>
              <p className="text-neutral-dark text-sm">
                {t('aboutPage.teamMembers.massinissaTinouche.location')}
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-19 11.6 1.1.8 3 2.2 5 2.2 2.1 0 3.9-.7 5.1-1.8 1.1-.9 1.9-2.5 2.3-4.2C17.6 10.6 19 8.2 19 8c-1.2 1.4-2.5 2.1-4 2.6-1.5.5-3.1.7-4.7.7-2.6 0-5.1-.7-7.2-2.1C4 8 2 5.5 2 4c2.5 1.5 5.1 2.3 7.8 2.6C12.5 7 15 6.2 17.5 5.1c2.5-1.1 4.5-3.1 5.5-5.1z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us CTA Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-accent-teal to-secondary-action text-white text-center rounded-t-3xl shadow-xl">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold font-display mb-4">
            {t('aboutPage.contactUsCtaTitle')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('aboutPage.contactUsCtaSubtitle')}
          </p>
          <Link to="/contact" className="btn btn-light-outline text-white border-white hover:bg-white hover:text-secondary-action hover:shadow-lg transition-all duration-300">
            {t('aboutUsCtaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
