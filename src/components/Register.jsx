// // src/components/Register.jsx
// import React, { useState } from 'react';

// const Register = ({ onSuccess }) => {
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
//   const [msg, setMsg] = useState('');

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (!res.ok) return setMsg(data.msg || 'Registration failed');

//       setMsg('✅ Registered successfully! You can now log in.');
//       setForm({ name: '', email: '', password: '', role: 'user' });

//       if (onSuccess) onSuccess();  // <-- here
//     } catch (err) {
//       setMsg('❌ Server error. Try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//         <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//         <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
//         <button type="submit">Register</button>
//       </form>
//       <p>{msg}</p>
//     </div>
//   );
// };

// export default Register;

// // import React, { useState } from 'react';

// // const Register = () => {
// //   const [form, setForm] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     role: 'user',
// //   });
// //   const [msg, setMsg] = useState('');
// //   const [registered, setRegistered] = useState(false); // new state

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await fetch('/api/auth/register', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await res.json();
// //       if (!res.ok) {
// //         setMsg(data.msg || 'Registration failed');
// //         return;
// //       }

// //       setMsg('✅ Registered successfully! You can now log in.');
// //       setRegistered(true); // mark as registered
// //       setForm({ name: '', email: '', password: '', role: 'user' });
// //     } catch (err) {
// //       setMsg('❌ Server error. Try again later.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           name="name"
// //           placeholder="Name"
// //           value={form.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="email"
// //           placeholder="Email"
// //           value={form.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="password"
// //           placeholder="Password"
// //           type="password"
// //           value={form.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button type="submit">Register</button>
// //       </form>

// //       <p>{msg}</p>

// //       {registered && (
// //         <button onClick={() => window.location.href = '/login'}>
// //           Go to Log In
// //         </button>
// //       )}
// //     </div>
// //   );
// // };

// // export default Register;



import React from 'react';

const Register = ({ onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered successfully! Calling onSuccess');
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <input name="password" placeholder="Password" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
