import React from 'react'
import PropTypes from 'prop-types'

const ContactItem = ({ id, name, email, phone, type }) => {
  return (
    <div className='contact-item card is-light'>
      <div className='card-header'>
        <h3 className='card-header-title'>{name}</h3>
        <span
          className={`tag ${type === 'personal' ? 'is-primary' : 'is-success'}`}
        >
          {type}
        </span>
      </div>
      <div className='card-content'>
        <ul className=''>
          {email && (
            <li>
              <span className='icon mr'>
                <i className='fas fa-envelope-open'></i>
              </span>
              <span>{email}</span>
            </li>
          )}
          {phone && (
            <li>
              <span className='icon mr'>
                <i className='fas fa-mobile-alt'></i>
              </span>
              <span>{phone}</span>
            </li>
          )}
        </ul>
        <div className='actions'>
          <button className='button is-small is-dark has-shadow'>
            <span className='icon'>
              <i className='fas fa-pencil'></i>
            </span>
            <span>Edit</span>
          </button>
          <button className='button is-small is-danger has-shadow'>
            <span className='icon'>
              <i className='fas fa-times'></i>
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  )
}

ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default ContactItem
