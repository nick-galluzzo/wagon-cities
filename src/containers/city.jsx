import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions/index';


const City = ({ city, selectCity }) => {
  return (
    <li
      className="list-group-item"
      onClick={() => selectCity(city)}
    >
    {city.name}
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}


export default connect(null, mapDispatchToProps)(City);
