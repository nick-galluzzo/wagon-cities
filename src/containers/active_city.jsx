import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.selectCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  const url = `https://kitt.lewagon.com/placeholder/cities/${props.selectCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.selectCity.name}</h3>
      <p>{props.selectCity.address}</p>
      <img src={url} width="100%" />
    </div>
  );
};

const mapStateToProps = state => ({
  selectCity: state.selectCity
});

export default connect(mapStateToProps)(ActiveCity);
