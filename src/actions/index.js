import cities from '../cities';

export const SELECT_CITY = "SELECT_CITY";
export const LIST_CITIES = "LIST_CITIES";


const listCities = () => ({
  type: LIST_CITIES,
  payload: cities
});

export const selectCity = (city) => ({
  type: SELECT_CITY,
  payload: city
});

export default { listCities };
