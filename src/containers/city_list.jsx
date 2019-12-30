import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import listCities from '../actions/index';
import City from './city';


class CityList extends Component {
  renderList() {
    const { cities } = this.props;
    return cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  }
  render () {
    return (
      <ul className="list-group cities">
        { this.renderList() }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities.cities
});

export default connect(mapStateToProps)(CityList);
