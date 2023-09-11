import { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const {name,flags,capital,cca3} = country;

    const [visited,setVisited] = useState(false);

    const handleVisited =()=>{
        setVisited(true);
    }
    const passWithParams= ()=> handleVisitedCountries(country);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name:{name?.common}</h3>
            <img src={flags.png}/>
            <h4>capital:{capital}</h4>

            <p><small>Code : {cca3}</small></p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>Visited</button>
            {visited ? 'I have visited this country':'i want to visited'}
            
        </div>
    );
};

export default Country;