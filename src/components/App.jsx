import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkingForMatches = (value) => {
    return (
      contacts.some((el) => (el.name.toLowerCase() === value.toLowerCase()))
    )
  };

  const handleDeleteContact = ({target: {id}}) => {
    const index = contacts.findIndex((el) => el.id === id);
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const { target: { name, number } } = evt;

    if (checkingForMatches(name.value)) {
      alert(`${name.value} is already in contacts`);
      return
    };

    const newContacts = [...contacts];
    newContacts.push({ id: nanoid(), name: name.value, number: number.value})
    setContacts(newContacts);

    name.value = '';
    number.value = '';
  };

  const handleChangeInputFilter = (evt) => {
    const { target: { value } } = evt;
    setFilter(value);
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter((el) => (el.name.toLowerCase().includes(filter.toLowerCase())));
  }, [contacts, filter]);


  return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form submit={handleSubmitForm}/>
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={filter}
          change={handleChangeInputFilter}
        />
        <ContactsList
          contacts={filteredContacts}
          deleteContact={handleDeleteContact}
        />
      </div>
    );
}