import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "EVA E-commerce",
      description: "Plateforme e-commerce complète avec gestion des produits, panier, authentification utilisateurs et système de paiement.",
      features: [
        "Interface utilisateur moderne et responsive",
        "Système d'authentification sécurisé",
        "Gestion des commandes en temps réel",
        "Tableau de bord administrateur",
        "Intégration de paiement"
      ],
      technologies: [
        { name: "Laravel", color: "#FF2D20", icon: "L" },
        { name: "PHP", color: "#777BB4", icon: "P" },
        { name: "MySQL", color: "#4479A1", icon: "SQL" },
        { name: "Bootstrap", color: "#7952B3", icon: "B" },
        { name: "JavaScript", color: "#F7DF1E", icon: "JS" }
      ],
      github: "https://github.com/Hmoham404/eva-ecommerce",
      demo: "https://eva-ecommerce-mu.vercel.app/",
      featured: true
    },
    {
      title: "Almindhar Projects & Tasks",
      description: "Application de gestion de projets et tâches avec fonctionnalités avancées de suivi, reporting et collaboration d'équipe.",
      features: [
        "Gestion multi-projets",
        "Assignation de tâches",
        "Suivi de progression",
        "Rapports détaillés",
        "Notifications en temps réel"
      ],
      technologies: [
        { name: "Django", color: "#092E20", icon: "D" },
        { name: "Python", color: "#3776AB", icon: "Py" },
        { name: "SQLite", color: "#003B57", icon: "SQL" },
        { name: "HTML/CSS", color: "#E34F26", icon: "Web" },
        { name: "JavaScript", color: "#F7DF1E", icon: "JS" }
      ],
      github: "https://github.com/Hmoham404/almindhar-projects-tasks",
      demo: null,
      featured: false
    },
    {
      title: "Plateforme Analyse Données",
      description: "Système de traitement et comparaison de fichiers Excel/CSV avec visualisation interactive des données.",
      features: [
        "Import de fichiers multiples",
        "Validation des données",
        "Comparaison automatique",
        "Visualisations graphiques",
        "Export des résultats"
      ],
      technologies: [
        { name: "Django", color: "#092E20", icon: "D" },
        { name: "Python", color: "#3776AB", icon: "Py" },
        { name: "PyQt", color: "#41CD52", icon: "Qt" },
        { name: "MySQL", color: "#4479A1", icon: "SQL" },
        { name: "Chart.js", color: "#F5785F", icon: "📊" }
      ],
      github: null,
      demo: null,
      featured: false
    },
    {
      title: "Système Industriel C++/Qt",
      description: "Plateforme industrielle pour contrôle et surveillance d'équipements électroniques avec interface graphique Qt.",
      features: [
        "Interface de contrôle en temps réel",
        "Communication TCP/IP",
        "Gestion RFID",
        "Journalisation des événements",
        "Base de données intégrée"
      ],
      technologies: [
        { name: "C++", color: "#00599C", icon: "C++" },
        { name: "Qt", color: "#41CD52", icon: "Qt" },
        { name: "TCP/IP", color: "#1E88E5", icon: "🌐" },
        { name: "RFID", color: "#FF9800", icon: "📡" },
        { name: "SQLite", color: "#003B57", icon: "SQL" }
      ],
      github: null,
      demo: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Mes Projets</h2>
            <p className="section-subtitle">
              Applications web modernes et systèmes embarqués complexes
            </p>
          </div>

          {/* Barre de logos technologiques */}
          <motion.div 
            className="tech-logos-bar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="tech-logos-container">
              <div className="tech-logo">
                <div className="tech-logo-circle" style={{ background: '#FF2D20' }}>L</div>
                <span>Laravel</span>
              </div>
              <div className="tech-logo">
                <div className="tech-logo-circle" style={{ background: '#777BB4' }}>P</div>
                <span>PHP</span>
              </div>
              <div className="tech-logo">
                <div className="tech-logo-circle" style={{ background: '#092E20' }}>D</div>
                <span>Django</span>
              </div>
              <div className="tech-logo">
                <div className="tech-logo-circle" style={{ background: '#3776AB' }}>Py</div>
                <span>Python</span>
              </div>
              <div className="tech-logo">
                <div className="tech-logo-circle" style={{ background: '#00599C' }}>C++</div>
                <span>C++</span>
              </div>
              <div className="tech-logo">
                <div className="tech-logo-circle" style={{ background: '#41CD52' }}>Qt</div>
                <span>Qt</span>
              </div>
            </div>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    ⭐ Projet Vedette
                  </div>
                )}
                
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Fonctionnalités:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-tag" style={{ borderColor: tech.color }}>
                      <div 
                        className="tech-tag-icon" 
                        style={{ background: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      🔗 Code GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      🌐 Voir la démo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .projects {
          padding: 6rem 0;
          background: linear-gradient(135deg, 
            rgba(248, 250, 252, 0.8) 0%, 
            rgba(241, 245, 249, 0.8) 100%);
        }
        
        .dark-mode .projects {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.8) 0%, 
            rgba(30, 41, 59, 0.8) 100%);
        }
        
        .tech-logos-bar {
          margin-bottom: 3rem;
        }
        
        .tech-logos-container {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .tech-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          transition: transform var(--transition-normal);
        }
        
        .tech-logo:hover {
          transform: translateY(-5px);
        }
        
        .tech-logo-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          box-shadow: var(--shadow-md);
        }
        
        .tech-logo span {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .project-card {
          background: var(--light);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .project-card.featured {
          border: 2px solid var(--primary);
          box-shadow: var(--glow);
        }
        
        .featured-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .project-header {
          margin-bottom: 1rem;
        }
        
        .project-card h3 {
          font-size: 1.25rem;
          color: var(--dark);
        }
        
        .project-description {
          color: var(--gray-700);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        
        .project-features {
          margin-bottom: 1.5rem;
        }
        
        .project-features h4 {
          font-size: 1rem;
          color: var(--dark);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        
        .project-features ul {
          list-style: none;
        }
        
        .project-features li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--gray-700);
          font-size: 0.95rem;
        }
        
        .project-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: bold;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .tech-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 2px solid;
          background: var(--light);
          transition: all var(--transition-fast);
        }
        
        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
        
        .tech-tag-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 0.75rem;
        }
        
        .tech-tag span {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }
        
        .project-links .btn {
          flex: 1;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-links {
            flex-direction: column;
          }
          
          .tech-logos-container {
            gap: 1rem;
          }
          
          .tech-logo-circle {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;