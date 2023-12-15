import React from "react";

import { useSelector } from "react-redux";
import { selectDispaly } from "../store/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDispaly);

  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <table className="overview-table">
        <tr>
          <td>Borders: </td>
          <td>
            {currentDisplay.borders?.map((country, index, borders) => {
              if (index + 1 === borders.length) {
                return `${country}`;
              } else {
                return `${country} `;
              }
            }) || "N/A"}
          </td>
        </tr>
        <tr>
          <td>Capitol: </td>
          {currentDisplay.capital?.map((city) => (
            <td>{city}</td>
          ))}
        </tr>
        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Continents: </td>
          {currentDisplay.continents?.map((continent) => (
            <td>{continent}</td>
          ))}
        </tr>
        <tr>
          <td>Independent: </td>
          <td>{currentDisplay.independent ? "true" : "false"}</td>
        </tr>
        <tr>
          <td>Landlock: </td>
          <td>{currentDisplay.landlock ? "true" : "false"}</td>
        </tr>
        <tr>
          <td>Member of UN: </td>
          <td>{currentDisplay.unMember ? "true" : "false"}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
