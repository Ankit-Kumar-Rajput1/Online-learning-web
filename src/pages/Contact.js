import React, { useState } from 'react';
//import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-main">
      <div className="contact-hero">
        <h1 id='c'>Contact Me</h1>
        <p id='a'>I'm a professional Web Developer offering creative and reliable services.</p>
        <p id='a'>Let’s collaborate to build powerful websites that deliver results.</p>
        <p id='a'><b>Email: ankitrajputpubg1185@gmail.com</b></p>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <h2 id='c1'>What I Offer</h2>
          <ul>
           <li><b>🎓 Online Courses with Certificates</b></li>
<li><b>📚 Beginner to Advanced Learning Paths</b></li>
<li><b>💻 Practical Coding & Tech Courses</b></li>
<li><b>📝 Quizzes, Assignments & Projects</b></li>
<li><b>📱 Mobile Friendly Learning</b></li>
<li><b>🏆 Skill-Based Certification</b></li>

          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 id='c'>Send Me a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
