import Person from './Person'

const Persons = (props) => {
    const numbersToShow = props.nameFilter.length == 0
      ? props.persons
      : props.persons.filter(person => person.name.toLowerCase().includes(props.nameFilter.toLowerCase()))
  
    return (
      <div>
          {numbersToShow.map(person =>
            <Person key={person.id} person={person} deleteNumber={props.deleteNumber}/>
            )}
        </div>
    )
  }

export default Persons