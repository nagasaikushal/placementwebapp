import React from 'react';

const KeyFeatures = () => {
  const features = [
    {
      title: "Job Listings",
      description: "Browse through hundreds of job openings from top companies, tailored to your skills and preferences.",
      imagePath: "/images/CareerPath.png"
    },
    {
      title: "Company Profiles",
      description: "Learn about potential employers, including their company culture, work environment, and values.",
      imagePath: "/images/CompanyProfiles.png"
    },
    {
      title: "Interview Preparation",
      description: "Access a wide range of resources, including practice questions and tips, to help you ace your interviews.",
      imagePath: "/images/InterviewPreparation.png"
    },
    {
      title: "Work Study Opportunities",
      description: "Engage in real-world projects and build your portfolio through work study programs, gaining practical experience.",
      imagePath: "/images/WorkStudy.png"
    },
    {
      title: "Work Performance Tracking",
      description: "Track your progress and performance over time, receiving continuous feedback to help you grow professionally.",
      imagePath: "/images/PerformanceTracking.png"
    },
    {
      title: "Contact Assistance",
      description: "Receive personalized support from our team, assisting you with queries and providing guidance throughout your journey.",
      imagePath: "/images/ContactAssistance.png"
    },
    {
      title: "Career Path Guidance",
      description: "Explore various career paths and receive expert advice on choosing the right one based on your skills and interests.",
      imagePath: "/images/CareerPath.png"
    },
    {
      title: "Career Counseling",
      description: "Benefit from one-on-one career counseling sessions, helping you make informed decisions about your career trajectory.",
      imagePath: "/images/CareerCounselling.png"
    }
  ];

  const sectionStyle = {
    padding: '40px 20px',
    backgroundColor: '#f0f2f5',
  };

  const titleStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '2em',
    color: '#333',
    textShadow: '2px 2px 5px #aaa',
    letterSpacing: '2px',
    textAlign: 'center',
    marginBottom: '30px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const featureItemStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  };

  const featureTitleStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const featureDescriptionStyle = {
    fontSize: '0.9em',
    color: '#666',
  };

  return (
    <section style={sectionStyle}>
      <h3 style={titleStyle}>Key Features</h3>
      <div style={gridStyle}>
        {features.map((feature, index) => (
          <div key={index} style={featureItemStyle}>
            <img 
              src={feature.imagePath} 
              alt={feature.title} 
              style={imageStyle}
            />
            <h4 style={featureTitleStyle}>{feature.title}</h4>
            <p style={featureDescriptionStyle}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
