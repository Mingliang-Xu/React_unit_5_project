import { useSelector } from "react-redux";

import { selectPotentials } from "./store/slices/potentialCountriesSlice";
import { selectDispaly } from "./store/slices/displayCountrySlice";

import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";

function App() {
  const potentials = useSelector(selectPotentials);
  const currentDisplay = useSelector(selectDispaly);
  console.log(potentials);
  console.log("DISPLAY", currentDisplay);

  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
