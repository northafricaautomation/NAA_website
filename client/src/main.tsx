// client/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n'; // IMPORTANT: Initialize i18next first
import './index.css'; // Global CSS
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes.tsx'; // Import your main routing component

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRoutes /> {/* This will render your entire application layout and pages */}
    </Router>
  </React.StrictMode>,
);