import React, { Component } from "react";
import Menu from "./Menu/Menu";
class Restaurants extends Component {
  componentDidMount() {
    this.props.getRestaurants();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <p>choix du Restaurant</p>
        <select onChange={this.handleChange}>
          {[...this.props.restaurants.values()].map(restaurant => (
            <option key={restaurant.id} value={restaurant.name}>
              {restaurant.name}
            </option>
          ))}
        </select>

        <p>choix du menu</p>
        <Menu {...this.props} />
      </div>
    );
  }
}

export default Restaurants;
