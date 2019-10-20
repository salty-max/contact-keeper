import React, { useReducer } from 'react';
import logger from 'use-reducer-logger';
import PropTypes from 'prop-types';

import uuid from 'uuid';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

import ContactContext from './contact.context';
import ContactReducer from './contact.reducer';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@test.me',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: '2',
        name: 'Jane Doe',
        email: 'jane@test.me',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: '3',
        name: 'Albus Dumbledore',
        email: 'albus@hogwarts.co.uk',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(
    process.env.NODE_ENV !== 'production'
      ? logger(ContactReducer)
      : ContactReducer,
    initialState,
  );

  const addContact = (contact) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        id: uuid.v4(),
        ...contact,
      },
    });
  };

  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

ContactState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContactState;
