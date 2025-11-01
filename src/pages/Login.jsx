import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login here
    console.log('Login submitted:', formData);
    alert('Login functionality will be implemented soon!');
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Handle password reset here
    console.log('Password reset requested for:', resetEmail);
    alert('Password reset email will be sent!');
    setShowResetPassword(false);
    setResetEmail('');
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          {showResetPassword ? (
            <>
              <h1 className="auth-title">Reset your password</h1>
              <p className="auth-subtitle">We will send you an email to reset your password</p>
              <form className="auth-form" onSubmit={handleResetSubmit}>
                <div className="form-group">
                  <label htmlFor="reset-email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="reset-email"
                    name="resetEmail"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="auth-button">Submit</button>
                  <button
                    type="button"
                    className="auth-button cancel-button"
                    onClick={() => setShowResetPassword(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="auth-title">Login</h1>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-options">
                  <button
                    type="button"
                    className="forgot-password-link"
                    onClick={() => setShowResetPassword(true)}
                  >
                    Forgot your password?
                  </button>
                </div>
                <div className="form-actions">
                  <button type="submit" className="auth-button">Sign in</button>
                </div>
                <div className="auth-footer">
                  <p>
                    Don't have an account? <Link to="/register" className="auth-link">Create account</Link>
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

