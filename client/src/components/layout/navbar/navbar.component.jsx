/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ title, icon }) => {
  return (
    <nav
      className='navbar is-dark'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <span className='icon'>
            <i className={`fas fa-${icon}`} />
          </span>
          <span>{title}</span>
        </a>

        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <a href='/' className='navbar-item'>
            Home
          </a>
          <a href='/about' className='navbar-item'>
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'address-book',
}

export default Navbar
