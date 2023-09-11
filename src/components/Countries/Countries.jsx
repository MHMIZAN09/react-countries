import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';
const Countries = () => {
    const [countries,setCountries]= useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data))
    },[])

    const handleVisitedCountries= country =>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div >

            <h3>Counties:{countries.length}</h3>
            <div>
                <h5>Visited countries:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag) => <img  src={flag}></img>)
                }
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;