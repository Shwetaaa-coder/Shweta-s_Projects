import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '15px 10px',
    backgroundColor: '#1976d2',
    color: 'white',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: 'auto',
  },
};

export default Footer;
