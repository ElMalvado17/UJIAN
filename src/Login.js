import React from 'react';

function Login() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" name="username" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;