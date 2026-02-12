import React from 'react';
import { FaMobileAlt, FaReact, FaAndroid, FaApple, FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../App.css"

const App = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundColor: '#4CAF50' }}>
        <div className="hero-content">
          <FaMobileAlt className="hero-icon" />
          <h1>Professional Mobile App Development Services</h1>
          <p className="hero-subtitle">
            Crafting high-performance Android and iOS apps using React Native, Flutter, and native technologies.
            Our apps are designed for seamless user experience and excellent performance.
          </p>
        </div>
      </section>

      {/* Services Introduction Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Custom Mobile Apps for Your Business</h2>
          <p>
            We build mobile apps that are intuitive, fast, and scalable, helping your business reach customers
            on both iOS and Android platforms.
          </p>
          <ul className="service-bullets">
            <li>✅ Cross-Platform Apps with React Native or Flutter</li>
            <li>✅ Native iOS and Android App Development</li>
            <li>✅ App Store and Google Play Ready</li>
            <li>✅ Offline Support & Push Notifications</li>
            <li>✅ Scalable Backend & Cloud Integration</li>
            <li>✅ Ongoing App Maintenance & Support</li>
          </ul>
          <p style={{ marginTop: '20px' }}>
            Let us help you build an app that engages users and drives business growth.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Why Mobile Apps Matter</h2>
          <div className="two-column">
            <div className="column">
              <p>
                Mobile apps are the most direct way to connect with your customers. Our apps are optimized
                for speed, usability, and reliability.
              </p>
              <p>
                We combine design, technology, and business strategy to create apps that users love and
                businesses rely on.
              </p>
            </div>
            <div className="column">
              <div className="stats-box">
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">User Satisfaction Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4x</div>
                  <div className="stat-label">Increase in Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="service-section alt-bg">
        <div className="section-container">
          <h2>Our Mobile App Development Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <FaReact className="capability-icon" />
              <h3>Cross-Platform Apps</h3>
              <p>
                Build apps that run smoothly on both iOS and Android using React Native or Flutter.
              </p>
            </div>
            <div className="capability-card">
              <FaAndroid className="capability-icon" />
              <h3>Native Android Development</h3>
              <p>
                Fully native Android apps for better performance and user experience.
              </p>
            </div>
            <div className="capability-card">
              <FaApple className="capability-icon" />
              <h3>Native iOS Development</h3>
              <p>
                Build apps for iPhone and iPad with seamless performance and smooth UI.
              </p>
            </div>
            <div className="capability-card">
              <FaCloud className="capability-icon" />
              <h3>Backend & Cloud Integration</h3>
              <p>
                Scalable cloud services, APIs, and real-time databases for robust app functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Our App Development Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation & Planning</h3>
              <p>Understand business goals, target audience, and app requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>UI/UX Design</h3>
              <p>Create intuitive, engaging, and user-friendly designs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>App Development</h3>
              <p>Code the app for performance, security, and reliability.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testing & Launch</h3>
              <p>Thorough testing and deployment to App Store and Play Store.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Start Your Mobile App Journey with Us!</h2>
          <p>
            Contact our expert team today to create a mobile app that impresses users and grows your business.
          </p>
          <div className="cta-buttons">
            <Link to="/Talk" className="primary-button">
              Let's Talk
            </Link>
            <Link to="/portfolio" className="secondary-button">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
