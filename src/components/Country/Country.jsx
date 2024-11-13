import { useState } from 'react';
import './Country.css'
import CountryDetails from '../Country Details/CountryDetails';

const Country = ({ countryProp,handleVisitedCountryProp,handleVisitedFlagsProp }) => {
    // console.log("countryProp: ",countryProp);// output 250 objects individual
    const { name, flags, population, area, cca3 } = countryProp;

    const [visited, setvisited] = useState(false)

    const handleVisited = () => {
        setvisited(!visited); // for toggling
    }

    // console.log(handleVisitedCountryProp);

    // const passWithParams = () =>{
    //     handleVisitedCountryProp(countryProp)

    // }



    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited? 'Purple':'white'}}>Common name: {name.common} </h3>
            <h3 >Official name: {name.official}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p> <small>Code: {cca3}</small></p>

            <button onClick={()=>handleVisitedCountryProp(countryProp)}>Mark visited:</button>
            <br />
            <button onClick={()=>handleVisitedFlagsProp(countryProp.flags.png)}>Flag visited:</button>
            <br />
            <button onClick={handleVisited} >{visited? 'visited': 'going'}</button>
                        
            
            
            {/* {
                visited && 'I have visited this country'
            } */}

            {
                visited ? ' I have visited this country' : " I want to visit"
            }

            <hr />
            {/* optional part. Context api na use korle ze props bar bar use kora lage ta bujhanor jonno eta kora hoise */}
            <CountryDetails 
            
            countryProp = {countryProp}
            handleVisitedCountryProp = {handleVisitedCountryProp}
            handleVisitedFlagsProp = {handleVisitedFlagsProp}
            
            ></CountryDetails>
        </div>
    );
};

export default Country;