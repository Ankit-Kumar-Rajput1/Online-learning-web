import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Website */}
        <div className="footer-section">
          <h3>About Website</h3>
          <p>
            LearnOnline is your trusted platform to learn programming, web
            development, and IT skills with high-quality courses.
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://github.com/Ankit-Kumar-Rajput1?tab=repositories" target="_blank" rel="noreferrer">🐙</a>
            <a href="https://www.linkedin.com/in/ankit-kumar-14a162291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">🔗</a>
          </div>
        </div>

      </div>

      <p className="footer-bottom">© 2025 LearnOnline — All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
