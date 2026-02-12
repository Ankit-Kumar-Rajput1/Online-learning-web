import React from "react";
import { Link } from "react-router-dom";
import courses from "../data";
import "../pages/Style/PopularCourses.css";


function PopularCourses() {
  const popular = courses.slice(0, 4); // top 4 courses

  return (
    <div className="popular-section">
      <h2 id="h3">Popular Courses</h2>

      <div className="popular-slider">
        {popular.map((c) => (
          <div key={c.id} className="popular-card">
            <img src={c.image} alt={c.title} />
            <h3>{c.title}</h3>
            <p>{c.description.slice(0, 50)}</p>
            <Link to={c.path} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCourses;
