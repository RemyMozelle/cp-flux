import FastCommandActionTypes from "./FastCommandActionTypes";
import FastCommandDispatcher from "./FastCommandDispatcher";

const Actions = {
  async getRestaurants() {
    const getRestaurants = await fetch("/json/restaurants.json");
    const restaurants = await getRestaurants.json();
    FastCommandDispatcher.dispatch({
      type: FastCommandActionTypes.GET_RESTAURANTS,
      restaurants
    });
  },

  async getMenuByRestaurants(restaurantName) {
    const getRestaurants = await fetch("/json/restaurants.json");
    const menuByRestaurants = await getRestaurants.json();
    FastCommandDispatcher.dispatch({
      type: FastCommandActionTypes.GET_MENUS_BY_RESTAURANT,
      menuByRestaurants,
      restaurantName
    });
  }
};

export default Actions;
