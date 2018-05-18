import React from "react";
import Restaurants from "../components/Restaurant/Restaurants";
import Guest from "../components/Guest/Guest";
import Leader from "../components/Leader/Leader";

const App = props => {
  return (
    <div className="container-fluid">
      <Restaurants {...props} />
      <Leader {...props} />
      <Guest {...props} />
    </div>
  );
};

export default App;
