
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

const mainLinks = [
  { name: 'Home', path: '/' },
  { name: 'Campus Ambassador', path: '/ambassador' },
  { name: 'About Us', path: '/about' },
];

const dropdownLinks = [
  { name: 'For Students', path: '/students' },
  { name: 'For Colleges', path: '/colleges' },
  { name: 'For Companies', path: '/companies' },
];


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
    }, 200);
  };


  const linkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClass = "text-white bg-white/10";
  const inactiveLinkClass = "text-gray-400 hover:text-white hover:bg-white/5";
  
  const dropdownLinkClass = "block px-4 py-2 text-sm text-gray-300 hover:bg-dark-card hover:text-white w-full text-left";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-dark-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 text-white text-2xl font-bold">
              Unii.club
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
                >
                  {link.name}
                </NavLink>
              ))}
              {/* Dropdown */}
              <div className="relative" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                <button className={`${linkClass} ${inactiveLinkClass} flex items-center`}>
                  Join Us
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 rounded-md shadow-lg bg-dark-bg/80 backdrop-blur-lg ring-1 ring-dark-border ring-opacity-5 overflow-hidden">
                    <div className="py-1">
                      {dropdownLinks.map(link => (
                         <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsDropdownOpen(false)}
                            className={({ isActive }) => `${dropdownLinkClass} ${isActive ? 'bg-brand-purple/20' : ''}`}
                          >
                           {link.name}
                         </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button className="text-gray-300 hover:bg-dark-card hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log In</button>
            <button className="bg-brand-purple text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-violet-500 transition-transform transform hover:scale-105">Sign Up for Free</button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-dark-card inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-dark-bg/80 backdrop-blur-lg z-40" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block ${linkClass} text-base ${isActive ? activeLinkClass : inactiveLinkClass}`}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2 mt-2 border-t border-dark-border">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Join Us</p>
                <div className="mt-1 space-y-1">
                {dropdownLinks.map(link => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => `block ${linkClass} text-base ${isActive ? activeLinkClass : inactiveLinkClass}`}
                    >
                        {link.name}
                    </NavLink>
                ))}
                </div>
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700 px-2 space-y-2">
            //  <button className="w-full text-left text-gray-300 hover:bg-dark-card hover:text-white block px-3 py-2 rounded-md text-base font-medium">Log In</button>
            <button className="w-full text-left bg-brand-purple text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-violet-500">Sign Up for Free</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
