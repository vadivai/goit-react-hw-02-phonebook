export const ContactsList = ({ items }) => {
  console.log('items :>> ', items);
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
