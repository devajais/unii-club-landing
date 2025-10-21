
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ForStudentsPage from './pages/ForStudentsPage';
import CampusAmbassadorPage from './pages/CampusAmbassadorPage';
import ForCollegesPage from './pages/ForCollegesPage';
import ForCompaniesPage from './pages/ForCompaniesPage';
import AboutUsPage from './pages/AboutUsPage';

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<ForStudentsPage />} />
            <Route path="/ambassador" element={<CampusAmbassadorPage />} />
            <Route path="/colleges" element={<ForCollegesPage />} />
            <Route path="/companies" element={<ForCompaniesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {/* Add social links here if needed */}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; {new Date().getFullYear()} Unii.club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default App;
