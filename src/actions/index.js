import cities from '../cities';

const LIST_CITIES = "LIST_CITIES";
const SELECT_CITY = 'SELECT_CITY';

const listCities = () => ({
  type: LIST_CITIES,
  payload: cities
});

const selectCity = (city) => ({
  type: 'SELECT_CITY',
  payload: city
});

export default { selectCity, listCities, LIST_CITIES, SELECT_CITY };
