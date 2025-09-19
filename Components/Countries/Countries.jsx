import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([])
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        The Countries : {countries.length}
      </h1>
      <h2 style={{ textAlign: "center" }}>Total Visited Countries : {visitedCountries.length}</h2>
      <div className="lg:grid lg:grid-cols-3">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
