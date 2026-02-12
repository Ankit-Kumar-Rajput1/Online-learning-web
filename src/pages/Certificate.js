import React from "react";
import "./Style/Cetificate.css";



const certificates = [
  {
    id: 1,
    title: "Future Skills Prime",
    provider: "Government of India",
    link: "https://futureskillsprime.in/digital-courses",
    color: "#FF6B6B",
    icon: "🎓",
    courses: ["AI & ML", "Cybersecurity", "Cloud Computing"]
  },
  {
    id: 2,
    title: "Google Digital Garage",
    provider: "Google",
    link: "https://learndigital.withgoogle.com/digitalgarage",
    color: "#4ECDC4",
    icon: "📊",
    courses: ["Digital Marketing", "Data Analytics", "Career Development"]
  },
  {
    id: 3,
    title: "Cisco Networking Academy",
    provider: "Cisco",
    link: "https://www.netacad.com/courses/all-courses",
    color: "#45B7D1",
    icon: "🌐",
    courses: ["Networking", "Cybersecurity", "IoT"]
  },
  {
    id: 4,
    title: "IBM SkillsBuild",
    provider: "IBM",
    link: "https://skillsbuild.org/students/courses",
    color: "#96CEB4",
    icon: "💻",
    courses: ["Data Science", "AI", "Cloud Computing"]
  },
  {
    id: 5,
    title: "Meta Blueprint",
    provider: "Meta",
    link: "https://www.facebook.com/business/learn",
    color: "#FFEAA7",
    icon: "📱",
    courses: ["Social Media Marketing", "Digital Advertising"]
  },
  {
    id: 6,
    title: "Coursera",
    provider: "Free Courses",
    link: "https://www.coursera.org/courses?query=free&productType=Courses",
    color: "#DDA0DD",
    icon: "📚",
    courses: ["Data Science", "Business", "Computer Science"]
  },
  {
    id: 7,
    title: "Udemy",
    provider: "Free Courses",
    link: "https://www.udemy.com/courses/free/",
    color: "#FADADD",
    icon: "🎯",
    courses: ["Programming", "Design", "Marketing"]
  },
  {
    id: 8,
    title: "edX",
    provider: "Free Verified Certificates",
    link: "https://www.edx.org/course",
    color: "#B5EAD7",
    icon: "⭐",
    courses: ["Engineering", "Humanities", "Science"]
  },
  {
    id: 9,
    title: "Microsoft Learn",
    provider: "Microsoft",
    link: "https://learn.microsoft.com/en-us/training/",
    color: "#C7CEE6",
    icon: "💡",
    courses: ["Azure", "Power Platform", "Dynamics 365"]
  },
  {
    id: 10,
    title: "LinkedIn Learning",
    provider: "Free Month Access",
    link: "https://www.linkedin.com/learning",
    color: "#E2F0CB",
    icon: "🔗",
    courses: ["Leadership", "Software", "Creative Skills"]
  },
  {
    id: 11,
    title: "AWS Skill Builder",
    provider: "Amazon Web Services",
    link: "https://explore.skillbuilder.aws/learn/courses",
    color: "#FFD3B5",
    icon: "☁️",
    courses: ["Cloud Computing", "Machine Learning", "Architecture"]
  },
  {
    id: 12,
    title: "Alison",
    provider: "Free Certifications",
    link: "https://alison.com/",
    color: "#D4A5A5",
    icon: "🎯",
    courses: ["Healthcare", "IT", "Management"]
  },
  {
    id: 13,
    title: "Google Cloud Skills",
    provider: "Google Cloud",
    link: "https://cloud.google.com/training/free",
    color: "#B0C4DE",
    icon: "☁️",
    courses: ["Cloud Computing", "DevOps", "Data Analytics"]
  },
  {
    id: 14,
    title: "Harvard University",
    provider: "Free Courses",
    link: "https://pll.harvard.edu/catalog/free",
    color: "#FAA0A0",
    icon: "🏛️",
    courses: ["Computer Science", "Arts", "History"]
  },
  {
    id: 15,
    title: "Stanford Online",
    provider: "Free Courses",
    link: "https://online.stanford.edu/free-courses",
    color: "#B2FFD6",
    icon: "🏆",
    courses: ["Engineering", "Medicine", "Education"]
  }
];

function Certificate() {
  return (
    <div className="certificate-container">
      <div className="header-section">
        <h1 className="main-heading">
          <span className="heading-icon">📜</span>
          Free Certificate Resources
        </h1>
        <p className="sub-heading">
          Access 15+ platforms offering free certificates and courses
        </p>
        <div className="stats-banner">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Platforms</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Free Courses</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Free Access</span>
          </div>
        </div>
      </div>

      <div className="filters-section">
        <button className="filter-btn active">All Platforms</button>
        <button className="filter-btn">Tech & IT</button>
        <button className="filter-btn">Business</button>
        <button className="filter-btn">Design</button>
        <button className="filter-btn">Data Science</button>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="certificate-card"
            style={{ borderTop: `4px solid ${cert.color}` }}
          >
            <div className="card-header">
              <span className="card-icon">{cert.icon}</span>
              <h3 className="card-title">{cert.title}</h3>
              <span className="provider-badge">{cert.provider}</span>
            </div>
            
            <div className="card-body">
              <div className="courses-list">
                {cert.courses.map((course, index) => (
                  <span key={index} className="course-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
                style={{ backgroundColor: cert.color }}
              >
                <span className="btn-icon">🔗</span>
                Access Free Certificate
              </a>
              <button className="bookmark-btn" title="Save for later">
                <span className="bookmark-icon">🔖</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="info-section">
        <div className="info-card">
          <span className="info-icon">💡</span>
          <h4>100% Free Resources</h4>
          <p>All platforms listed offer free courses with certificates</p>
        </div>
        <div className="info-card">
          <span className="info-icon">🎯</span>
          <h4>Verified Certificates</h4>
          <p>Get recognized certificates from top universities and companies</p>
        </div>
        <div className="info-card">
          <span className="info-icon">⏰</span>
          <h4>Self-Paced Learning</h4>
          <p>Learn at your own pace with lifetime access to materials</p>
        </div>
      </div>
    </div>
  );
}

export default Certificate;