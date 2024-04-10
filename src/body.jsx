import React, { useState } from "react";
import Data from './data.json';
import './body.css';

export default function Body() {
    const [selectedRegion, setSelectedRegion] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    
    function options() {
        const regions = [...new Set(Data.map(country => country.region))];
        return regions.map((region, index) => (
            <option key={index} value={region}>{region}</option>
        ));
    }
    
    const handleRegionChange = (event) => {
        const selectedRegion = event.target.value;
        console.log("Selected region:", selectedRegion);
        setSelectedRegion(selectedRegion);
        filterCountries(selectedRegion); 
    };

    const filterCountries = (region) => {
        const filtered = Data.filter(country => country.region === region);
        setFilteredCountries(filtered);
    };

    const searchfilterCountries = (event) => { // Fix syntax here
        const filtered = Data.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredCountries(filtered);
    }

    return (
        <div>
            <div className="inputSection">
                <input type="text" name="text" id="text" onInput={searchfilterCountries}/>
                <select onChange={handleRegionChange}>
                    <option value="">Filter by Region</option>
                    {options()}
                </select>
            </div>
            <ul>
                {filteredCountries.map((country, index) => (
                    <li key={index}>
                        <img src={country.flag} alt={country.name} />
                        <h2>{country.name}</h2>
                        <h3>Population: {country.population.toLocaleString()}</h3>
                        <h3>Region: {country.region}</h3>
                        <h3>Capital: {country.capital}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}