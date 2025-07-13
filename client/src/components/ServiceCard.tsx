// client/src/components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  icon: string; // Emoji or an icon class (e.g., 'fas fa-robot')
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-background-section p-8 rounded-xl shadow-lg border border-border-light
                    flex flex-col items-center text-center
                    transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="text-6xl mb-6 text-secondary-action animate-fade-in">
        {icon}
      </div>
      <h3 className="text-2xl font-bold font-display text-text-heading mb-3">
        {title}
      </h3>
      <p className="text-text-body text-md leading-relaxed opacity-90">
        {description}
      </p>
      {/* Optional: Add a 'Learn More' button */}
      {/* <button className="mt-6 text-sm text-accent-teal hover:underline">Learn More</button> */}
    </div>
  );
};

export default ServiceCard;