import React, { useState } from "react";
import { use } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countryy }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    const handlevisitedCountries = (country) => {
        console.log("handle click", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const handleVisitedFlags = (flag) => {
        console.log("add visited Flags", flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    };
    const countryUse = use(countryy);
    const countryData = countryUse.countries;

    return (
        <div>
            <h2>World Countries {countryData.length}</h2>
            <h3>Total visited Countries:{visitedCountries.length}</h3>
            <h3>total visited Flags:{visitedFlags.length}</h3>
            <ol>
                {visitedCountries.map((country) => (
                    <li>{country.name.common}</li>
                ))}
            </ol>
            <div className="flag">
                {visitedFlags.map((flag,index) => (
                    <img   key={index}src={flag}></img>
                ))}
            </div>

            <div className="grid">
                {countryData.map((country) => (
                    <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handlevisitedCountries={handlevisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
