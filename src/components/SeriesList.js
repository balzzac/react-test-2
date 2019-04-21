import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

/**
 * React SeriesListItem component
 * @param {object} series
 * @return {string} HTML for React component
 */
const SeriesListItem = ({series}) => (
  <li className="series-list-item">
    <Link className="series-list-link" to={`/series/${series.show.id}`}>
      {series.show.name}
    </Link>
  </li>
);

/**
 * React SeriesList component
 * @param {object} props
 * @return {string} HTML for React component
 */
export default function SeriesList(props) {
  return (
    <div>
      <ul className="series-list">
        {props.list.map((series) => (
          <SeriesListItem key={series.show.id} series={series} />
        ))}
      </ul>
    </div>
  );
}

SeriesListItem.propTypes = {
  series: PropTypes.object,
};

SeriesList.propTypes = {
  series: PropTypes.object,
  list: PropTypes.array,
};
