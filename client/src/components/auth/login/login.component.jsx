import React, { useState } from 'react';
import FormInput from '../../helpers/form-input/form-input.component';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('User', user);
  };

  const { email, password } = user;

  return (
    <div className="login-page">
      <h1 className="title">Login</h1>
      <div className="card p-1 pt-0">
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              icon="envelope-open"
              handleChange={handleChange}
              value={email}
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              icon="key"
              handleChange={handleChange}
              value={password}
            />
            <button type="submit" className="button is-primary has-shadow">
              <span className="icon">
                <i className="fas fa-check"></i>
              </span>
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
