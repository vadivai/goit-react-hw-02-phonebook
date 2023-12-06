import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from 'components/ContactsList/ContactsList.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { Section } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isExistContact = contacts.find(contact => {
      return contact.name.toLowerCase().includes(newContact.name.toLowerCase());
    });

    if (isExistContact) {
      return alert(`${newContact.name} is already in contacts`);
    }

    return this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      };
    });
  };

  filterContacts = newFilter => {
    this.setState({ filter: newFilter });
  };

  deleteContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== idContact),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredItems = contacts.filter(item => {
      const hasName = item.name.toLowerCase().includes(filter.toLowerCase());
      return hasName;
    });

    return (
      <>
        <Section>
          <h2>Phonebook</h2>
          <FormAddContact onAddContact={this.addContact} />
        </Section>
        <Section>
          <h3>Contacts</h3>
          <Filter filter={this.state.filter} onFilter={this.filterContacts} />
          <Wrapper>
            {filteredItems.length > 0 && (
              <ContactsList items={filteredItems} onDelete={this.deleteContact}>
                ContactsList
              </ContactsList>
            )}
          </Wrapper>
        </Section>
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
