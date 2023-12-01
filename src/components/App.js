import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <FormAddContact onAddContact={this.addContact} />
        <h3>Contacts</h3>
        <ContactsList items={this.state.contacts}>ContactsList</ContactsList>
      </>
    );
  }
}

// handleSubmit = evt => {
//   evt.preventDefault();
//   const form = evt.currentTarget;
//   const name = form.elements.name;
//   console.log('form :>> ', form);
//   console.log(':>> ', form.elements);
//   // this.props.onSubmit({ name, tel });
//   form.reset();
// };
