import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Contact</h2>
            <p className="section-subtitle">
              Discutons de votre prochain projet ou opportunité
            </p>
          </div>

          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Prenez contact avec moi</h3>
              
              <p className="contact-description">
                Je suis ouvert aux opportunités en ingénierie des systèmes embarqués, 
                développement web full-stack et projets innovants.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    📱
                  </div>
                  <div>
                    <h4>Téléphone</h4>
                    <a href="tel:+21628809961">+216 28 80 99 61</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    ✉️
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:Lakhalm300@gmail.com">Lakhalm300@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    📍
                  </div>
                  <div>
                    <h4>Localisation</h4>
                    <p>Tunisie</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Réseaux sociaux</h4>
                <div className="social-icons">
                  <a 
                    href="https://github.com/Hmoham404" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    💻
                  </a>
                  
                  <a 
                    href="mailto:Lakhalm300@gmail.com" 
                    className="social-icon"
                    aria-label="Email"
                  >
                    📧
                  </a>
                  
                  <button 
                    className="social-icon"
                    onClick={() => window.open('/cv.pdf', '_blank')}
                    aria-label="CV"
                  >
                    📄
                  </button>
                </div>
              </div>
              
              <div className="availability">
                <div className="availability-status">
                  <div className="status-indicator available"></div>
                  <span>Disponible pour de nouvelles opportunités</span>
                </div>
                <p className="availability-note">
                  Réponse sous 24h maximum
                </p>
              </div>
            </motion.div>
            
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message envoyé avec succès !</h3>
                  <p>Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Sujet *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Sujet du message"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet ou demande..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner-small"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        📤 Envoyer le message
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact {
          padding: 6rem 0;
          background: linear-gradient(135deg, 
            rgba(248, 250, 252, 0.8) 0%, 
            rgba(241, 245, 249, 0.8) 100%);
        }
        
        .dark-mode .contact {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.8) 0%, 
            rgba(30, 41, 59, 0.8) 100%);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contact-info h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: var(--dark);
        }
        
        .contact-description {
          color: var(--gray-700);
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .contact-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gray-100);
          border-radius: 12px;
          color: var(--primary);
          font-size: 1.25rem;
        }
        
        .contact-item h4 {
          font-size: 1rem;
          color: var(--gray-700);
          margin-bottom: 0.25rem;
          font-weight: 500;
        }
        
        .contact-item a,
        .contact-item p {
          color: var(--dark);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);
        }
        
        .contact-item a:hover {
          color: var(--primary);
        }
        
        .social-links {
          margin-bottom: 3rem;
        }
        
        .social-links h4 {
          font-size: 1rem;
          color: var(--gray-700);
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gray-100);
          border-radius: 12px;
          color: var(--gray-700);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 1.25rem;
        }
        
        .social-icon:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }
        
        .availability {
          padding: 1.5rem;
          background: var(--gray-100);
          border-radius: 12px;
          border: 1px solid var(--gray-200);
        }
        
        .availability-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        
        .status-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .status-indicator.available {
          background: var(--success);
        }
        
        .availability-note {
          font-size: 0.875rem;
          color: var(--gray-700);
        }
        
        .contact-form {
          background: var(--light);
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-lg);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--dark);
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1px solid var(--gray-300);
          border-radius: 8px;
          background: var(--light);
          color: var(--dark);
          font-family: var(--font-main);
          font-size: 1rem;
          transition: all var(--transition-fast);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
        
        .contact-form .btn {
          width: 100%;
          margin-top: 1rem;
        }
        
        .success-message {
          text-align: center;
          padding: 3rem 1rem;
        }
        
        .success-icon {
          width: 64px;
          height: 64px;
          background: var(--success);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.5rem;
        }
        
        .success-message h3 {
          color: var(--success);
          margin-bottom: 0.5rem;
        }
        
        .success-message p {
          color: var(--gray-700);
        }
        
        .spinner-small {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 0.5rem;
        }
        
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-form {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;