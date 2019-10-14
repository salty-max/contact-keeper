import React from 'react'

import ContactsOverview from '../../components/contacts-overview/contacts-overview.component'

const HomePage = () => {
  return (
    <div className='home grid-2'>
      <div>
        <h1>Contact form</h1>
      </div>
      <ContactsOverview />
    </div>
  )
}

export default HomePage
