import Countries from "./Countries"
import Country from "./Country"

const Filter = ({ searchFilter, showCountries, setShowCountries }) => {
    if (searchFilter !== '') {
        const filtered = showCountries.filter(country => country.name.common.toLowerCase().includes(searchFilter.toLowerCase()))
        if (filtered.length == 1) {
            return (
                <Country country={filtered[0]}/>
            )
        }
        else if (filtered.length < 10) {
            return (
                <div>
                    {filtered.map(country => 
                        <Countries key={country.name.common} country={country}/>
                        )}
                </div>
            )
        }
            return (
                <div>
                    Too many matches, specify another filter
                </div>
            )
    }
    return (null)
}

export default Filter