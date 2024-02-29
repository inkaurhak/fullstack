import { useState, useEffect } from 'react'
import './index.css'
import personService from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const deleteNumber = (id) => {
    const person = persons.find(p => p.id == id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteNumber(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .then(error => {
          setMessage(`${person.name} deleted`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} errorMessage={errorMessage}/>

      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter}/>

      <h3>add a new</h3>

      <PersonForm 
        persons={persons} setPersons={setPersons} 
        newName={newName} setNewName={setNewName} 
        newNumber={newNumber} setNewNumber={setNewNumber}
        message={message} setMessage={setMessage}
        errorMessage={errorMessage} setErrorMessage={setErrorMessage}
      />
      
      <h3>Numbers</h3>

      <Persons persons={persons} nameFilter={nameFilter} deleteNumber={deleteNumber}/>
    </div>
  )
}

export default App