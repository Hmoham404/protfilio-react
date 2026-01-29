import React from 'react';
import { motion } from 'framer-motion';

const FloatingTech = () => {
  const techItems = [
    { name: 'C++', delay: 0, duration: 20 },
    { name: 'Qt', delay: 5, duration: 25 },
    { name: 'Laravel', delay: 10, duration: 22 },
    { name: 'Django', delay: 15, duration: 24 },
    { name: 'Python', delay: 2, duration: 26 },
    { name: 'PHP', delay: 7, duration: 23 },
    { name: 'MySQL', delay: 12, duration: 21 },
    { name: 'Linux', delay: 18, duration: 28 },
  ];

  return (
    <div className="floating-tech">
      {techItems.map((tech, index) => (
        <motion.div
          key={index}
          className="floating-item"
          style={{
            left: `${(index * 12.5) % 100}%`,
            top: `${(index * 7) % 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(index) * 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: tech.duration,
            delay: tech.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="floating-text">{tech.name}</span>
        </motion.div>
      ))}
      <style jsx>{`
        .floating-tech {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }
        
        .floating-item {
          position: absolute;
          padding: 0.75rem 1.5rem;
          background: rgba(99, 102, 241, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--primary);
          opacity: 0.6;
        }
        
        .floating-item:nth-child(even) {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.2);
          color: var(--secondary);
        }
        
        @media (max-width: 768px) {
          .floating-tech {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingTech;