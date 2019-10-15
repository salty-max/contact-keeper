import React from 'react'

import ContactsOverview from '../../components/contacts-overview/contacts-overview.component'
import ContactForm from '../../components/contact-form/contact-form.component'

const HomePage = () => {
  return (
    <div className='home grid-2 gap-large'>
      <div>
        <ContactForm />
      </div>
      <ContactsOverview />
    </div>
  )
}

export default HomePage
