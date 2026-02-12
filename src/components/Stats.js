import React from 'react';
import './Stats.css';

function Stats() {
  const statsData = [
    { number: '10K+', label: 'Active Students', icon: '👨‍🎓' },
    { number: '500+', label: 'Hours of Content', icon: '⏱️' },
    { number: '50+', label: 'Expert Instructors', icon: '👨‍🏫' },
    { number: '95%', label: 'Success Rate', icon: '📈' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;