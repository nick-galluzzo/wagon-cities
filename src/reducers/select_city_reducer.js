import SELECT_CITY from '../actions/index';
const selectReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_CITY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default selectReducer;
