import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors.js';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => {
        const randomColor = getRandomHexColor();
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            randomColor={randomColor}
          />
        );
      })}
    </Contacts>
  );
}

export default ContactList;
