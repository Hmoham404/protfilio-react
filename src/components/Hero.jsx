import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const technologies = [
    { name: "C++", icon: "🚀", color: "#00599C" },
    { name: "Qt", icon: "🎯", color: "#41CD52" },
    { name: "Laravel", icon: "🔥", color: "#FF2D20" },
    { name: "PHP", icon: "🐘", color: "#777BB4" },
    { name: "Django", icon: "🐍", color: "#092E20" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
    { name: "MySQL", icon: "🗄️", color: "#4479A1" },
  ];

  const downloadCV = () => {
    // Créer un lien temporaire pour télécharger le CV
    const link = document.createElement('a');
    link.href = '/cv-mohamed-lakhal.pdf'; // Mettez le chemin de votre CV ici
    link.download = 'CV_Mohamed_Lakhal_Ingenieur_Systèmes_Embarqués_FullStack.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Contenu principal */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-badge">
              <span className="badge embedded">
                ⚙️ Ingénieur Systèmes Embarqués
              </span>
              <span className="badge web">
                🌐 Développeur Web Full-Stack
              </span>
            </div>
            
            <h1 className="hero-title">
              Mohamed <span className="gradient-text">Lakhal</span>
            </h1>
            
            <h2 className="hero-subtitle">
              Expert en <span className="highlight">C++ & Qt</span> • 
              Spécialiste <span className="highlight">Laravel & Django</span>
            </h2>
            
            <p className="hero-description">
              Passionné par les technologies embarquées et le développement web, je conçois 
              des solutions innovantes alliant performance matérielle et élégance logicielle. 
              Mon expertise couvre l'industrie 4.0, le traitement du signal et les applications web modernes.
            </p>
            
            <div className="tech-logos">
              <div className="tech-logos-row">
                <div className="tech-logo-item">
                  <div className="tech-logo-icon" style={{ background: '#FF2D20' }}>L</div>
                  <span className="tech-logo-name">Laravel</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-icon" style={{ background: '#777BB4' }}>P</div>
                  <span className="tech-logo-name">PHP</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-icon" style={{ background: '#092E20' }}>D</div>
                  <span className="tech-logo-name">Django</span>
                </div>
                <div className="tech-logo-item">
                  <div className="tech-logo-icon" style={{ background: '#3776AB' }}>Py</div>
                  <span className="tech-logo-name">Python</span>
                </div>
              </div>
            </div>
            
            <div className="hero-actions">
              <motion.button
                onClick={downloadCV}
                className="btn btn-primary btn-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📥 Télécharger CV
              </motion.button>
              
              <motion.a 
                href="#contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Me contacter
              </motion.a>
              
              <motion.a 
                href="#projects" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💼 Voir mes projets
              </motion.a>
            </div>
            
            <div className="hero-contact">
              <a href="tel:+21628809961" className="contact-item">
                <span className="contact-icon">📱</span>
                +216 28 80 99 61
              </a>
              <a href="mailto:Lakhalm300@gmail.com" className="contact-item">
                <span className="contact-icon">✉️</span>
                Lakhalm300@gmail.com
              </a>
            </div>
          </motion.div>
          
          {/* Photo et logos */}
          <motion.div 
            className="hero-profile"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <img 
                  src="/images/profile.jpg" 
                  alt="Mohamed Lakhal" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://ui-avatars.com/api/?name=Mohamed+Lakhal&background=6366F1&color=fff&size=400";
                  }}
                />
                <div className="profile-overlay">
                  <div className="profile-badge embedded">
                    <span className="badge-icon">⚙️</span>
                    <span className="badge-text">Systèmes Embarqués</span>
                  </div>
                  <div className="profile-badge web">
                    <span className="badge-icon">🌐</span>
                    <span className="badge-text">Web Full-Stack</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Liste continue de technologies */}
            <div className="tech-list-container">
              <h3 className="tech-list-title">🛠️ Technologies Maîtrisées</h3>
              <div className="tech-list">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="tech-icon" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 8rem 0 4rem;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 500px;
          background: linear-gradient(135deg, 
            rgba(99, 102, 241, 0.05) 0%, 
            rgba(139, 92, 246, 0.05) 50%, 
            rgba(6, 182, 212, 0.05) 100%);
          clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
          z-index: -1;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-badge {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .badge.embedded {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .badge.web {
          background: rgba(139, 92, 246, 0.1);
          color: var(--secondary);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--gray-700);
          margin-bottom: 2rem;
          font-weight: 400;
        }
        
        .highlight {
          color: var(--primary);
          font-weight: 600;
        }
        
        .hero-description {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          max-width: 600px;
          color: var(--gray-700);
        }
        
        .tech-logos {
          margin-bottom: 2rem;
        }
        
        .tech-logos-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .tech-logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        
        .tech-logo-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          box-shadow: var(--shadow-md);
          transition: transform var(--transition-normal);
        }
        
        .tech-logo-item:hover .tech-logo-icon {
          transform: translateY(-5px);
        }
        
        .tech-logo-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .hero-actions .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .hero-contact {
          display: flex;
          gap: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray-700);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
        }
        
        .contact-item:hover {
          color: var(--primary);
        }
        
        .contact-icon {
          font-size: 1.25rem;
        }
        
        .hero-profile {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .profile-image-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        
        .profile-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 4px solid var(--light);
        }
        
        .profile-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform var(--transition-normal);
        }
        
        .profile-image-wrapper:hover .profile-image {
          transform: scale(1.05);
        }
        
        .profile-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 2rem 1.5rem 1.5rem;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }
        
        .profile-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .profile-badge.embedded {
          background: rgba(99, 102, 241, 0.3);
        }
        
        .profile-badge.web {
          background: rgba(139, 92, 246, 0.3);
        }
        
        .badge-icon {
          font-size: 1.25rem;
        }
        
        .badge-text {
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .tech-list-container {
          background: var(--light);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-200);
        }
        
        .tech-list-title {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--dark);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .tech-list {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        
        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--gray-100);
          border-radius: 12px;
          transition: all var(--transition-normal);
          cursor: default;
        }
        
        .tech-item:hover {
          background: var(--gray-200);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        .tech-icon {
          font-size: 1.5rem;
        }
        
        .tech-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
        }
        
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .hero-profile {
            order: -1;
          }
          
          .tech-list {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 6rem 0 3rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .hero-actions {
            flex-direction: column;
          }
          
          .hero-contact {
            flex-direction: column;
            gap: 1rem;
          }
          
          .tech-list {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .profile-overlay {
            flex-direction: column;
            gap: 0.5rem;
            padding: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .tech-logos-row {
            justify-content: center;
          }
          
          .tech-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;