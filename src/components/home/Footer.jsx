import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2024 Campus Placement Portal. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2b2b2b', // Dark gray color
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    position: 'relative',
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '1em',
    letterSpacing: '1px',
  },
};

export default Footer;
