import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from './Button';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = event => {
    console.log(event.target);
    // return <p>{name}</p>;
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <FormAddContact />
        <h3>Contacts</h3>
        <ListContacts />
      </div>
    );
  }
}
