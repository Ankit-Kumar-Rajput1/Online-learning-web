import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesSection.css";

function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      rating: 4.8,
      desc: "Custom websites and web apps using React, Next.js, and Node.js.",
      tags: ["Responsive Design", "SEO Optimized", "CMS Integration"],
      route: "/webdevelopment",
      bgImage: "/image/web.jpg",
    },
    {
      title: "Mobile Apps",
      rating: 4.9,
      desc: "iOS and Android apps built using React Native or Flutter.",
      tags: ["Native Performance", "Offline Support", "App Store Ready"],
      route: "/appdevelopment",
      bgImage: "/image/app.jpg", // <-- background image for Mobile Apps
    },
    {
      title: "Phone Mockup Graphic",
      rating: 4.7,
      desc: "Beautiful, intuitive interfaces to enhance user experience.",
      tags: ["User Research", "Prototyping", "Design Systems"],
      route: "/phonemockup",
      bgImage: "/image/logo.jpg", // <-- background image for Phone Mockup Graphic
    },
  ];

  return (
    <div className="services-container">
      <h2 id="h">Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => navigate(service.route)}
            style={{
              backgroundImage: service.bgImage
                ? `url(${service.bgImage})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3>{service.title}</h3>
            <p>⭐ {service.rating}</p>
            <p>{service.desc}</p>

            <div className="tags">
              {service.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
