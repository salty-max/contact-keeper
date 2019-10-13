import React, { useReducer } from 'react'
import logger from 'use-reducer-logger'
import uuid from 'uuid'

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'
import ContactContext from './contact.context'
import ContactReducer from './contact.reducer'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@test.me',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@test.me',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Albus Dumbledore',
        email: 'albus@hogwarts.co.uk',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
  }

  const [state, dispatch] = useReducer(
    process.env.NODE_ENV === 'development'
      ? logger(ContactReducer)
      : ContactReducer,
    initialState
  )

  // TODO: Actions

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
