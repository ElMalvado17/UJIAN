import React from 'react';

function Register() {
  return (
    <div className="register-page">
      <h2>Register</h2>
      <form>
        <label>Username:</label>
        <input type="text" name="username" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;