import React, { useState } from 'react';
import lemonLogo from '../assets/Logo.svg'; // Import the image
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    const data ={
        Email:email,
        Password:password,
    }
    axios.post('https://sheet.best/api/sheets/d5438a2b-2f41-4a06-8882-387205645a4d', data).then((response)=>
    {console.log(response);
      setEmail('');
      setPassword('');
    })
  };



  return (
    <div className="container mt-8">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-4">
              <h2 className="text-primary card-title text-center mb-4">Login</h2>
                <img src={lemonLogo} alt="Little Lemon Restaurant" style={{ maxWidth: '200px' }} />
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
