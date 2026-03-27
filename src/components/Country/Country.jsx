import React from 'react'
import "./country.css"
const Country = ({country}) => {
const handle=() =>{
  console.log('click Button')
}
  return (
    <div className='border'>
     
      <img src={country.flags.flags.png} alt="" />
        <h2>name:{country.name.common}</h2>
       <p>region:   {country.region.region}</p> 
      <h3>Population {country.population.population}   {country.population.population >300000 ?"Big Country":"small Country"}</h3>
      <button onClick={handle}>Click</button>

    </div>
  )
}

export default Country
