import React from "react";
import { useState, useEffect } from "react";
import API from "../Functions/API";

const SearchParams = () => {
  const [location, setLocation] = useState("Vancouver");
  const [year, setYear] = useState("2008");
  const [race, setRace] = useState("6");
  const [circuit, setCircuit] = useState("Circuit 1");

  useEffect(() => {
    updateCircuit(year, race);
  }, []);

  const updateCircuit = (year, race) => {
    API(year, race).then(data => {
      let circuitName = data.RaceTable.Races[0].Circuit.circuitName;
      setCircuit(circuitName);
    });
  };

  return (
    <div>
      <h1>Search</h1>
      <label htmlFor="location">
        Location:
        <input
          type="text"
          id="location"
          value={location}
          placeholder="location"
          onChange={e => setLocation(e.target.value)}
        />
      </label>
      <p>{location.toUpperCase()}</p>
      <button>Submit</button>
      <div>
        <label htmlFor="circuit">
          <input
            type="text"
            id="year"
            placeholder="year"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
          <input
            type="text"
            id="race"
            placeholder="race"
            value={race}
            onChange={e => setRace(e.target.value)}
          />
        </label>
        <button onClick={() => updateCircuit(year, race)}>Submit</button>
        <p>Circuit Name: {circuit}</p>
      </div>
    </div>
  );
};

export default SearchParams;
