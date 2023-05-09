// src/App
import { useState } from 'react';
import './App.css'
import contacts from './contacts.json'

function App() {
  const [firstFive, setfirstFive] = useState(contacts.slice(0,5));

  const addRandomContact = () =>{
    const remainingContacts = contacts.filter(eachContact => {
      return (!firstFive.includes(eachContact))
    })
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const newContact = remainingContacts[randomIndex]
    
    setfirstFive([...firstFive, newContact])
    console.log(firstFive)
  }

  const sortbyPopularity = () => {
    const sortedArray = [...firstFive].sort((a, b) => b.popularity - a.popularity);
    setfirstFive(sortedArray);
  };

  const sortbyName = () => {
    const sortedArrayName = [...firstFive].sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
    })
    setfirstFive(sortedArrayName);
  };
  


  return (
  <div className='App'>
    <h1>Iron Contacts</h1>
    <button type='button' onClick={addRandomContact}>Add random contact</button>
    <button type='button' onClick={sortbyPopularity}>Sort by popularity</button>
    <button type='button' onClick={sortbyName}>Sort by name</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      <tbody>
          {firstFive.map((eachContact)=>{
            return(
              <tr>
              <td><img src={eachContact.pictureUrl} alt='pic' /></td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity.toFixed(2)}</td>
              
              {eachContact.wonOscar && (
                <td>🏆</td>
              )}
              {!eachContact.wonOscar && (
                  <td></td>
                )}

                {eachContact.wonEmmy && (
                <td>🏆</td>
              )}
              {!eachContact.wonEmmy && (
                  <td></td>
                )}
            </tr>
            )
          })}
      </tbody>
    </table>
  </div>
  )
}
export default App