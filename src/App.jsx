import { Suspense } from 'react'
import Countries from '../Components/Countries/Countries'
import './App.css'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())
function App() {

  return (
    <>
    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, natus?</p> */}
     <Suspense fallback={<p>Loading.....</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
     </Suspense>
    </>
  )
}

export default App
