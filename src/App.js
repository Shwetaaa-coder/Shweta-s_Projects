// import React from 'react';
// import Navbar from './components/Navbar';
// import AuthPage from './components/AuthPage';
// import Main from './components/Main';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//     <Navbar />
//       <Main>
//         <AuthPage />
//       </Main>
//       <Footer />
//     </>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
// import Home from './components/Home';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <>
      <Navbar user={user} />
      <Main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/auth"
            element={<AuthPage onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
