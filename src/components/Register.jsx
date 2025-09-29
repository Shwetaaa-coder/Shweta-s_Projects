

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
