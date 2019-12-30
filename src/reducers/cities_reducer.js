import { LIST_CITIES } from '../actions/index';
import cities from '../cities';

const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_CITIES:
      return action.payload;
    default:
      return cities;
  }
};

export default citiesReducer;

