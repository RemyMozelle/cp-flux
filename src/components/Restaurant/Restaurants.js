import React, { Component } from "react";
class Restaurants extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    return (
      <div>
        <p>choix du Restaurant</p>
        <select>
          {[...this.props.restaurants.values()].map(restaurant => (
            <optgroup key={restaurant.id} label={restaurant.category}>
              <option key={restaurant.id} value={restaurant.name}>
                {restaurant.name}
              </option>
            </optgroup>
          ))}
        </select>
      </div>
    );
  }
}

export default Restaurants;
