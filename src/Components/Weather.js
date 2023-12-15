import axios from "axios";

import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectDispaly } from "../store/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState();
  const currentDisplay = useSelector(selectDispaly);
  const latitude =
    currentDisplay?.capitalInfo?.latlng?.[0] || currentDisplay.latlng[0];
  const longitude =
    currentDisplay?.capitalInfo?.latlng?.[1] || currentDisplay.latlng[1];

  // ------------------------------------
  // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
  // ------------------------------------
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude},${longitude}` },
      headers: {
        "X-RapidAPI-Key": "3d57bb75b4msh963989baa5d2298p1ac964jsn6ba4bc4e31ff",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          setWeather(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          <td>{weather?.current?.condition?.text}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather?.current.temp_f} ℉</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather?.current?.feelslike_f}</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather?.current?.humidity} %</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>
            {weather?.current?.wind_mph} mph {weather?.current?.wind_dir}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
