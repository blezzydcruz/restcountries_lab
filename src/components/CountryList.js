import Country from "./Country"

const CountryList = ({countries, markedVisited}) => {
    const mappedCountries = countries.map(counrty => {
        return <Country country={counrty} key={counrty.name.common}  markedVisited={markedVisited}/> 
    })

    return(
        <>
            <ul>{mappedCountries}</ul>
        </>
    )
}

export default CountryList;

