// Talk.js
import React from 'react';
import './Style/Talk.css'

function Talk() {
  return (
    <div className="Talk-container">

      {/* Hero Section */}
      <section className="Talk-hero fade-in">
        <h1 id='H'>Let's Build Your Digital Future</h1>
        <p>Schedule a free strategy session with our team of experts</p>
      </section>

      {/* Stats Section */}
      <section className="Talk-stats-section fade-in">
        <div className="Talk-stat-item">
          <span className="Talk-stat-number">200+</span>
          <span className="Talk-stat-label">Successful Projects</span>
        </div>
        <div className="Talk-stat-item">
          <span className="Talk-stat-number">15+</span>
          <span className="Talk-stat-label">Years Experience</span>
        </div>
        <div className="Talk-stat-item">
          <span className="Talk-stat-number">98%</span>
          <span className="Talk-stat-label">Client Satisfaction</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="Talk-section">
        <h2 className="Talk-title">Our Comprehensive Services</h2>
        <div className="Talk-grid">

          {/* Web Development */}
          <div className="Talk-service-card fade-in">
            <div className="Talk-service-header">
              <h3 className="Talk-service-title">Web Development</h3>
              <span className="Talk-service-duration">2-8 weeks</span>
            </div>
            <p className="Talk-service-description">
              Custom websites and web applications tailored to your business needs
            </p>
            <div className="Talk-service-price">$2 - $25,000</div>
          </div>

          {/* Mobile App Development */}
          <div className="Talk-service-card fade-in">
            <div className="Talk-service-header">
              <h3 className="Talk-service-title">Mobile App Development</h3>
              <span className="Talk-service-duration">4-12 weeks</span>
            </div>
            <p className="Talk-service-description">
              Native and cross-platform mobile applications for iOS and Android
            </p>
            <div className="Talk-service-price">$5 - $30,000</div>
          </div>

          {/* UI/UX Design */}
          <div className="Talk-service-card fade-in">
            <div className="Talk-service-header">
              <h3 className="Talk-service-title">UI/UX Design</h3>
              <span className="Talk-service-duration">1-4 weeks</span>
            </div>
            <p className="Talk-service-description">
              Beautiful and intuitive user interfaces that enhance user experience
            </p>
            <div className="Talk-service-price">$1 - $10,000</div>
          </div>

          {/* Digital Marketing */}
          <div className="Talk-service-card fade-in">
            <div className="Talk-service-header">
              <h3 className="Talk-service-title">Digital Marketing</h3>
              <span className="Talk-service-duration">Ongoing</span>
            </div>
            <p className="Talk-service-description">
              Comprehensive digital strategies to grow your online presence
            </p>
            <div className="Talk-service-price">$1,000+/month</div>
          </div>

          {/* Cloud Solutions */}
          <div className="Talk-service-card fade-in">
            <div className="Talk-service-header">
              <h3 className="Talk-service-title">Cloud Solutions</h3>
              <span className="Talk-service-duration">2-6 weeks</span>
            </div>
            <p className="Talk-service-description">
              Scalable cloud infrastructure and migration services
            </p>
            <div className="Talk-service-price">$3 - $30,000</div>
          </div>

          {/* Custom Software */}
          <div className="Talk-service-card fade-in">
            <div className="Talk-service-header">
              <h3 className="Talk-service-title">Custom Software</h3>
              <span className="Talk-service-duration">6-24 weeks</span>
            </div>
            <p className="Talk-service-description">
              Tailored software solutions for your unique business requirements
            </p>
            <div className="Talk-service-price">$10,000 - $100,000+</div>
          </div>

          {/* Cybersecurity */}
          <div className="Talk-service-card fade-in">
            <div className="Talk-service-header">
              <h3 className="Talk-service-title">Cybersecurity</h3>
              <span className="Talk-service-duration">1-4 weeks</span>
            </div>
            <p className="Talk-service-description">
              Protect your digital assets with comprehensive security solutions
            </p>
            <div className="Talk-service-price">$2,500 - $20,000</div>
          </div>

          {/* IT Infrastructure */}
          <div className="Talk-service-card fade-in">
            <div className="Talk-service-header">
              <h3 className="Talk-service-title">IT Infrastructure</h3>
              <span className="Talk-service-duration">2-8 weeks</span>
            </div>
            <p className="Talk-service-description">
              Robust IT infrastructure setup and management
            </p>
            <div className="Talk-service-price">$5,000 - $50,000</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="Talk-testimonials-section">
        <h2 className="Talk-section-title">What Our Clients Say</h2>
        <div className="Talk-testimonials-grid">

          <div className="Talk-testimonial-card fade-in">
            <p className="Talk-testimonial-text">
              Their web development team transformed our online presence completely. 
              Our conversion rates increased by 140%!
            </p>
            <div className="Talk-testimonial-author">Sarah Johnson</div>
            <div className="Talk-testimonial-role">CEO of TechNova</div>
            <div className="Talk-testimonial-service">Web Development Client</div>
          </div>

          <div className="Talk-testimonial-card fade-in">
            <p className="Talk-testimonial-text">
              The mobile app they built for us has been downloaded over 500,000 times. 
              Flawless execution from start to finish.
            </p>
            <div className="Talk-testimonial-author">Michael Chen</div>
            <div className="Talk-testimonial-role">Product Director</div>
            <div className="Talk-testimonial-service">Mobile App Client</div>
          </div>

          <div className="Talk-testimonial-card fade-in">
            <p className="Talk-testimonial-text">
              Their digital marketing strategy tripled our qualified leads in just 3 months. 
              Worth every penny.
            </p>
            <div className="Talk-testimonial-author">Emily Rodriguez</div>
            <div className="Talk-testimonial-role">Marketing Head</div>
            <div className="Talk-testimonial-service">Marketing Client</div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="Talk-contact-methods-section fade-in">
        <h2 className="Talk-section-title">Other Ways to Reach Us</h2>
        <div className="Talk-contact-methods-grid">

          <div className="Talk-contact-method">
            <div className="Talk-contact-icon">💬</div>
            <h3>Live Chat</h3>
            <p className="Talk-contact-detail">Available 24/7 on our website</p>
          </div>

          <div className="Talk-contact-method">
            <div className="Talk-contact-icon">✉️</div>
            <h3>Email Us</h3>
            <a href="mailto:hello@digitalinnovators.com" className="Talk-contact-detail">
              hello@digitalinnovators.com
            </a>
          </div>

          <div className="Talk-contact-method">
            <div className="Talk-contact-icon">📞</div>
            <h3>Call Us</h3>
            <a href="tel:+15559876543" className="Talk-contact-detail">
              +1 (555) 987-6543
            </a>
          </div>

          <div className="Talk-contact-method">
            <div className="Talk-contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p className="Talk-contact-detail">123 Tech Blvd, Austin, TX</p>
          </div>

          <div className="Talk-contact-method">
            <div className="Talk-contact-icon">💚</div>
            <h3>WhatsApp</h3>
            <p className="Talk-contact-detail">Chat with us on WhatsApp</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Talk;
