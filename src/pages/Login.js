import React, { useState } from 'react';
import './Login.css';
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };


  return (
    <div className='signup'>
      <section className='section'>
        <div className='page-title'>
          <h3>Login</h3>
        </div>
        <div className='main'>

          <form className='form-control' onSubmit={handleSubmit}>
            <div className='error-msg'>{error}</div>
            <label>
              <span>Email</span>
              <input
                required
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                required
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>

            <button className='btn'>Login</button>

          </form>

        </div>
        <div className='message'>
          <p>Don't have an account? <Link to='/sigup'><button className='nav-btn'>Signup</button></Link></p>
        </div>


      </section>
    </div>
  )
}

export default Login