import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin123@gmail.com' && password === 'admin') {
      alert('You have successfully logged in!');
      login();
      navigate('/home');
    } else {
      alert('Login failed. Please check your email and password.');
    }
  };

  return (
    <div style={{ textAlign: 'center', width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <div>
        <h2>Login to continue</h2>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="Email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="Password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
