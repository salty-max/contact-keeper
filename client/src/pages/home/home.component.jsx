import React from 'react';

import ContactsOverview from '../../components/contact/contacts-overview/contacts-overview.component';
import ContactForm from '../../components/contact/contact-form/contact-form.component';
import ContactFilter from '../../components/contact/contact-filter/contact-filter.component';

const HomePage = () => (
  <div className="home grid-2 gap-large">
    <div>
      <ContactForm />
    </div>
    <div>
      <ContactFilter />
      <ContactsOverview />
    </div>
  </div>
);

export default HomePage;
