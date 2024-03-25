const Country = ({ country }) => {   
    const languages = []
    let i=0
    for (const key in country.languages) {
        if (country.languages.hasOwnProperty(key)) {
            i+=1
            languages[i] = {
                id: i,
                name: country.languages[key]
            }
        }
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>
                capital {country.capital}
            </div>
            <div>
                area {country.area}
            </div>
            <p><strong>languages:</strong></p>
            <ul>
                {languages.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <img src={country.flags.png}/>
        </div>
    )
}

export default Country