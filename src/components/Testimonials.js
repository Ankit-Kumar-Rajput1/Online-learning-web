import React from "react";
import "../pages/Style/Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Ankit Kumar",
      review: "This platform helped me learn React from scratch. Best teaching style!",
      rating: 5,
      img: "/image/ak1.jpg",
    },
    {
      name: "Priya Sharma",
      review: "Courses are very simple and easy to understand. Highly recommended!",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Aman Verma",
      review: "The practical projects helped me get an internship.",
      rating: 4,
      img: "/image/ak11.jpg",
    },
  ];

  return (
    <div className="testimonials-section">
      <h2 id="h2">What Our Students Say</h2>

      <div className="testimonials-grid">
        {reviews.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.review}</p>
            <p className="rating">⭐ {item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
