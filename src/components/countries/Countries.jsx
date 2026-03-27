import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import "./countries.css"
const Countries = ({countryy}) => {

 const countryUse=use(countryy)
 const countryData=countryUse.countries
 console.log(countryData) 
    return (
        <div>
            <h2>Lets Start write the code {countryData.length}</h2>
            
       <div className="grid">
         {
            countryData.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
        }
       </div>
        </div>
    );
};

export default Countries;