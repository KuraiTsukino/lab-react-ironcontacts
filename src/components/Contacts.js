import React, { useState } from "react";
import Contact from "./Contact";
import contacts from "./../contacts.json";


const Contacts = () => {
  const data = contacts.slice(0, 5);

  const [addContact, setAddContact] = useState(data);
  const random = Math.floor(Math.random() * contacts.length);
    
  // Random
  const generateRandomContact = () => {
    setAddContact([...addContact, contacts[random]]);
  };
  
  // Crear un nuevo array porque sort Muta el array
  const [sortContact, setSortContact] = useState(addContact);

  const sortByName = () => {
    console.log("name");
    //ordenar alfabeticamente
    setSortContact([
      sortContact
        .sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          if (a.name === 0) return 0;
        })
        .reverse(),
    ]);
  };

  const sortByPopularity = () => {
    console.log("popularity");
    setSortContact([sortContact.sort((a, b) => b.popularity - a.popularity)]);
    console.log(sortContact);
  };

  return (
    <>

      <h1>Change Contacts</h1>
      <button onClick={() => generateRandomContact()}>Random Contacts</button>
      <h1>Sort</h1>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity </button>

      {addContact.map(({ name, pictureUrl, popularity, id }) => {
        return (
          <Contact
            key={id}
            name={name}
            pictureUrl={pictureUrl}
            popularity={popularity}
          />
        );
      })}
    </>
  );
};

export default Contacts;