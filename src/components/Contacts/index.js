import { useState } from 'react'
import List from './List';
import Form from './Form'
import './styles.css'


function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123"
    },
    {
      fullname: "Ayşe",
      phone_number: "456457"
    },
    {
      fullname: "Nazlı",
      phone_number: "987659"
    }
  ]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;