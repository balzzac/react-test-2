/* eslint-disable no-invalid-this */
import React, {Component} from 'react';

import SeriesList from '../components/SeriesList';
import Loader from '../components/Loader';
import Intro from '../components/Intro';

/**
 * React Series component
 */
export class Series extends Component {
  state = {
    series: [],
    typedName: '',
    isFetching: false,
  };

  /**
   * @param {object} e Event
   */
  onSeriesInputChange = (e) => {
    const typedName = e.target.value.replace(/ /g, '%20');
    this.setState({isFetching: true, typedName});
    fetch(`http://api.tvmaze.com/search/shows?q=${typedName}`)
        .then((response) => response.json())
        .then((json) => this.setState({series: json, isFetching: false}));
  };

  /**
   * Renders React component
   * @return {string} HTML for React component
   */
  render() {
    const {series, typedName, isFetching} = this.state;
    return (
      <section className="wrapper">
        <Intro />
        <input
          type="text"
          onChange={this.onSeriesInputChange}
          placeholder="Please enter series name into the input"
        />
        {!isFetching && series.length === 0 && typedName.trim() === '' && (
          <p className="paragraph">Please enter series name into the input</p>
        )}
        {!isFetching && series.length === 0 && typedName.trim() !== '' && (
          <p className="paragraph">
            No TV series have been found with this name
          </p>
        )}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList list={series} />}
      </section>
    );
  }
}

export default Series;
