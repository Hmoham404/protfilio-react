import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      category: "Langages de Programmation",
      skills: [
        { name: "C++", level: 95, icon: "🚀", color: "#00599C" },
        { name: "Python", level: 85, icon: "🐍", color: "#3776AB" },
        { name: "PHP", level: 90, icon: "🐘", color: "#777BB4" },
        { name: "JavaScript", level: 80, icon: "⚡", color: "#F7DF1E" },
        { name: "HTML/CSS", level: 95, icon: "🎨", color: "#E34F26" },
        { name: "VHDL", level: 70, icon: "🔌", color: "#543978" },
        { name: "MATLAB", level: 75, icon: "📊", color: "#0076A8" },
      ]
    },
    {
      category: "Frameworks & Bibliothèques",
      skills: [
        { name: "Laravel", level: 90, icon: "🔥", color: "#FF2D20" },
        { name: "Django", level: 85, icon: "🐍", color: "#092E20" },
        { name: "Qt", level: 90, icon: "🎯", color: "#41CD52" },
        { name: "Bootstrap", level: 85, icon: "💎", color: "#7952B3" },
        { name: "PyQt", level: 75, icon: "🐍", color: "#41CD52" },
      ]
    },
    {
      category: "Systèmes & Outils",
      skills: [
        { name: "Embedded Linux", level: 85, icon: "🐧", color: "#FCC624" },
        { name: "Docker", level: 70, icon: "🐳", color: "#2496ED" },
        { name: "Git/GitLab", level: 90, icon: "📦", color: "#F05032" },
        { name: "MySQL", level: 85, icon: "🗄️", color: "#4479A1" },
        { name: "SQLite", level: 90, icon: "💾", color: "#003B57" },
        { name: "TCP/IP", level: 85, icon: "🌐", color: "#1E88E5" },
        { name: "RFID", level: 80, icon: "📡", color: "#FF9800" },
      ]
    },
    {
      category: "Matériel & Électronique",
      skills: [
        { name: "Arduino", level: 85, icon: "🔋", color: "#00979D" },
        { name: "Raspberry Pi", level: 80, icon: "🍓", color: "#C51A4A" },
        { name: "STM32", level: 75, icon: "⚡", color: "#03234B" },
        { name: "ESP32", level: 80, icon: "📶", color: "#E7352C" },
        { name: "FPGA", level: 70, icon: "🔧", color: "#7B42BC" },
        { name: "PCB Design", level: 65, icon: "📐", color: "#4CAF50" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Compétences & Technologies</h2>
            <p className="section-subtitle">
              Expertise technique complète des systèmes embarqués au développement web
            </p>
          </div>

          <div className="skills-container">
            {skillsData.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                <div className="category-header">
                  <h3>{category.category}</h3>
                </div>
                
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-card"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    >
                      <div className="skill-header">
                        <div 
                          className="skill-icon"
                          style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      
                      <div className="skill-tags">
                        <span className="skill-tag">Expert</span>
                        <span className="skill-tag">Professionnel</span>
                        {skill.level > 85 && (
                          <span className="skill-tag highlight">Maitrise</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies en continu */}
          <motion.div 
            className="tech-marquee-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="tech-marquee">
              <div className="tech-marquee-content">
                {[
                  "C++", "Qt", "Embedded Linux", "STM32", "TCP/IP", "RFID",
                  "Laravel", "PHP", "Django", "Python", "JavaScript", "MySQL",
                  "Arduino", "Raspberry Pi", "ESP32", "Git", "Docker", "VHDL"
                ].map((tech, index) => (
                  <span key={index} className="tech-marquee-item">
                    {tech}
                  </span>
                ))}
                {[
                  "C++", "Qt", "Embedded Linux", "STM32", "TCP/IP", "RFID",
                  "Laravel", "PHP", "Django", "Python", "JavaScript", "MySQL",
                  "Arduino", "Raspberry Pi", "ESP32", "Git", "Docker", "VHDL"
                ].map((tech, index) => (
                  <span key={`dup-${index}`} className="tech-marquee-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills {
          padding: 6rem 0;
          background: var(--gray-100);
        }
        
        .dark-mode .skills {
          background: var(--gray-200);
        }
        
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        .skill-category {
          background: var(--light);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-md);
        }
        
        .category-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--gray-200);
        }
        
        .category-header h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin: 0;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .skill-card {
          background: var(--gray-100);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all var(--transition-normal);
          border: 1px solid var(--gray-200);
        }
        
        .skill-card:hover {
          background: var(--light);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }
        
        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .skill-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .skill-info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .skill-name {
          font-weight: 600;
          color: var(--dark);
          font-size: 1.1rem;
        }
        
        .skill-level {
          font-weight: 700;
          color: var(--primary);
          font-size: 1.25rem;
        }
        
        .skill-bar {
          height: 8px;
          background: var(--gray-200);
          border-radius: 4px;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          border-radius: 4px;
          position: relative;
        }
        
        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 2s infinite;
        }
        
        .skill-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        
        .skill-tag {
          padding: 0.25rem 0.75rem;
          background: var(--gray-200);
          color: var(--gray-700);
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .skill-tag.highlight {
          background: var(--primary);
          color: white;
        }
        
        .tech-marquee-container {
          margin-top: 4rem;
          overflow: hidden;
          position: relative;
        }
        
        .tech-marquee {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          padding: 1.5rem 0;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .tech-marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }
        
        .tech-marquee-item {
          padding: 0.5rem 2rem;
          color: white;
          font-weight: 500;
          font-size: 1.1rem;
          flex-shrink: 0;
          position: relative;
        }
        
        .tech-marquee-item::after {
          content: '•';
          position: absolute;
          right: -0.5rem;
          color: rgba(255, 255, 255, 0.5);
        }
        
        .tech-marquee-item:last-child::after {
          display: none;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .skill-category {
            padding: 1.5rem;
          }
          
          .tech-marquee-item {
            padding: 0.5rem 1rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;