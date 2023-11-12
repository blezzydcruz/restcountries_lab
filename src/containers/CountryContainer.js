import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
        loadData();
    }, []);

    const markVisited = (countryName) => {
        const updatedList = [...visitedCountries, countryName]
        setVisitedCountries(updatedList)
    }

    return(
        <>
        
            <h1>Country Bucket List</h1>
            { countries ? <CountryList countries={countries} markedVisited={markVisited}/> : <p>loading...</p> }

            <h2>Visited Countries</h2>
            <ul>
                {visitedCountries.map(country => <li key={country}>{country}</li>)} 
            </ul>

        </>
    )
}

export default CountryContainer;
