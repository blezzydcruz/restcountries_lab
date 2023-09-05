const Country = ({ country, markedVisited }) => {

    return(
    
        <li>
            <strong>{country.name.common}</strong> <br />
            {/* Capital: {country.capital} <br />
            Currency: {country.currencies} <br /> 
            Region: {country.region} <br />
                
            <a href={`https://www.google.com/maps/place/${country.name.common}`} >Google Maps</a> */}
            <button style={{marginLeft: "10px"}} onClick={() => markedVisited(country.name.common)}>Visited</button>
        </li>
        
    )
}

export default Country;
