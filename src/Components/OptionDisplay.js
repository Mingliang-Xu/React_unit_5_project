import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../store/slices/potentialCountriesSlice";

import { displayCountryActions } from "../store/slices/displayCountrySlice";

const OptionDisplay = () => {
  const dispatch = useDispatch();

  const currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);

  return (
    <div className="stack">
      {currentPotentials.map((country, index) => (
        <h2
          key={country.name.official}
          onClick={() => {
            dispatch(
              displayCountryActions.setDisplayCuntry(currentPotentials[index])
            );
          }}
        >
          {country.name.common}
        </h2>
      ))}
    </div>
  );
};

export default OptionDisplay;
