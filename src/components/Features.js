// import React from 'react';
// import './Features.css';

function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Project-Based Learning',
      description: 'Build real-world projects that employers value'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Mentorship',
      description: 'Get guidance from industry professionals'
    },
    {
      icon: '📱',
      title: 'Flexible Learning',
      description: 'Learn at your own pace, anytime, anywhere'
    },
    {
      icon: '🤝',
      title: 'Career Support',
      description: 'Resume reviews, interview prep, job placement'
    },
    {
      icon: '🏆',
      title: 'Certification',
      description: 'Industry-recognized certificates upon completion'
    },
    {
      icon: '💬',
      title: 'Community',
      description: 'Join a network of passionate learners'
    }
  ];

  return (
    <section className="features-section">
      <div className="section-header">
        <h2 className="section-title">Why Choose CodeCraft?</h2>
        <p className="section-subtitle">Everything you need to succeed in tech</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;