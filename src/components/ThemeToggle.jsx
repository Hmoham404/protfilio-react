import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button className="theme-toggle" onClick={toggleDarkMode}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;