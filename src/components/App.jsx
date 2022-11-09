import React, { Component } from "react";

import { nanoid } from "nanoid";

import style from './App.module.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

    onFormSubmit = (e) => {
      e.preventDefault();
      let alredyContact = null;
      const form = e.target;
      const name = form.elements.name.value;
      this.state.contacts.forEach(contact => {
        if (contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
          alredyContact = true;
        }
      })

      if (alredyContact) {
        return alert(`${name} is already in contacts`);
      }
      const number = form.elements.number.value;
      const id = nanoid();
      const newContact = {
        id: id,
        name: name,
        number: number,
      }
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }))
    }

    onFilter = (e) => {
        this.setState({filter: e.target.value})
    }

    getSearchContact = () => {
      const normalizedSearchContacts = this.state.filter.toLowerCase();
      return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedSearchContacts))
    }
    onDeleteContact = (id) => {
      this.setState(prevState => ({
        ...prevState,
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }))
    }


    render() {
      const actuallyContacts = this.getSearchContact();

      return <div className={style.container}>
       <h1>Phonebook</h1>
       <ContactForm
        onSubmitFunction={this.onFormSubmit} />

      <Filter 
      onFilter={this.onFilter} />

      <h2>Contacts</h2>

      <ContactList 
        contact={actuallyContacts}
        onDeleteContact={this.onDeleteContact} />
      </div>
    }
};