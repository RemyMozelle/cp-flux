import FastCommandActionTypes from "./FastCommandActionTypes";
import FastCommandDispatcher from "./FastCommandDispatcher";

const Actions = {
  async getRestaurants() {
    const getRestaurants = await fetch("/json/restaurants.json");
    const restaurants = await getRestaurants.json();
    console.log(restaurants);
    FastCommandDispatcher.dispatch({
      type: FastCommandActionTypes.GET_RESTAURANTS,
      restaurants
    });
  }
};

export default Actions;
