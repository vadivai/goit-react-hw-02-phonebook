import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ContactsItem item={item} />
      ))}
    </ul>
  );
};
