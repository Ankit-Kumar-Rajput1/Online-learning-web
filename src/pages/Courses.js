import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data';
import '../pages/Style/PopularCourses.css'; // same CSS use karenge

const Course = () => {
  return (
    <div className="popular-section">
      <h1 id="h3">All Courses</h1>

      <div className="popular-slider">
        {courses.map((course) => (
          <div key={course.id} className="popular-card">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <Link to={course.path} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
