import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data';
//import About from './About';
import Contact from './Contact';
import Testimonials from "../components/Testimonials";  // NEW
import FAQ from "../components/FAQ";                  // NEW
import PopularCourses from "../components/PopularCourses"; // NEW
import "./Home.css"


function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <h1>Start Learning Today</h1>
        <p>Choose the best online courses and grow your skills!</p>
        <Link to="/courses" className="hero-btn">Browse Courses</Link>
      </section>

      {/* Popular Courses */}
      <PopularCourses />

      {/* Full Courses */}
      <p id='av'>Courses</p>
      <section className="courses-container">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={course.path} className="details-btn">View Details</Link>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* About + Contact */}
      
      <Contact />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919548730309"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "20px", verticalAlign: "middle", marginRight: "8px" }}
        />
        WhatsApp
      </a>

    </div>
  );
}

export default Home;
