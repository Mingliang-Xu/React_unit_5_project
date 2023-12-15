import React from "react";
import { useSelector } from "react-redux";
import { selectDispaly } from "../store/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDispaly);

  return (
    <div className="symbols">
      <div className="stack">
        <h2>Flag of {currentDisplay.name.common}</h2>
        {currentDisplay.flags ? (
          <img src={currentDisplay.flags.png} alt="flag of country" />
        ) : (
          "No Data Found"
        )}
      </div>
      <div className="stack">
        <h2>Coat of Arms of {currentDisplay.name.common}</h2>
        {currentDisplay.coatOfArms ? (
          <img
            src={currentDisplay.coatOfArms.png}
            alt="symbol of coat of arms"
          />
        ) : (
          "No Data Found"
        )}
      </div>
    </div>
  );
};

export default Symbols;
