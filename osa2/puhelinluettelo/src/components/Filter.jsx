const Filter = (props) => {
    const handleNameFilter = (event) => {
      props.setNameFilter(event.target.value)
    }
  
    return (
      <div>
        filter shown with <input value={props.nameFilter} onChange={handleNameFilter}/>
      </div>
    )
  }

export default Filter