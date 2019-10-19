import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contact.context';

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered } = useContext(ContactContext);
  const text = useRef('');

  useEffect(() => {
    if (!filtered) text.current.value = '';
  }, [filtered]);

  const handleChange = (e) => {
    text.current.value ? filterContacts(e.target.value) : clearFilter();
  };

  return (
    <div className="contact-filter mb">
      <div className="field">
        <div className="control">
          <input
            ref={text}
            className="input has-button"
            type="text"
            onChange={handleChange}
            placeholder="Search..."
          />
        </div>
      </div>
      <button type="button" className="button is-dark has-shadow">
        <span className="icon">
          <i className="fas fa-broom" />
        </span>
      </button>
    </div>
  );
};

export default ContactFilter;
