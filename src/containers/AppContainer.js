import { Container } from "flux/utils";
import App from "../views/App";
import FastCommandStore from "../data/FastCommandStore";
import FastCommandActions from "../data/FastCommandActions";

function getStore() {
  return [FastCommandStore];
}

function getState() {
  return {
    restaurants: FastCommandStore.getState(),
    getRestaurants: FastCommandActions.getRestaurants
  };
}

export default Container.createFunctional(App, getStore, getState);
