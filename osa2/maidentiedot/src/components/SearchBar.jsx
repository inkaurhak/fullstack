const SearchBar = ({ searchFilter, setSearchFilter }) => {
    
    const handleSearchFilter = (event) => {
        setSearchFilter(event.target.value)
    }

    return (
        <div>
            find countries <input value={searchFilter} onChange={handleSearchFilter}/>
        </div>
    )
}

export default SearchBar