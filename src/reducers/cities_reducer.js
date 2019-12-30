import LIST_CITIES from '../actions/index';
import cityList from '../cities';


const citiesReducer = (state, action) => {
  switch (action.type) {
    case LIST_CITIES:
      return action.payload;
    default:
      return cityList;
  }
};

export default citiesReducer;
