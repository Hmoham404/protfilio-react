import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ name }) => {
  // Définir les couleurs en fonction de la technologie
  const getTechColor = (techName) => {
    const tech = techName.toLowerCase();
    
    if (tech.includes('laravel') || tech.includes('php')) return '#FF2D20';
    if (tech.includes('django') || tech.includes('python')) return '#092E20';
    if (tech.includes('c++') || tech.includes('qt')) return '#00599C';
    if (tech.includes('mysql') || tech.includes('sql')) return '#4479A1';
    if (tech.includes('javascript') || tech.includes('html') || tech.includes('css')) return '#F7DF1E';
    if (tech.includes('embedded') || tech.includes('linux')) return '#41CD52';
    if (tech.includes('tcp') || tech.includes('rfid')) return '#1E88E5';
    if (tech.includes('signal') || tech.includes('matlab')) return '#9C27B0';
    if (tech.includes('nilm') || tech.includes('domotique')) return '#FF9800';
    
    return '#6B7280';
  };

  const color = getTechColor(name);
  const isLight = ['#F7DF1E', '#41CD52', '#FF9800'].includes(color);

  return (
    <motion.span
      className="tech-badge"
      style={{
        backgroundColor: `${color}15`,
        borderColor: `${color}30`,
        color: isLight ? '#000' : color
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;