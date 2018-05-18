import React, { Component } from "react";
// import MenuDescription from "./MenuDescription/MenuDescription";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p>voici le menu</p>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            {[...this.props.restaurants.values()].map(restaurant =>
              restaurant.menu.map(menu => {
                return (
                  <option
                    name="restaurants"
                    key={restaurant.id + menu.plat}
                    value={menu.plat}
                  >
                    {menu.plat}
                  </option>
                );
              })
            )}
          </select>
          <button type="submit">ajouter</button>
        </form>
      </div>
    );
  }
}

export default Menu;
