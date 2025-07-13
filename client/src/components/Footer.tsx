// client/src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-dark text-text-on-dark py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold font-display text-accent-teal mb-4">North Africa Automation</h3>
          <p className="text-sm leading-relaxed mb-4">
            {t('footer.tagline')}
          </p>
          <p className="text-sm">
            Email: <a href="mailto:benmahrezbelaid@gmail.com" className="hover:text-secondary-action">benmahrezbelaid@gmail.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+1213553431748" className="hover:text-secondary-action">+1 (213) 553 431-748</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-text-on-dark mb-4">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-secondary-action">{t('nav.about')}</Link></li>
            <li><Link to="/services" className="hover:text-secondary-action">{t('nav.services')}</Link></li>
            <li><Link to="/careers" className="hover:text-secondary-action">{t('nav.careers')}</Link></li>
            <li><Link to="/contact" className="hover:text-secondary-action">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        {/* Our Services (Example) */}
        <div>
          <h4 className="text-lg font-semibold text-text-on-dark mb-4">{t('footer.ourServices')}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/ai-ml-embedding" className="hover:text-secondary-action">{t('services.item1')}</Link></li>
            <li><Link to="/services/robotics" className="hover:text-secondary-action">{t('services.item2')}</Link></li>
            <li><Link to="/services/plc-scada" className="hover:text-secondary-action">{t('services.item3')}</Link></li>
            {/* Add more service links */}
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-text-on-dark mb-4">{t('footer.connectWithUs')}</h4>
          <div className="flex space-x-4 mb-4">
            {/* Replace with actual icons (e.g., Font Awesome, SVG) */}
            <a href="#" className="text-xl hover:text-secondary-action transition-colors">📘</a> {/* Facebook */}
            <a href="#" className="text-xl hover:text-secondary-action transition-colors">🔗</a> {/* LinkedIn */}
            <a href="#" className="text-xl hover:text-secondary-action transition-colors">🐦</a> {/* Twitter */}
          </div>
          {/* Newsletter Signup (Optional) */}
          {/* <h4 className="text-lg font-semibold text-text-on-dark mb-2">Newsletter</h4>
          <form className="flex">
            <input type="email" placeholder="Your Email" className="p-2 rounded-l-md text-neutral-dark text-sm" />
            <button type="submit" className="bg-secondary-action text-white p-2 rounded-r-md text-sm hover:bg-opacity-90">Subscribe</button>
          </form> */}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm opacity-80">
        <p>&copy; {new Date().getFullYear()} North Africa Automation. {t('footer.allRightsReserved')}</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy-policy" className="hover:text-secondary-action">{t('footer.privacyPolicy')}</Link>
          <Link to="/terms-of-service" className="hover:text-secondary-action">{t('footer.termsOfService')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;