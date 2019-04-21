import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Series from '../containers/Series';
import SingleSeries from '../containers/SingleSeries';

/**
 * Creates Main Component
 * @param {object} props
 * @return {string} HTML for Main Component
 */
export default function Main(props) {
  return (
    <Switch>
      <Route exact path="/" component={Series} />
      <Route exact path="/series/:id" component={SingleSeries} />
    </Switch>
  );
}
