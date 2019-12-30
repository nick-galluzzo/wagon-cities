import cities from '../cities';

const LIST_CITIES = "LIST_CITIES";

const listCities = () => ({
  type: LIST_CITIES,
  payload: cities
});

export default { LIST_CITIES, listCities };
