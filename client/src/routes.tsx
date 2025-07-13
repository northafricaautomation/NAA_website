// client/src/routes.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import AIAndMLEmbedding from './pages/AIAndMLEmbedding.tsx';
import Careers from './pages/Careers.tsx';
import Contact from './pages/Contact.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Dashboard from './pages/Dashboard.tsx'; // Import the new Dashboard component

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/ai-ml-embedding" element={<AIAndMLEmbedding />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}

        <Route path="*" element={
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-xl text-neutral-dark">Page Not Found</p>
            <Link to="/" className="btn btn-primary mt-8">Go to Home</Link>
          </div>
        } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
