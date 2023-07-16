

export default function Card (country){
    return(
        <Link to={`/country/${country.id}`}>
            <figure>
                <img src={country.flag} alt=""/>
            </figure>
            <h2>{country.name}</h2>
            <p>População: {country.population}</p>
            <p>Região: {country.region}</p>
            <p>Capital: {country.capital}</p>
        </Link>
    )
}
