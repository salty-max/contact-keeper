import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactContext from '../../context/contact/contact.context';

import ContactItem from '../contact-item/contact-item.component';

const ContactsOverview = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length < 1) return <h4>No contacts to show yet...</h4>;

  const arrayToShow = filtered || contacts;

  return (
    <div className="contacts-overview">
      <TransitionGroup>
        {arrayToShow.map((contact) => (
          <CSSTransition key={contact.id} timeout={500} classNames="item">
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ContactsOverview;
