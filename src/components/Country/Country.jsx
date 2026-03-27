import React from 'react'
import "./country.css"
import { useState } from 'react'

const Country = ({ country, handlevisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false)

  const handle = () => {
    setVisited(!visited)
    handlevisitedCountries(country)
  }
  return (
    <div className={`border ${visited && "country-visited"}`}>

      <img src={country.flags.flags.png} alt="" />
      <h2>name:{country.name.common}</h2>
      <p>region:   {country.region.region}</p>
      <h3>Population {country.population.population}   {country.population.population > 300000 ? "Big Country" : "small Country"}</h3>
      <button onClick={handle}>{visited ? "  Visited" : " Not Visited"}</button>
      <button onClick={() => handleVisitedFlags(country.flags.flags.png)}>Add visited Flags</button>

    </div>
  )
}

export default Country
