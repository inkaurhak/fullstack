import { useState, useEffect } from 'react'
import dataService from './services/countries'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter.jsx'

const App = () => {
  const [showCountries, setShowCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    dataService
      .getAll()
      .then(initialData => {
        setShowCountries(initialData)
      })
  }, [])

  return (
  <div>
    <SearchBar searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
    <Filter searchFilter={searchFilter} showCountries={showCountries} setShowCountires={setShowCountries}/>
  </div>
  )
}

export default App