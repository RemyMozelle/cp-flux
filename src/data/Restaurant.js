import Immutable from "immutable";

const Restaurant = Immutable.Record({
  id: "",
  name: "",
  category: "",
  menu: [
    {
      plat: "",
      prix: "",
      description: ""
    }
  ]
});

export default Restaurant;
