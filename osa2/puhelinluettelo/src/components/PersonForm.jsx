import personService from '../services/persons'

const PersonForm = (props) => {

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: props.newName,
      number: props.newNumber
    }

    let stop = false
    for (const person of props.persons) {
      if (person.name.toLowerCase() == props.newName.toLowerCase()) {
        const change = props.persons.find(p => p.id == person.id)
        const changedNumber = { ...person, number: props.newNumber}
      
        if (window.confirm(`${props.newName} is already added to phonebook, replace the old number with a new one?`)) {
          personService
            .update(change.id, changedNumber)
            .then(returnedPerson => {
              props.setPersons(props.persons.map(person => person.id !== change.id ? person : returnedPerson))
            })
            .then(error => {
              props.setMessage(`${person.name} updated`)
              setTimeout(() => {
                props.setMessage(null)
              }, 5000)
            })
            // EI TOIMI
            .catch(error => {
              props.setErrorMessage(`Information of ${person.name} has already been removed from server`)
              setTimeout(() => {
                props.setErrorMessage(null)
              }, 5000)
            })
      }
      stop = true
      }
    }
    if (stop == false) {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          props.setPersons(props.persons.concat(returnedPerson))
        })
        .then(error => {
          props.setMessage(`${nameObject.name} added`)
          setTimeout(() => {
            props.setMessage(null)
          }, 5000)
        })
    }
    props.setNewName('')
    props.setNewNumber('')
  }

    const handleNameChange = (event) => {
      props.setNewName(event.target.value)
    }
  
    const handleNumberChange = (event) => {
      props.setNewNumber(event.target.value)
    }
  
    return (
      <form onSubmit={addName}>
          <div>
            name: <input value={props.newName} onChange={handleNameChange}/>
          </div>
          <div>
            number: <input value={props.newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

export default PersonForm