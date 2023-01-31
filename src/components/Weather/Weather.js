import React, { useEffect, useState } from "react";
import Weatherinfo from "./Weatherinfo";

import "./Weather.css";
import Weatheranimation from "./Weatheranimation";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Chamati");

  if (search === "") {
    setSearch("Chamati");
  }

  //retrieving the data from the api
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cae99ac42c8f90fce262a5bde25819f4`;
      const response = await fetch(url);
      const result = await response.json();
      setCity(result.main);
    };
    fetchData();
  }, [search]);

  //parsing the local storage data and setting it to current search
  useEffect(() => {
    const storedSearchData = JSON.parse(localStorage.getItem("currentsearch"));

    if (storedSearchData) {
      setSearch(storedSearchData);
    }
  }, []);

  //setting the search data to local storage
  useEffect(() => {
    localStorage.setItem("currentsearch", JSON.stringify(search));
  }, [search]);

  return (
    <section className="weather__container">
      <div className="weather">
        <div className="weather__input-data">
          <input
            type="search"
            placeholder="Enter the cityname"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <Weatherinfo {...city} search={search} />
        )}
        <Weatheranimation />
      </div>
    </section>
  );
};

export default Weather;
