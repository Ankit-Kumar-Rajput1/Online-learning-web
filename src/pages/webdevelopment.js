import React from 'react';
import { FaLaptopCode, FaCode, FaWordpress, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../App.css"

const App = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundColor: 'red' }}>
        <div className="hero-content">
          <FaLaptopCode className="hero-icon" />
          <h1>Professional Website Development Services</h1>
          <p className="hero-subtitle">Crafting stunning, high-performing websites for businesses of all sizes. 
  Our team blends creativity with cutting-edge technology to deliver seamless, user-friendly experiences. 
</p>
        </div>
      </section>

      {/* Services Introduction Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Custom Website Development Tailored for You</h2>
          <p>
            We specialize in designing and developing beautiful, functional, and responsive websites that
            capture your brand's essence and drive business growth.
          </p>
          <ul className="service-bullets">
            <li>✅ Custom Business Websites</li>
            <li>✅ E-commerce Website Development</li>
            <li>✅ WordPress & CMS Solutions</li>
            <li>✅ Mobile-Responsive and SEO-Friendly Designs</li>
            <li>✅ Fast Loading Speed and Secure Hosting Setup</li>
            <li>✅ Ongoing Support & Maintenance</li>
          </ul>
          <p style={{ marginTop: '20px' }}>
            Partner with us to create a professional online presence that sets you apart. 
            Let's build a website that impresses and converts visitors into customers!
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Why a Great Website Matters</h2>
          <div className="two-column">
            <div className="column">
              <p>
                Your website is often the first impression customers have of your brand. 
                We build websites that not only look stunning but are also optimized for 
                performance, security, and search engines.
              </p>
              <p>
                Our expert team combines creativity, strategy, and cutting-edge technologies to 
                ensure your site drives engagement and grows your business.
              </p>
            </div>
            <div className="column">
              <div className="stats-box">
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3x</div>
                  <div className="stat-label">Increase in Lead Conversions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="service-section alt-bg">
        <div className="section-container">
          <h2>Our Website Development Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <FaLaptopCode className="capability-icon" />
              <h3>Custom Website Development</h3>
              <p>
                Tailor-made websites built from scratch, designed uniquely for your business goals.
              </p>
            </div>
            <div className="capability-card">
              <FaWordpress className="capability-icon" />
              <h3>WordPress & CMS Solutions</h3>
              <p>
                Easy-to-manage websites using WordPress, Shopify, Wix, and other popular CMS platforms.
              </p>
            </div>
            <div className="capability-card">
              <FaMobileAlt className="capability-icon" />
              <h3>Responsive Mobile Design</h3>
              <p>
                Mobile-first approach ensuring flawless experience across all devices and screen sizes.
              </p>
            </div>
            <div className="capability-card">
              <FaCloud className="capability-icon" />
              <h3>Web Hosting & Cloud Setup</h3>
              <p>
                Fast, secure hosting and scalable cloud services for optimal website performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-section">
        <div className="section-container">
          <h2>Our Development Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation & Strategy</h3>
              <p>Understanding your brand, goals, and target audience.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>UI/UX Design</h3>
              <p>Designing intuitive, engaging, and conversion-focused layouts.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p>Front-end & back-end coding with SEO optimization.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Launch & Growth</h3>
              <p>Deployment, monitoring, and ongoing updates for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" >
        <div className="section-container">
          <h2>Start Your Website Journey with Us!</h2>
          <p>
            Contact our expert team today and let's create a website that stands out and drives results.
          </p>
          <div className="cta-buttons">
            <Link to='/Talk' className="primary-button">
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