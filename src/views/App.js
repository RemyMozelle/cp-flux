import React from "react";
import Restaurants from "../components/Restaurant/Restaurants";
import Menu from "../components/Menu/Menu";
import Guest from "../components/Guest/Guest";
import Leader from "../components/Leader/Leader";

const App = props => {
  return (
    <div className="container-fluid">
      <Restaurants {...props} />
      <Menu {...props} />
      <Leader {...props} />
      <Guest {...props} />
    </div>
  );
};

export default App;
