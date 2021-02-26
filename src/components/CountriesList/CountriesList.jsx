import React from 'react';

import './CountriesList.css';
import { Link, Route } from 'react-router-dom';

class CountriesList extends React.Component {
  render(props) {
    return (
      <ul>
        {props.countries.map((country) => {
          return (
            <div>
              <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default CountriesList;
