import React, { useState, useContext, useEffect } from 'react'
import FormInput from '../form-input/form-input.component'

import ContactContext from '../../context/contact/contact.context'

const ContactForm = () => {
  const { addContact, updateContact, clearCurrent, current } = useContext(
    ContactContext
  )

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  })

  useEffect(() => {
    if (current) setContact(current)
    else
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      })
  }, [current])

  const { name, email, phone, type } = contact

  const handleChange = e => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    current ? updateContact(contact) : addContact(contact)
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    })
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='name'
        placeholder='Name'
        icon='user'
        value={name}
        handleChange={handleChange}
      />
      <FormInput
        type='email'
        name='email'
        className='input'
        placeholder='Email'
        icon='envelope'
        value={email}
        handleChange={handleChange}
      />
      <FormInput
        type='phone'
        name='phone'
        className='input'
        placeholder='Phone number'
        icon='mobile-alt'
        value={phone}
        handleChange={handleChange}
      />
      <div className='field'>
        <div className='control'>
          <label className='radio'>
            <input
              type='radio'
              name='type'
              value='personal'
              checked={type === 'personal'}
              onChange={handleChange}
            />
            Personal
          </label>
          <label className='radio'>
            <input
              type='radio'
              name='type'
              value='professional'
              checked={type === 'professional'}
              onChange={handleChange}
            />
            Professional
          </label>
        </div>
      </div>
      <>
        {current ? (
          <>
            <button
              type='submit'
              className='button is-warning is-fullwidth has-shadow mb-1'
            >
              <span className='icon'>
                <i className='fas fa-user-edit'></i>
              </span>
              <span>Update contact</span>
            </button>
            <button
              className='button is-dark is-fullwidth has-shadow'
              onClick={clearAll}
            >
              <span className='icon'>
                <i className='fas fa-broom'></i>
              </span>
              <span>Clear</span>
            </button>
          </>
        ) : (
          <button
            type='submit'
            className='button is-primary is-fullwidth has-shadow'
          >
            <span className='icon'>
              <i className='fas fa-user-plus'></i>
            </span>
            <span>Add contact</span>
          </button>
        )}
      </>
    </form>
  )
}

export default ContactForm
