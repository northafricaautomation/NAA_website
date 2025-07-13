// client/src/pages/AIAndMLEmbedding.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AIAndMLEmbedding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background-page text-text-body font-inter">
      <div className="container mx-auto px-6 py-16 max-w-4xl text-center">
        <h1 className="text-5xl font-bold font-display text-text-heading mb-8">
          {t('aiMlPage.title')}
        </h1>
        <p className="text-lg text-text-body mb-12">
          {t('aiMlPage.subtitle')}
        </p>

        {/* New SVG Animation Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12 flex justify-center items-center">
          <svg
            className="w-full h-auto max-w-lg text-accent-teal"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradient for data flow lines */}
              <linearGradient id="data-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1A237E" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#FF6F00" stopOpacity="0.8"/>
              </linearGradient>

              {/* Define animations */}
              <style type="text/css">
                {`
                  .ai-core-glow {
                    animation: coreGlow 3s infinite alternate;
                  }

                  @keyframes coreGlow {
                    0% { filter: drop-shadow(0 0 8px rgba(26, 35, 126, 0.8)); }
                    100% { filter: drop-shadow(0 0 20px rgba(26, 35, 126, 1)); }
                  }

                  .data-particle {
                    fill: url(#data-flow-gradient);
                    animation: moveParticle 3s linear infinite;
                    transform-box: fill-box;
                    transform-origin: center;
                  }

                  @keyframes moveParticle {
                    0% { transform: translate(0, 0); opacity: 1; }
                    100% { transform: translate(1, 0); opacity: 0; }
                  }

                  .automation-arm-move {
                    transform-origin: 50% 50%;
                    animation: armSwing 4s ease-in-out infinite alternate;
                  }

                  @keyframes armSwing {
                    0% { transform: rotate(0deg); }
                    50% { transform: rotate(15deg); }
                    100% { transform: rotate(0deg); }
                  }

                  .processing-dots {
                    animation: dotPulse 1.5s infinite alternate;
                  }

                  @keyframes dotPulse {
                    0% { opacity: 0.4; }
                    100% { opacity: 1; }
                  }
                `}
              </style>
            </defs>

            {/* Background grid/subtle lines */}
            <g opacity="0.08">
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`h-line-${i}`} x1="0" y1={40 + i * 35} x2="600" y2={40 + i * 35} stroke="#1A237E" strokeWidth="0.5"/>
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <line key={`v-line-${i}`} x1={40 + i * 35} y1="0" x2={40 + i * 35} y2="400" stroke="#1A237E" strokeWidth="0.5"/>
              ))}
            </g>

            {/* Central AI/ML Core */}
            <rect x="225" y="125" width="150" height="150" rx="25" fill="#1A237E" className="ai-core-glow"/>
            <text x="300" y="190" textAnchor="middle" fontSize="30" fill="white" fontFamily="Arial" fontWeight="bold">AI/ML</text>
            <text x="300" y="220" textAnchor="middle" fontSize="14" fill="white" fontFamily="Arial">Processing Unit</text>
            
            {/* Internal processing dots */}
            <circle cx="270" cy="245" r="4" fill="#FF6F00" className="processing-dots" style={{ animationDelay: '0s' }}/>
            <circle cx="300" cy="245" r="4" fill="#FF6F00" className="processing-dots" style={{ animationDelay: '0.5s' }}/>
            <circle cx="330" cy="245" r="4" fill="#FF6F00" className="processing-dots" style={{ animationDelay: '1s' }}/>

            {/* Input Data Source (e.g., Sensors/Data Feeds) */}
            <rect x="50" y="80" width="80" height="60" rx="10" fill="#FF6F00" opacity="0.9"/>
            <text x="90" y="115" textAnchor="middle" fontSize="12" fill="white" fontFamily="Arial" fontWeight="bold">Data Input</text>

            {/* Output Automation Element (e.g., Robotic Arm) */}
            <g transform="translate(450, 200)" className="automation-arm-move">
              <rect x="-20" y="-10" width="40" height="100" rx="5" fill="#004D40" opacity="0.8"/>
              <circle cx="0" cy="-10" r="15" fill="#FF6F00"/>
              <rect x="-10" y="80" width="20" height="30" rx="3" fill="#FF6F00" opacity="0.9"/>
            </g>

            {/* Data Flow Lines & Particles */}
            {/* Input Data Flow to AI Core */}
            <path id="path-input-ai" d="M130 110 Q180 110, 225 150" stroke="url(#data-flow-gradient)" strokeWidth="3" fill="none" className="data-flow-path"/>
            <circle r="5" className="data-particle">
              <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-input-ai" />
              </animateMotion>
            </circle>

            {/* AI Core to Automation Output */}
            <path id="path-ai-output" d="M375 150 Q420 110, 450 110" stroke="url(#data-flow-gradient)" strokeWidth="3" fill="none" className="data-flow-path" style={{ animationDelay: '1.5s' }}/>
            <circle r="5" className="data-particle" style={{ animationDelay: '1.5s' }}>
              <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path-ai-output" />
              </animateMotion>
            </circle>

            {/* Company Branding */}
            <text x="300" y="360" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1A237E" fontFamily="Arial">
              North Africa Automation
            </text>
            <text x="300" y="380" textAnchor="middle" fontSize="14" fill="#263238" fontFamily="Arial">
              AI & ML for Smart Automation
            </text>
          </svg>
        </section>

        <section className="bg-background-section p-12 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold font-display text-primary-dark mb-6">
            {t('aiMlPage.featuresTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-lg text-text-body">
            <div className="flex items-start space-x-3">
              <span className="text-accent-teal text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-primary-dark">{t('aiMlPage.feature1Title')}</h3>
                <p>{t('aiMlPage.feature1Desc')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-teal text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-primary-dark">{t('aiMlPage.feature2Title')}</h3>
                <p>{t('aiMlPage.feature2Desc')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-teal text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-primary-dark">{t('aiMlPage.feature3Title')}</h3>
                <p>{t('aiMlPage.feature3Desc')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-teal text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-primary-dark">{t('aiMlPage.feature4Title')}</h3>
                <p>{t('aiMlPage.feature4Desc')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-teal text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-primary-dark">{t('aiMlPage.feature5Title')}</h3>
                <p>{t('aiMlPage.feature5Desc')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-teal text-2xl">•</span>
              <div>
                <h3 className="font-semibold text-primary-dark">{t('aiMlPage.feature6Title')}</h3>
                <p>{t('aiMlPage.feature6Desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-primary-light to-accent-teal text-white p-12 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold font-display mb-6">
            {t('aiMlPage.benefitsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-white flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <p className="text-lg">{t(`aiMlPage.benefit${num}`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background-section p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold font-display text-primary-dark mb-4">
            {t('aiMlPage.ctaTitle')}
          </h2>
          <p className="text-lg text-text-body mb-8">
            {t('aiMlPage.ctaSubtitle')}
          </p>
          <Link to="/contact" className="btn btn-primary text-lg">
            {t('aiMlPage.ctaButton')}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AIAndMLEmbedding;
