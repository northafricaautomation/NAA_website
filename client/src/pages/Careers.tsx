// client/src/pages/Careers.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// This is a simple reusable component for a job listing
interface JobListingProps {
  title: string;
  location: string;
  type: string;
  description: string;
  applyLink: string;
}

const JobListing: React.FC<JobListingProps> = ({ title, location, type, description, applyLink }) => (
  <div className="bg-background-section p-8 rounded-xl shadow-lg border border-border-light hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold font-display text-text-heading mb-3">{title}</h3>
    <div className="text-neutral-dark mb-4 space-x-4">
      <span className="font-semibold text-secondary-action">{location}</span>
      <span className="text-sm bg-neutral-light px-3 py-1 rounded-full">{type}</span>
    </div>
    <p className="text-text-body mb-6">{description}</p>
    <a href={applyLink} className="btn btn-primary text-sm">
      Apply Now
    </a>
  </div>
);

const Careers: React.FC = () => {
  const { t } = useTranslation();

  // Example Job Data (Replace with real data, perhaps fetched from an API)
  const jobOpenings = [
    { 
      title: t('careersPage.job1.title'), 
      location: t('careersPage.job1.location'), 
      type: t('careersPage.job1.type'), 
      description: t('careersPage.job1.description'), 
      applyLink: "#" 
    },
    { 
      title: t('careersPage.job2.title'), 
      location: t('careersPage.job2.location'), 
      type: t('careersPage.job2.type'), 
      description: t('careersPage.job2.description'), 
      applyLink: "#" 
    },
    { 
      title: t('careersPage.job3.title'), 
      location: t('careersPage.job3.location'), 
      type: t('careersPage.job3.type'), 
      description: t('careersPage.job3.description'), 
      applyLink: "#" 
    },
    { 
      title: t('careersPage.job4.title'), 
      location: t('careersPage.job4.location'), 
      type: t('careersPage.job4.type'), 
      description: t('careersPage.job4.description'), 
      applyLink: "#" 
    },
  ];

  return (
    <div className="bg-background-page text-text-body font-inter">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Careers Hero Section */}
        <section className="text-center py-20 bg-primary-dark text-text-on-dark rounded-xl shadow-2xl mb-16">
          <h1 className="text-5xl font-bold font-display mb-6 animate-slide-in-down">{t('careersPage.hero.title')}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10 animate-fade-in">{t('careersPage.hero.subtitle')}</p>
          <a href="#openings" className="btn btn-secondary !bg-text-on-dark !text-primary-dark hover:!bg-opacity-90 animate-slide-in-up">
            {t('careersPage.hero.cta')}
          </a>
        </section>

        {/* Culture and Benefits Section with SVG Animation */}
        <section className="py-12 bg-background-section rounded-xl shadow-lg mb-16">
          <h2 className="text-4xl font-bold font-display text-text-heading text-center mb-10">{t('careersPage.culture.title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 items-center">
            {/* SVG Animation */}
            <div className="flex justify-center items-center h-full">
              <svg
                className="w-full h-auto max-w-md"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#FF6F00" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="innovation-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1A237E" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#A7FFEB" stopOpacity="0.8"/>
                  </linearGradient>
                  <style type="text/css">
                    {`
                      .growth-line {
                        stroke-dasharray: 1000;
                        stroke-dashoffset: 1000;
                        animation: drawGrowth 3s ease-out forwards;
                      }

                      @keyframes drawGrowth {
                        to { stroke-dashoffset: 0; }
                      }

                      .node-pulse {
                        animation: pulseNode 2s infinite alternate;
                      }

                      @keyframes pulseNode {
                        0% { transform: scale(1); opacity: 0.8; }
                        100% { transform: scale(1.1); opacity: 1; }
                      }

                      .globe-rotate {
                        transform-origin: 50% 50%;
                        animation: rotateGlobe 15s linear infinite;
                      }

                      @keyframes rotateGlobe {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }

                      .sparkle {
                        opacity: 0;
                        animation: sparkleAnim 2s ease-in-out infinite;
                      }

                      @keyframes sparkleAnim {
                        0% { opacity: 0; transform: scale(0.5); }
                        50% { opacity: 1; transform: scale(1); }
                        100% { opacity: 0; transform: scale(0.5); }
                      }
                    `}
                  </style>
                </defs>

                {/* Background grid/dots - subtle */}
                <g opacity="0.05">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`h-grid-${i}`} x1="0" y1={20 + i * 35} x2="400" y2={20 + i * 35} stroke="#1A237E" strokeWidth="0.5"/>
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line key={`v-grid-${i}`} x1={20 + i * 35} y1="0" x2={20 + i * 35} y2="300" stroke="#1A237E" strokeWidth="0.5"/>
                  ))}
                </g>

                {/* Central Growth Graph */}
                <polyline
                  points="50,250 100,180 150,220 200,150 250,200 300,100 350,130"
                  stroke="url(#growth-gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="growth-line"
                />
                {/* Growth indicator nodes */}
                <circle cx="50" cy="250" r="6" fill="#FF6F00" className="node-pulse" style={{ animationDelay: '0s' }}/>
                <circle cx="100" cy="180" r="6" fill="#FF6F00" className="node-pulse" style={{ animationDelay: '0.3s' }}/>
                <circle cx="150" cy="220" r="6" fill="#FF6F00" className="node-pulse" style={{ animationDelay: '0.6s' }}/>
                <circle cx="200" cy="150" r="6" fill="#FF6F00" className="node-pulse" style={{ animationDelay: '0.9s' }}/>
                <circle cx="250" cy="200" r="6" fill="#FF6F00" className="node-pulse" style={{ animationDelay: '1.2s' }}/>
                <circle cx="300" cy="100" r="6" fill="#FF6F00" className="node-pulse" style={{ animationDelay: '1.5s' }}/>
                <circle cx="350" cy="130" r="6" fill="#FF6F00" className="node-pulse" style={{ animationDelay: '1.8s' }}/>

                {/* Innovation Spark/Lightbulb */}
                <g transform="translate(100, 50)">
                  <path d="M10 0 L0 20 L20 20 Z" fill="#A7FFEB" className="sparkle"/>
                  <circle cx="10" cy="10" r="8" fill="url(#innovation-gradient)" opacity="0.7" className="node-pulse"/>
                </g>

                {/* Global Impact / Network */}
                <g transform="translate(300, 250)" className="globe-rotate">
                  <circle cx="0" cy="0" r="40" stroke="#1A237E" strokeWidth="2" fill="none" opacity="0.7"/>
                  <path d="M-35 0 A35 35 0 0 1 35 0" stroke="#1A237E" strokeWidth="1.5" opacity="0.7"/>
                  <path d="M0 -35 A35 35 0 0 1 0 35" stroke="#1A237E" strokeWidth="1.5" opacity="0.7"/>
                </g>

                {/* Company Tagline */}
                <text x="200" y="290" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1A237E" fontFamily="Arial">
                  Grow. Innovate. Impact.
                </text>
              </svg>
            </div>
            {/* Culture and Benefits Text */}
            <div className="space-y-6 text-left">
              <p className="text-lg text-text-body">{t('careersPage.culture.paragraph1')}</p>
              <div className="flex items-start space-x-3">
                <span className="text-accent-teal text-2xl">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">{t('careersPage.culture.benefit1Title')}</h3>
                  <p className="text-text-body">{t('careersPage.culture.benefit1Desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-teal text-2xl">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">{t('careersPage.culture.benefit2Title')}</h3>
                  <p className="text-text-body">{t('careersPage.culture.benefit2Desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-teal text-2xl">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">{t('careersPage.culture.benefit3Title')}</h3>
                  <p className="text-text-body">{t('careersPage.culture.benefit3Desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-teal text-2xl">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">{t('careersPage.culture.benefit4Title')}</h3>
                  <p className="text-text-body">{t('careersPage.culture.benefit4Desc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-teal text-2xl">•</span>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark">{t('careersPage.culture.benefit5Title')}</h3>
                  <p className="text-text-body">{t('careersPage.culture.benefit5Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-12">
          <h2 className="text-4xl font-bold font-display text-text-heading text-center mb-16">{t('careersPage.openingsTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {jobOpenings.map((job, index) => (
              <JobListing key={index} {...job} />
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-neutral-light rounded-xl shadow-inner">
            <p className="text-xl text-text-body mb-6">{t('careersPage.noOpenings')}</p>
            <Link to="/contact" className="btn btn-outline-dark">
              {t('careersPage.contactCta')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
