import React, { useContext } from 'react'

import ContactContext from '../../context/contact/contact.context'

import ContactItem from '../contact-item/contact-item.component'

const ContactsOverview = () => {
  const context = useContext(ContactContext)
  const { contacts } = context

  return (
    <div className='contacts-overview'>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  )
}

export default ContactsOverview
