import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}

export default Register;