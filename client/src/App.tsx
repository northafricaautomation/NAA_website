// client/src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.tsx'; // Ensure .tsx extension
import Footer from './components/Footer.tsx'; // Ensure .tsx extension




const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This is where the content of your specific pages (Home, Services, etc.) will render */}
      </main>
      <Footer />
    </div>
  );
};

export default App;