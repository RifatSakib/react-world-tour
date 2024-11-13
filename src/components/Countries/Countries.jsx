import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]) //for count how many countries
    console.log("countries: ", countries); // output 1 array of 250 objects

    const [visitedCountries, setVisitedCountries] = useState([]); //for visited country


    const [visitedFlags, setVisitedFlags] = useState([]); // for visited flag


    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');

        // console.log(country);

        // visitedCountries.push(country);// eta kaaj kore na karon zokhon kono state a direct array thake setake push,pop diye udate kora zaay na. eta react er ekta kaj. react state er array ke immutable kore fele.fole aage array take copy kore then seta niye kaaj kora lagbe


        const newVisitedCountries = [...visitedCountries, country];

        setVisitedCountries(newVisitedCountries);
    }


    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    // remove item from an array in a state

    // use filter to select all the elements except the one you want to remove


    return (
        <div >
            {/* <h3>Countries:{countries.name.official} </h3> */}
            <h3>Countries:{countries.length} </h3>



            {/* Display Visited Countries */}
            <div>
                <h2>Visited Countries:{visitedCountries.length} </h2>
                <ul>
                    {
                        visitedCountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>



            {/* Display All Countries */}

            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca2} countryProp={country} handleVisitedCountryProp={handleVisitedCountry} handleVisitedFlagsProp={handleVisitedFlags} > </Country>)
                }

            </div>


        </div>
    );
};

export default Countries;