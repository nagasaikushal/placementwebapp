import React from 'react';
import './home.css';

const KeyFeatures = () => {
  return (
    <section className="features">
      <h3 style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '2em',
        color: '#333',
        textShadow: '2px 2px 5px #aaa',
        letterSpacing: '2px'
      }}>
        Key Features
      </h3>
      <div className="feature-grid">
        <div className="feature-item">
          <h4>Job Listings</h4>
          <p>Browse through hundreds of job openings from top companies, tailored to your skills and preferences.</p>
        </div>
        <div className="feature-item">
          <h4>Company Profiles</h4>
          <p>Learn about potential employers, including their company culture, work environment, and values.</p>
        </div>
        <div className="feature-item">
          <h4>Interview Preparation</h4>
          <p>Access a wide range of resources, including practice questions and tips, to help you ace your interviews.</p>
        </div>
        <div className="feature-item">
          <h4>Work Study Opportunities</h4>
          <p>Engage in real-world projects and build your portfolio through work study programs, gaining practical experience.</p>
        </div>
        <div className="feature-item">
          <h4>Work Performance Tracking</h4>
          <p>Track your progress and performance over time, receiving continuous feedback to help you grow professionally.</p>
        </div>
        <div className="feature-item">
          <h4>Contact Assistance</h4>
          <p>Receive personalized support from our team, assisting you with queries and providing guidance throughout your journey.</p>
        </div>
        <div className="feature-item">
          <h4>Career Path Guidance</h4>
          <p>Explore various career paths and receive expert advice on choosing the right one based on your skills and interests.</p>
        </div>
        <div className="feature-item">
          <h4>Career Counseling</h4>
          <p>Benefit from one-on-one career counseling sessions, helping you make informed decisions about your career trajectory.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
