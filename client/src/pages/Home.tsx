// client/src/pages/Home.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.tsx'; // Ensure .tsx extension

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background-page font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 md:py-48 text-center text-text-on-dark"
               style={{ background: `linear-gradient(135deg, #0A1128 0%, #1A237E 60%, #00BFBF 100%)` }}>
        {/* SVG Animation for Hero Section */}
        <div className="absolute inset-0 flex items-center justify-center opacity-70">
          <svg
            className="w-full h-full max-w-5xl"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A7FFEB" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#FF6F00" stopOpacity="0.8"/>
              </linearGradient>
              <style type="text/css">
                {`
                  .data-line-flow {
                    stroke-dasharray: 40 20;
                    stroke-dashoffset: 0;
                    animation: dashFlow 8s linear infinite;
                  }

                  @keyframes dashFlow {
                    to { stroke-dashoffset: -200; }
                  }

                  .sparkle-dot {
                    fill: #A7FFEB;
                    animation: sparkle 2s ease-in-out infinite alternate;
                  }

                  @keyframes sparkle {
                    0% { opacity: 0; transform: scale(0.5); }
                    50% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.5); }
                  }

                  .core-pulse {
                    animation: pulseEffect 3s infinite alternate;
                  }

                  @keyframes pulseEffect {
                    0% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(167, 255, 235, 0.5)); }
                    100% { transform: scale(1.05); filter: drop-shadow(0 0 15px rgba(167, 255, 235, 1)); }
                  }

                  .grid-fade {
                    animation: gridFade 5s infinite alternate;
                  }

                  @keyframes gridFade {
                    0% { opacity: 0.1; }
                    100% { opacity: 0.05; }
                  }
                `}
              </style>
            </defs>

            {/* Subtle Background Grid */}
            <g opacity="0.1" className="grid-fade">
              {Array.from({ length: 15 }).map((_, i) => (
                <line key={`h-grid-${i}`} x1="0" y1={i * 40} x2="1000" y2={i * 40} stroke="#ffffff" strokeWidth="0.5"/>
              ))}
              {Array.from({ length: 25 }).map((_, i) => (
                <line key={`v-grid-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" stroke="#ffffff" strokeWidth="0.5"/>
              ))}
            </g>

            {/* Central Innovation Core */}
            <circle cx="500" cy="300" r="80" fill="#0A1128" className="core-pulse"/>
            <text x="500" y="305" textAnchor="middle" fontSize="30" fill="#A7FFEB" fontFamily="Arial" fontWeight="bold"></text>

            {/* Data Flow Lines */}
            <path d="M100 100 Q300 150 420 250" stroke="url(#hero-gradient)" strokeWidth="4" fill="none" className="data-line-flow"/>
            <path d="M900 100 Q700 150 580 250" stroke="url(#hero-gradient)" strokeWidth="4" fill="none" className="data-line-flow" style={{ animationDelay: '1s' }}/>
            <path d="M100 500 Q300 450 420 350" stroke="url(#hero-gradient)" strokeWidth="4" fill="none" className="data-line-flow" style={{ animationDelay: '2s' }}/>
            <path d="M900 500 Q700 450 580 350" stroke="url(#hero-gradient)" strokeWidth="4" fill="none" className="data-line-flow" style={{ animationDelay: '3s' }}/>

            {/* Sparkle Dots along paths */}
            <circle cx="150" cy="120" r="5" className="sparkle-dot" style={{ animationDelay: '0.5s' }}/>
            <circle cx="850" cy="120" r="5" className="sparkle-dot" style={{ animationDelay: '1.5s' }}/>
            <circle cx="150" cy="480" r="5" className="sparkle-dot" style={{ animationDelay: '2.5s' }}/>
            <circle cx="850" cy="480" r="5" className="sparkle-dot" style={{ animationDelay: '3.5s' }}/>

            {/* Abstract North Africa Outline (very subtle) */}
            <path d="M300 400 L350 420 L400 410 L450 430 L500 420 L550 400 L500 380 L450 390 L400 370 L350 380 Z"
                  fill="#00BFBF" opacity="0.1" stroke="#00BFBF" strokeWidth="1"/>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold font-display leading-tight mb-6 animate-slide-in-down !text-white"> {/* Changed text color to white */}
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto px-4 opacity-90 animate-slide-in-up mb-12"> {/* Increased mb-8 to mb-12 */}
            {t('home.hero.subtitle')}
          </p>
          <Link to="/contact" className="btn btn-primary mt-12 text-lg animate-fade-in"> {/* Changed mt-20 to mt-12, as mb-12 on p tag will create enough space */}
            {t('home.hero.cta')}
          </Link>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-background-section">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-4xl font-bold font-display text-text-heading mb-16">
            {t('home.homeServicesSection.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Use ServiceCard for featured services */}
            <ServiceCard icon="🤖" title={t('services.item2')} description={t('services.desc2')} />
            <ServiceCard icon="⚙️" title={t('services.item5')} description={t('services.desc5')} />
            <ServiceCard icon="📊" title={t('services.item4')} description={t('services.desc4')} />
          </div>
          <Link to="/services" className="btn btn-outline-dark mt-16">
            {t('home.homeServicesSection.viewAll')}
          </Link>
        </div>
      </section>

      {/* About Us Teaser / Value Proposition */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-6 md:flex items-center gap-12 max-w-6xl">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold font-display text-text-heading mb-6">{t('home.about.title')}</h2>
            <p className="text-lg text-text-body leading-relaxed mb-6">
              {t('home.about.paragraph1')}
            </p>
            <p className="text-lg text-text-body leading-relaxed mb-8">
              {t('home.about.paragraph2')}
            </p>
            <Link to="/about" className="btn btn-primary">
              {t('home.about.learnMore')}
            </Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            {/* NEW SVG Animation for About Us Teaser - Adjusted to fit better */}
            <svg
              className="w-full h-full" /* Use h-full to fill parent height */
              viewBox="0 0 400 300" /* Keep viewBox as 400x300, adjust content within */
              preserveAspectRatio="xMidYMid meet" /* Ensures scaling without distortion */
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1A237E" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#00BFBF" stopOpacity="0.8"/>
                </linearGradient>
                <style type="text/css">
                  {`
                    .gear-spin {
                      transform-origin: center center;
                      animation: spin 10s linear infinite;
                    }

                    @keyframes spin {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }

                    .light-pulse {
                      animation: lightPulse 2s infinite alternate;
                    }

                    @keyframes lightPulse {
                      0% { opacity: 0.7; }
                      100% { opacity: 1; }
                    }

                    .data-flow-path-about {
                      stroke-dasharray: 20 10;
                      stroke-dashoffset: 0;
                      animation: pathFlowAbout 4s linear infinite;
                    }

                    @keyframes pathFlowAbout {
                      to { stroke-dashoffset: -100; }
                    }

                    .data-point-move-about {
                      animation: movePointAbout 4s linear infinite;
                    }

                    @keyframes movePointAbout {
                      0% { transform: translate(0, 0); opacity: 1; }
                      100% { transform: translate(1, 0); opacity: 0; }
                    }
                  `}
                </style>
                {/* Arrowhead Marker (if still needed) */}
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="url(#about-gradient)" />
                </marker>
              </defs>

              {/* Background grid/dots - subtle */}
              <g opacity="0.05">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`h-grid-about-${i}`} x1="0" y1={20 + i * 35} x2="400" y2={20 + i * 35} stroke="#1A237E" strokeWidth="0.5"/>
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`v-grid-about-${i}`} x1={20 + i * 35} y1="0" x2={20 + i * 35} y2="300" stroke="#1A237E" strokeWidth="0.5"/>
                ))}
              </g>

              {/* Central Automation Gear - Adjusted position and size for better fit */}
              <g transform="translate(100, 100) scale(0.5)" className="gear-spin"> {/* Moved left, slightly larger */}
                <circle cx="0" cy="0" r="40" fill="#d4660cff"/>
                <path d="M-12 40 L-20 48 L-28 40 L-32 32 L-24 24 L-32 16 L-28 8 L-20 0 L-12 -8 L-20 -16 L-28 -24 L-32 -32 L-24 -40 L-32 -48 L-28 -56 L-20 -64 L-12 -72 L-4 -80 L4 -72 L12 -64 L20 -56 L28 -48 L32 -40 L24 -32 L32 -24 L28 -16 L20 -8 L12 0 L20 8 L28 16 L32 24 L24 32 L32 40 L28 48 L20 56 L12 64 L4 72 L-4 80 Z" fill="#1A237E"/>
                <circle cx="0" cy="0" r="15" fill="white"/>
              </g>

              {/* Data Flow Lines representing efficiency/processes - Adjusted paths */}
              <path id="path-about-1" d="M50 100 Q120 120 150 150" stroke="url(#about-gradient)" strokeWidth="3" fill="none" className="data-flow-path-about"/>
              <circle r="5" fill="url(#about-gradient)" className="data-point-move-about">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#path-about-1" />
                </animateMotion>
              </circle>

              <path id="path-about-2" d="M350 100 Q280 120 250 150" stroke="url(#about-gradient)" strokeWidth="3" fill="none" className="data-flow-path-about" style={{ animationDelay: '1s' }}/>
              <circle r="5" fill="url(#about-gradient)" className="data-point-move-about" style={{ animationDelay: '1s' }}>
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#path-about-2" />
                </animateMotion>
              </circle>

              <path id="path-about-3" d="M50 200 Q120 180 150 150" stroke="url(#about-gradient)" strokeWidth="3" fill="none" className="data-flow-path-about" style={{ animationDelay: '2s' }}/>
              <circle r="5" fill="url(#about-gradient)" className="data-point-move-about" style={{ animationDelay: '2s' }}>
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#path-about-3" />
                </animateMotion>
              </circle>

              <path id="path-about-4" d="M350 200 Q280 180 250 150" stroke="url(#about-gradient)" strokeWidth="3" fill="none" className="data-flow-path-about" style={{ animationDelay: '3s' }}/>
              <circle r="5" fill="url(#about-gradient)" className="data-point-move-about" style={{ animationDelay: '3s' }}>
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#path-about-4" />
                </animateMotion>
              </circle>

              {/* Innovation Spark (Lightbulb inspired) - Adjusted position */}
              <g transform="translate(250, 40) scale(0.6)" className="light-pulse"> {/* Moved left to align with data flow */}
                <path d="M20 0 C10 0, 0 10, 0 20 C0 30, 10 40, 20 40 C30 40, 40 30, 40 20 C40 10, 30 0, 20 0 Z" fill="#4cbf00ff"/>
                <rect x="18" y="40" width="4" height="10" fill="#bf0000ff"/>
                <rect x="15" y="50" width="10" height="3" fill="#aa10daff"/>
              </g>

              {/* Text - Adjusted position */}
              <text x="200" y="280" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1A237E" fontFamily="Arial">
                Precision. Innovation. Growth.
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Call to Action - Join Our Team */}
      <section className="py-20 bg-primary-dark text-text-on-dark text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-4xl font-bold font-display mb-6">{t('home.cta.title')}</h3>
          <p className="text-lg mb-8 opacity-90">{t('home.cta.subtitle')}</p>
          <Link to="/careers" className="btn btn-secondary !bg-text-on-dark !text-primary-dark hover:!bg-opacity-90">
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
