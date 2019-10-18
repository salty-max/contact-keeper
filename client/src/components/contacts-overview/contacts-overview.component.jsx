import React, { useContext } from 'react'

import ContactContext from '../../context/contact/contact.context'

import ContactItem from '../contact-item/contact-item.component'

const ContactsOverview = () => {
  const { contacts, filtered } = useContext(ContactContext)

  if (contacts.length < 1) return <h4>No contacts to show yet...</h4>

  return (
    <div className='contacts-overview'>
      {filtered
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </div>
  )
}

export default ContactsOverview
