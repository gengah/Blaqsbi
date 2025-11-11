import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUsers, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Layout.css';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: '/', icon: FaHome, label: 'Dashboard' },
    { path: '/huddles', icon: FaUsers, label: 'Huddles' },
    { path: '/marketplace', icon: FaShoppingCart, label: 'Marketplace' },
    { path: '/profile', icon: FaUser, label: 'Profile' },
  ];

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Blaqsbi</Link>
        </div>
        <div className="navbar-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <motion.div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-menu-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <item.icon />
            <span>{item.label}</span>
          </Link>
        ))}
      </motion.div>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;