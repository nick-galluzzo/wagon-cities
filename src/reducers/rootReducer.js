import { combineReducers } from 'redux';
import citiesReducer from './cities_reducer';
import selectReducer from './select_city_reducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  selectCity: selectReducer
});

export default rootReducer;
