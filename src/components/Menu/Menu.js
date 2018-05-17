import React from "react";
import MenuDescription from "./MenuDescription/MenuDescription";

const Menu = props => {
  return (
    <div>
      <p>voici le menu</p>
      <select>
        <optgroup label="Italien">
          <option>jaba</option>
          <option>Ketchup</option>
        </optgroup>
        <optgroup label="Mexicain">
          <option>Tent</option>
          <option>Flashlight</option>
        </optgroup>
        <optgroup label="Français">
          <option>Tent</option>
          <option>Flashlight</option>
        </optgroup>
        <optgroup label="Créol">
          <option>Tent</option>
          <option>Flashlight</option>
        </optgroup>
      </select>
      <MenuDescription {...props} />
    </div>
  );
};

export default Menu;
