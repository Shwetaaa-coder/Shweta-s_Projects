


function Navbar({ user }) {
  return (
    <nav>
      {/* <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        
        {!user ? (
          <>
            <li><Link to="/auth">Login/Register</Link></li>
          </>
        ) : (
          <li>Welcome, {user.email}</li>
        )} */}
      
      {/* </ul> */}
      <h1>BOOK MANAGMENT SYSTEM </h1>
    </nav>
  );
}


const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#1976d2',
    padding: '10px 20px',
    color: 'white',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  
  h1:{
     display: 'flex',
    alignItems: 'center',
  }
};

export default Navbar;
