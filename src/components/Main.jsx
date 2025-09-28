import React from 'react';


const Main = ({ children }) => {
  return (
    <main style={styles.main}>
      {children}
    </main>
  );
};

const styles = {
  main: {
    minHeight: '70vh',  // takes most of vertical space
    padding: '20px',
    backgroundColor: '#f5f5f5',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default Main;
