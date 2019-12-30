import React from 'react';
import { connect } from 'react-redux';

const City = ({ city }) => {
  return (
    <li
      className="list-group-item"
      onClick={() => {console.log('hi')}}
    >
    {city.name}
    </li>
  );
};


export default City;
