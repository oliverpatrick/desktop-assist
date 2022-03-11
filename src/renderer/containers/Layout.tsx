import React from 'react';
// import { AppRoutes as RoutedComponent } from './routes/Routes';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard/Dashboard';

import Sidebar from '../components/Sidebar/Sidebar';
import TimerPage from './TimerPage';

export const Layout: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-row w-full h-screen">
        <Sidebar />
        <div className="bg-slate-50 flex flex-column w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timer" element={<TimerPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
