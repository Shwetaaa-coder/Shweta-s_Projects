import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function AuthPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Register</button>
      </div>
      {isLogin ? (
        <Login onLoginSuccess={onLoginSuccess} />
      ) : (
        <Register />
      )}
    </div>
  );
}

export default AuthPage;
