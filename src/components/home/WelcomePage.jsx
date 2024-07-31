import React from 'react';
import KeyFeatures from './KeyFeatures';

const WelcomePage = () => {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Welcome to Your Future</h2>
        <p style={styles.heroSubtitle}>Connecting students with leading companies for exciting career opportunities.</p>
        <button style={styles.ctaButton}>Get Started</button>
      </section>
      <KeyFeatures />
    </main>
  );
};

const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  },
  hero: {
    background: 'linear-gradient(135deg, #4b79a1, #283e51)',
    color: 'white',
    textAlign: 'center',
    padding: '50px 20px',
    borderRadius: '10px',
    margin: '20px 0',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  heroTitle: {
    fontSize: '2.5em',
    margin: '0 0 10px 0',
    letterSpacing: '1px',
  },
  heroSubtitle: {
    fontSize: '1.2em',
    margin: '0 0 20px 0',
  },
  ctaButton: {
    backgroundColor: '#ff6f61',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1.1em',
    borderRadius: '25px',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
  },
};

export default WelcomePage;
