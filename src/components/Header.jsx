import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="logo-link">
              <span className="logo-text">ML</span>
              <div className="logo-badge">
                <span className="badge-dot embedded"></span>
                <span className="badge-dot web"></span>
              </div>
            </a>
          </motion.div>

          {/* Navigation Desktop */}
          <div className="nav-desktop">
            <ul className="nav-links">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Changer le thème"
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>

            <motion.button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </motion.button>
          </div>
        </nav>

        {/* Navigation Mobile */}
        <motion.div 
          className="nav-mobile"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(248, 250, 252, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--gray-200);
          padding: 1rem 0;
        }
        
        .dark-mode .header {
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid var(--gray-300);
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        
        .logo-text {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .logo-badge {
          display: flex;
          gap: 4px;
        }
        
        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .badge-dot.embedded {
          background: #6366F1;
        }
        
        .badge-dot.web {
          background: #8B5CF6;
        }
        
        .nav-desktop .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        
        .nav-link {
          color: var(--gray-700);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          padding: 0.5rem 0;
          transition: color var(--transition-fast);
        }
        
        .nav-link:hover {
          color: var(--primary);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, var(--primary), var(--secondary));
          transition: width var(--transition-normal);
          border-radius: 1px;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .theme-toggle {
          background: none;
          border: none;
          color: var(--gray-700);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: background-color var(--transition-fast);
          width: 40px;
          height: 40px;
        }
        
        .theme-toggle:hover {
          background-color: var(--gray-200);
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--gray-700);
          cursor: pointer;
          padding: 0.5rem;
          font-size: 1.5rem;
        }
        
        .nav-mobile {
          overflow: hidden;
        }
        
        .mobile-menu {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-link {
          color: var(--gray-700);
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--gray-200);
          transition: color var(--transition-fast);
        }
        
        .mobile-link:hover {
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;