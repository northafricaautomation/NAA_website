// client/src/pages/Services.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.tsx'; // Ensure .tsx extension

const Services: React.FC = () => {
  const { t } = useTranslation();

  // Define all services individually first for easier reordering
  const service1 = { icon: "📐", title: t('services.item1'), description: t('services.desc1') };
  const service2 = { icon: "🧠", title: t('services.item2'), description: t('services.desc2') };
  const service3 = { icon: "🤖", title: t('services.item3'), description: t('services.desc3') };
  const service4 = { icon: "📊", title: t('services.item4'), description: t('services.desc4') };
  const service5 = { icon: "⚙️", title: t('services.item5'), description: t('services.desc5') };
  const service6 = { icon: "📡", title: t('services.item6'), description: t('services.desc6') };
  const service7 = { icon: "💡", title: t('services.item7'), description: t('services.desc7') };
  const service8 = { icon: "📈", title: t('services.item8'), description: t('services.desc8') }; // Assuming item8 exists

  // Reorder the servicesList array as requested
  const servicesList = [
    service1, // Advanced Automation System Design & Integration
    service7, // AI & Machine Learning Integration in Automatism
    service4, // Data Analytics & Predictive Insights
    service2, // Intelligent Robotics Implementation (rest of original order)
    service3, // PLC/SCADA Development & Process Optimization
    service5, // Industrial IoT & Digital Transformation Solutions
    service6, // Preventive & Predictive Maintenance
    service8, // Production Enhancement & Efficiency
  ];

  return (
    <div className="bg-background-page py-16 text-text-body font-inter">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold font-display text-text-heading text-center mb-8">
          {t('servicesPage.title')}
        </h1>
        <p className="text-lg text-text-body text-center mb-12 max-w-3xl mx-auto">
          {t('servicesPage.subtitle')}
        </p>

        {/* NEW SVG Animation Section for Services Overview - More Service-Specific */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12 flex justify-center items-center">
          <svg
            className="w-full h-auto max-w-2xl text-primary-dark"
            viewBox="0 0 800 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="service-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1A237E" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#FF6F00" stopOpacity="0.9"/>
              </linearGradient>
              <style type="text/css">
                {`
                  .central-core-glow {
                    animation: coreGlow 3s infinite alternate;
                  }

                  @keyframes coreGlow {
                    0% { filter: drop-shadow(0 0 8px rgba(26, 35, 126, 0.7)); }
                    100% { filter: drop-shadow(0 0 20px rgba(26, 35, 126, 1)); }
                  }

                  .data-path-flow {
                    stroke-dasharray: 20 10;
                    stroke-dashoffset: 0;
                    animation: pathFlow 4s linear infinite;
                  }

                  @keyframes pathFlow {
                    to { stroke-dashoffset: -100; }
                  }

                  .service-icon-pulse {
                    animation: iconPulse 2s infinite alternate;
                  }

                  @keyframes iconPulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(1.1); opacity: 1; }
                  }

                  .gear-rotate {
                    transform-origin: center center;
                    animation: rotateGear 10s linear infinite;
                  }

                  @keyframes rotateGear {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }

                  .brain-pulse {
                    animation: brainPulseAnim 2s infinite alternate;
                  }

                  @keyframes brainPulseAnim {
                    0% { fill-opacity: 0.7; }
                    100% { fill-opacity: 1; }
                  }

                  .robot-arm-move {
                    transform-origin: 50% 50%;
                    animation: robotArmSwing 3s ease-in-out infinite alternate;
                  }

                  @keyframes robotArmSwing {
                    0% { transform: rotate(0deg); }
                    50% { transform: rotate(10deg); }
                    100% { transform: rotate(0deg); }
                  }
                `}
              </style>
            </defs>

            {/* Background grid/dots - subtle */}
            <g opacity="0.05">
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`h-grid-${i}`} x1="0" y1={20 + i * 40} x2="800" y2={20 + i * 40} stroke="#1A237E" strokeWidth="0.5"/>
              ))}
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`v-grid-${i}`} x1={20 + i * 40} y1="0" x2={20 + i * 40} y2="450" stroke="#1A237E" strokeWidth="0.5"/>
              ))}
            </g>

            {/* Central Hub - North Africa Automation */}
            <circle cx="400" cy="225" r="60" fill="#1A237E" className="central-core-glow"/>
            <text x="400" y="220" textAnchor="middle" fontSize="24" fill="white" fontFamily="Arial" fontWeight="bold">NAA</text>
            <text x="400" y="245" textAnchor="middle" fontSize="12" fill="white" fontFamily="Arial">Services Hub</text>

            {/* Service Branches and Icons with more specific visuals */}

            {/* 1. Advanced Automation System Design & Integration (Top-Left) */}
            <path d="M400 225 Q300 100 150 80" stroke="url(#service-gradient)" strokeWidth="3" fill="none" className="data-path-flow"/>
            <g transform="translate(135, 65)">
              <circle cx="15" cy="15" r="15" fill="#FF6F00" className="service-icon-pulse"/>
              <path d="M15 0 L18 10 L28 10 L20 18 L23 28 L15 23 L7 28 L10 18 L2 10 L12 10 Z" fill="white"/> {/* Star for integration */}
            </g>
            <text x="150" y="105" textAnchor="middle" fontSize="10" fill="#1A237E" fontFamily="Arial">Design & Integration</text>

            {/* 2. AI & Machine Learning Integration (Top-Right) */}
            <path d="M400 225 Q500 100 650 80" stroke="url(#service-gradient)" strokeWidth="3" fill="none" className="data-path-flow" style={{ animationDelay: '0.5s' }}/>
            <g transform="translate(635, 65)">
              <circle cx="15" cy="15" r="15" fill="#FF6F00" className="service-icon-pulse"/>
              <path d="M15 5 C10 5, 5 10, 5 15 C5 20, 10 25, 15 25 C20 25, 25 20, 25 15 C25 10, 20 5, 15 5 Z" stroke="white" strokeWidth="1.5" fill="none" className="brain-pulse"/> {/* Abstract Brain */}
              <circle cx="10" cy="10" r="2" fill="white"/>
              <circle cx="20" cy="10" r="2" fill="white"/>
              <circle cx="15" cy="20" r="2" fill="white"/>
            </g>
            <text x="650" y="105" textAnchor="middle" fontSize="10" fill="#1A237E" fontFamily="Arial">AI & ML</text>

            {/* 3. Intelligent Robotics Implementation (Left) */}
            <path d="M400 225 Q200 225 80 225" stroke="url(#service-gradient)" strokeWidth="3" fill="none" className="data-path-flow" style={{ animationDelay: '1s' }}/>
            <g transform="translate(65, 210)">
              <circle cx="15" cy="15" r="15" fill="#FF6F00" className="service-icon-pulse"/>
              <path d="M5 15 L10 5 L20 5 L25 15 L20 25 L10 25 Z" fill="white"/> {/* Stylized Robot Head */}
              <circle cx="10" cy="10" r="2" fill="#1A237E"/>
              <circle cx="20" cy="10" r="2" fill="#1A237E"/>
            </g>
            <text x="80" y="250" textAnchor="middle" fontSize="10" fill="#1A237E" fontFamily="Arial">Robotics</text>

            {/* 4. Industrial IoT & Digital Transformation (Right) */}
            <path d="M400 225 Q600 225 720 225" stroke="url(#service-gradient)" strokeWidth="3" fill="none" className="data-path-flow" style={{ animationDelay: '1.5s' }}/>
            <g transform="translate(705, 210)">
              <circle cx="15" cy="15" r="15" fill="#FF6F00" className="service-icon-pulse"/>
              <path d="M5 15 H25 M15 5 V25 M5 5 L25 25 M5 25 L25 5" stroke="white" strokeWidth="1.5"/> {/* Connected dots/network */}
            </g>
            <text x="720" y="250" textAnchor="middle" fontSize="10" fill="#1A237E" fontFamily="Arial">IIoT</text>

            {/* 5. PLC/SCADA Development & Process Optimization (Bottom-Left) */}
            <path d="M400 225 Q300 350 150 380" stroke="url(#service-gradient)" strokeWidth="3" fill="none" className="data-path-flow" style={{ animationDelay: '2s' }}/>
            <g transform="translate(135, 365)">
              <circle cx="15" cy="15" r="15" fill="#FF6F00" className="service-icon-pulse"/>
              <rect x="8" y="8" width="14" height="14" rx="2" fill="white"/> {/* PLC/Control Panel */}
              <circle cx="11" cy="11" r="1.5" fill="#1A237E"/>
              <circle cx="19" cy="11" r="1.5" fill="#1A237E"/>
              <circle cx="11" cy="19" r="1.5" fill="#1A237E"/>
              <circle cx="19" cy="19" r="1.5" fill="#1A237E"/>
            </g>
            <text x="150" y="405" textAnchor="middle" fontSize="10" fill="#1A237E" fontFamily="Arial">PLC/SCADA</text>

            {/* 6. Data Analytics & Predictive Insights (Bottom-Right) */}
            <path d="M400 225 Q500 350 650 380" stroke="url(#service-gradient)" strokeWidth="3" fill="none" className="data-path-flow" style={{ animationDelay: '2.5s' }}/>
            <g transform="translate(635, 365)">
              <circle cx="15" cy="15" r="15" fill="#FF6F00" className="service-icon-pulse"/>
              <path d="M5 25 L10 15 L15 20 L20 10 L25 25 Z" stroke="white" strokeWidth="1.5" fill="none"/> {/* Line graph */}
              <circle cx="20" cy="10" r="2" fill="white"/> {/* Data point */}
            </g>
            <text x="650" y="405" textAnchor="middle" fontSize="10" fill="#1A237E" fontFamily="Arial">Data Analytics</text>

            {/* Company Tagline */}
            <text x="400" y="420" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1A237E" fontFamily="Arial">
              Your Partner in Industrial Transformation
            </text>
          </svg>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <section className="mt-20 text-center bg-background-section p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold font-display text-text-heading mb-6">{t('servicesPage.contactCtaTitle')}</h2>
          <p className="text-lg text-text-body mb-8">{t('servicesPage.contactCtaSubtitle')}</p>
          <Link to="/contact" className="btn btn-primary text-lg">
            {t('servicesPage.contactCtaButton')}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Services;
