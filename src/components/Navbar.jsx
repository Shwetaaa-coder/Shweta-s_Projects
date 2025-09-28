
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <div style={styles.logo}>MyApp</div>
//       <ul style={styles.navLinks}>
//         <li><Link to="/" style={styles.link}>Home</Link></li>
//         <li><Link to="/register" style={styles.link}>Register</Link></li>
//         <li><Link to="/login" style={styles.link}>Login</Link></li>
//         <li><Link to="/profile" style={styles.link}>Profile</Link></li>
//       </ul>
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     background: '#1976d2',
//     padding: '10px 20px',
//     color: 'white',
//   },
//   logo: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//   },
//   navLinks: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '20px',
//   },
//   link: {
//     color: 'white',
//     textDecoration: 'none',
//     fontWeight: '500',
//   },
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user }) {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/">Home</Link></li>
        {!user ? (
          <>
            <li><Link to="/auth">Login/Register</Link></li>
          </>
        ) : (
          <li>Welcome, {user.email}</li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
