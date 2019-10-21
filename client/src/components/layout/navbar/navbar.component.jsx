/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth/auth.context';

const Navbar = ({ title, icon }) => {
  const { user } = useContext(AuthContext);
  return (
    <nav
      className="navbar is-black is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="https://bulma.io">
          <span className="icon">
            <i className={`fas fa-${icon}`} />
          </span>
          <span>{title}</span>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
        </div>
        <div className="navbar-end">
          <>
            {user ? (
              <>
                <div className="navbar-link">
                  Hello
                  {' '}
                  <span className="pl lead">{user.name}</span>
                </div>
                <div className="navbar-item">
                  <button type="button" className="button is-outlined is-danger">
                    <span className="icon">
                      <i className="fas fa-sign-out" />
                    </span>
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="navbar-item">
                  <Link to="/login" className="button is-outlined is-success">
                    <span className="icon">
                      <i className="fas fa-sign-in" />
                    </span>
                    <span>Login</span>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/register" className="button is-outlined is-light">
                    <span className="icon">
                      <i className="fas fa-user-plus" />
                    </span>
                    <span>Register</span>
                  </Link>
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'id-card',
};

export default Navbar;
