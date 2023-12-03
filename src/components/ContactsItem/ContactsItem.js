export const ContactsItem = ({ item }) => {
  return (
    <li key={item.id}>
      <p>
        {item.name} {item.number}
      </p>
    </li>
  );
};
