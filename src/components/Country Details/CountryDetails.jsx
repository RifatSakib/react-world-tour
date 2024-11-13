import CountryData from "../Country Data/CountryData";

// method 1

// const CountryDetails = ({ countryProp,handleVisitedCountryProp,handleVisitedFlagsProp }) => {

    // method 2
    
    const CountryDetails = (props) => {

    const { countryProp,handleVisitedCountryProp,handleVisitedFlagsProp } = props;
    return (
        <div>
            <h4>Country Details</h4>

            {/*  method 1 */}

            {/* <CountryData
            
            countryProp = {countryProp}
            handleVisitedCountryProp = {handleVisitedCountryProp}
            handleVisitedFlagsProp = {handleVisitedFlagsProp}
            
            ></CountryData> */}

            {/* method 2 */}

            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetails;