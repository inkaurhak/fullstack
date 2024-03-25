import Country from "./Country"

const Countries = ({ country }) => {
    const handleClick = event => {
        event.preventDefault()
        return (
            <Country country={country}/>
        )
    }

    return (
        <div>
            {country.name.common}
            <button onClick={handleClick}>show</button>
        </div>
    )
}

export default Countries