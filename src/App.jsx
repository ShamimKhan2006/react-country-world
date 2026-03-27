
import './App.css'
import Countries from './components/countries/Countries'
import { Suspense } from 'react'
const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all")
  return res.json()
}
function App() {
  const countryPromise = fetchCountries()

  return (
    <div className='mainDiv'>
      <h1>hellow World Project</h1>
      <Suspense fallback={<h2>Loading</h2>}>
        <Countries countryy={countryPromise}></Countries>
      </Suspense>

    </div>
  )
}

export default App
