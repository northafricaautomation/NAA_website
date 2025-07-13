// client/src/components/Header.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    console.log('Attempting to change language to:', lng); // Keep for debugging
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-primary-dark text-text-on-dark shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-display tracking-wide text-white hover:text-secondary-action transition-colors">
          <span className="text-accent-teal">NAA</span> Automation
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'text-secondary-action border-b-2 border-secondary-action' : ''}`}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'text-secondary-action border-b-2 border-secondary-action' : ''}`}>
            {t('nav.services')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'text-secondary-action border-b-2 border-secondary-action' : ''}`}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/careers" className={({ isActive }) => `nav-link ${isActive ? 'text-secondary-action border-b-2 border-secondary-action' : ''}`}>
            {t('nav.careers')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'text-secondary-action border-b-2 border-secondary-action' : ''}`}>
            {t('nav.contact')}
          </NavLink>
        </nav>

        {/* Language Switcher & Auth Buttons */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <button
              onClick={() => changeLanguage('en')}
              className={`nav-lang-btn ${i18n.language === 'en' ? 'bg-secondary-action' : 'hover:bg-primary-dark/80'}`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('fr')}
              className={`nav-lang-btn ${i18n.language === 'fr' ? 'bg-secondary-action' : 'hover:bg-primary-dark/80'}`}
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('ar')}
              className={`nav-lang-btn ${i18n.language === 'ar' ? 'bg-secondary-action' : 'hover:bg-primary-dark/80'}`}
            >
              AR
            </button>
          </div>
          <Link to="/login" className="btn btn-secondary !bg-transparent !text-secondary-action hover:!bg-secondary-action hover:!text-white">
            {t('nav.login')}
          </Link>
          <Link to="/register" className="btn btn-primary">
            {t('nav.register')}
          </Link>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-text-on-dark text-3xl">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;