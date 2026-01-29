import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Web Full-Stack",
      company: "SW Consulting",
      period: "2024 – Actuellement",
      location: "Tunisie",
      description: [
        "Développement d'applications web full-stack avec Laravel (PHP) et Django (Python)",
        "Création de sites e-commerce avec gestion des produits, authentification et paiement",
        "Conception de plateforme d'analyse de données pour traitement de fichiers Excel/CSV",
        "Mise en place de solutions de web scraping avec Python, BeautifulSoup et Selenium",
        "Optimisation UI/UX avec HTML, CSS, Bootstrap et JavaScript",
        "Intégration de bases de données MySQL et SQLite"
      ],
      technologies: ["Laravel", "PHP", "Django", "Python", "MySQL", "SQLite", "Bootstrap", "JavaScript"],
      type: "web"
    },
    {
      title: "Stagiaire Ingénieur Systèmes Embarqués",
      company: "LZ Industrie",
      period: "Fév 2024 – Juin 2024",
      location: "Tunisie",
      description: [
        "Développement d'une plateforme industrielle en C++ et Qt pour gestion d'équipements",
        "Implémentation de communication TCP/IP via RJ45 avec des passerelles industrielles",
        "Intégration de technologie RFID pour communication avec dispositifs connectés",
        "Création d'interfaces de contrôle et surveillance en temps réel",
        "Gestion des bases de données MySQL/SQLite pour configurations et journaux"
      ],
      technologies: ["C++", "Qt", "TCP/IP", "RFID", "MySQL", "SQLite"],
      type: "embedded"
    },
    {
      title: "Stagiaire en Génie Électronique",
      company: "SAGEMCOM",
      period: "Juillet 2023 – Sept 2023",
      location: "Tunisie",
      description: [
        "Pilotage de projet NILM (Non-Intrusive Load Monitoring) pour désagrégation énergétique",
        "Développement d'algorithmes de traitement du signal pour identification d'appareils",
        "Analyse de consommation énergétique dans environnement domestique intelligent",
        "Travail sur solutions domotiques sans capteurs intrusifs",
        "Gestion complète de projet avec documentation technique"
      ],
      technologies: ["NILM", "Traitement du signal", "MATLAB", "Domotique", "Surveillance énergétique"],
      type: "embedded"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Expérience Professionnelle</h2>
            <p className="section-subtitle">
              Un parcours alliant expertise technique en systèmes embarqués et développement web moderne
            </p>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`experience-card ${exp.type}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="experience-header">
                  <div className="experience-type">
                    <span className={`type-badge ${exp.type}`}>
                      {exp.type === 'web' ? '🌐 Web' : '⚙️ Embedded'}
                    </span>
                  </div>
                  
                  <h3>{exp.title}</h3>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <span className="meta-icon">📅</span>
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📍</span>
                      <span>{exp.company}, {exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="experience-content">
                  <ul className="experience-list">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="technologies">
                    <span className="tech-label">Technologies utilisées:</span>
                    <div className="tech-badges">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .experience {
          padding: 6rem 0;
          background: var(--gray-100);
        }
        
        .dark-mode .experience {
          background: var(--gray-200);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-subtitle {
          font-size: 1.25rem;
          color: var(--gray-700);
          max-width: 600px;
          margin: 1rem auto 0;
        }
        
        .experience-timeline {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .experience-card {
          background: var(--light);
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-200);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          position: relative;
          overflow: hidden;
        }
        
        .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }
        
        .experience-card.web {
          border-left: 4px solid var(--secondary);
        }
        
        .experience-card.embedded {
          border-left: 4px solid var(--primary);
        }
        
        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, 
            var(--primary), 
            var(--secondary)
          );
          opacity: 0;
          transition: opacity var(--transition-normal);
        }
        
        .experience-card:hover::before {
          opacity: 1;
        }
        
        .experience-header {
          margin-bottom: 1.5rem;
        }
        
        .experience-type {
          margin-bottom: 0.75rem;
        }
        
        .type-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .type-badge.web {
          background: rgba(139, 92, 246, 0.1);
          color: var(--secondary);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .type-badge.embedded {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .experience-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--dark);
        }
        
        .experience-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray-700);
          font-size: 0.95rem;
        }
        
        .meta-icon {
          font-size: 1rem;
        }
        
        .experience-content {
          margin-top: 1.5rem;
        }
        
        .experience-list {
          list-style: none;
          margin-bottom: 2rem;
        }
        
        .experience-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--gray-700);
        }
        
        .experience-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }
        
        .technologies {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--gray-200);
        }
        
        .tech-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
          margin-bottom: 1rem;
        }
        
        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        
        .tech-badge {
          background: var(--gray-100);
          color: var(--gray-700);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }
        
        .tech-badge:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .experience {
            padding: 4rem 0;
          }
          
          .experience-card {
            padding: 2rem;
          }
          
          .experience-meta {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;