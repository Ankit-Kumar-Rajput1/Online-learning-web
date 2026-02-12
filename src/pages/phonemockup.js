import React from 'react';
import { FaMobileAlt, FaPencilRuler, FaPalette, FaLayerGroup, FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../App.css"

const App = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundColor: '#6C63FF' }}>
        <div className="hero-content">
          <FaMobileAlt className="hero-icon" />
          <h1>Phone Mockup & UI Design Services</h1>
          <p className="hero-subtitle">
            Designing visually stunning and user-friendly mobile app interfaces with modern tools and techniques. 
            Enhance user experience with professional mockups and design systems.
          </p>
        </div>
      </section>

      {/* Services Introduction Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Custom Mobile UI/UX Designs</h2>
          <p>
            We specialize in creating beautiful and functional phone mockups and UI designs that make your apps 
            intuitive and visually appealing.
          </p>
          <ul className="service-bullets">
            <li>✅ High-Fidelity Mobile Mockups</li>
            <li>✅ UX Research & User Flows</li>
            <li>✅ Prototyping & Interactive Designs</li>
            <li>✅ UI Design Systems & Style Guides</li>
            <li>✅ Responsive Layouts for All Devices</li>
            <li>✅ Collaboration with Development Teams</li>
          </ul>
          <p style={{ marginTop: '20px' }}>
            Let us design a user interface that delights your users and strengthens your brand presence.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Why Great UI/UX Matters</h2>
          <div className="two-column">
            <div className="column">
              <p>
                An intuitive interface and engaging design are key to user retention. Our designs ensure 
                smooth navigation and visually appealing layouts for mobile apps.
              </p>
              <p>
                By combining creativity and user-centered design principles, we create mockups and interfaces 
                that users love.
              </p>
            </div>
            <div className="column">
              <div className="stats-box">
                <div className="stat-item">
                  <div className="stat-number">97%</div>
                  <div className="stat-label">User Satisfaction Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5x</div>
                  <div className="stat-label">Increase in User Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="service-section alt-bg">
        <div className="section-container">
          <h2>Our UI/UX Design Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <FaPencilRuler className="capability-icon" />
              <h3>Wireframing & Mockups</h3>
              <p>Create low and high-fidelity mockups to visualize app structure and user flow.</p>
            </div>
            <div className="capability-card">
              <FaPalette className="capability-icon" />
              <h3>Visual Design & Branding</h3>
              <p>Design visually appealing interfaces with a consistent brand identity and style guide.</p>
            </div>
            <div className="capability-card">
              <FaLayerGroup className="capability-icon" />
              <h3>Prototyping & Interaction</h3>
              <p>Interactive prototypes to test app usability before development starts.</p>
            </div>
            <div className="capability-card">
              <FaCloud className="capability-icon" />
              <h3>Design Handoff & Collaboration</h3>
              <p>Seamless collaboration with developers, using tools like Figma, Zeplin, and Adobe XD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Our Design Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Research & Planning</h3>
              <p>Understanding user needs, business goals, and app requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Wireframing</h3>
              <p>Creating basic structure and layout of app screens.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Visual Design</h3>
              <p>Designing high-fidelity screens with colors, typography, and branding.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Prototyping & Testing</h3>
              <p>Interactive prototypes to validate design and user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Bring Your App Design to Life!</h2>
          <p>
            Contact our design experts to create engaging phone mockups and UI designs that wow your users.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">
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
