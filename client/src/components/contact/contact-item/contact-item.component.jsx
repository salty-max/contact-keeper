import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../../context/contact/contact.context';

const ContactItem = ({ contact }) => {
  const {
    id, name, email, phone, type,
  } = contact;
  const {
    deleteContact, setCurrent, clearCurrent, current,
  } = useContext(
    ContactContext,
  );

  const handleDelete = () => {
    deleteContact(id);
    current && contact.id === current.id && clearCurrent();
  };

  return (
    <div className="contact-item card is-light">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
        <span
          className={`tag ${type === 'personal' ? 'is-info' : 'is-success'}`}
        >
          {type}
        </span>
      </div>
      <div className="card-content">
        <ul className="">
          {email && (
            <li>
              <span className="icon mr">
                <i className="fas fa-envelope-open" />
              </span>
              <span>{email}</span>
            </li>
          )}
          {phone && (
            <li>
              <span className="icon mr">
                <i className="fas fa-mobile-alt" />
              </span>
              <span>{phone}</span>
            </li>
          )}
        </ul>
        <div className="actions">
          <button
            type="button"
            className="button is-small is-dark is-outlined"
            onClick={() => setCurrent(contact)}
          >
            <span className="icon">
              <i className="fas fa-pencil" />
            </span>
            <span>Edit</span>
          </button>
          <button
            type="button"
            className="button is-small is-danger is-outlined"
            onClick={handleDelete}
          >
            <span className="icon">
              <i className="fas fa-trash-alt" />
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
