/* eslint-disable react/prop-types */
/* eslint-disable no-invalid-this */
import React, {Component} from 'react';

import Loader from '../components/Loader';

/**
 * React SingleSeries component
 */
export class SingleSeries extends Component {
  state = {
    show: null,
  };

  /**
   * Fetching Episodes of the show with Id
   */
  componentDidMount() {
    fetch(
        `http://api.tvmaze.com/shows/${this.props.match.params.id}?embed=episodes`
    )
        .then((response) => response.json())
        .then((json) => {
          return this.setState({show: json});
        });
  }

  /**
   * Renders React component
   * @return {string} HTML for React component
   */
  render() {
    const {show} = this.state;
    return (
      <section className="wrapper">
        {show === null && <Loader />}
        {show !== null && (
          <React.Fragment>
            <h2>{show.name}</h2>
            <div className="row">
              <img
                className="series-image"
                alt="Show"
                src={show.image.medium}
              />
              <div className="column">
                {show.rating.average && (
                  <p className="paragraph">Rating - {show.rating.average}</p>
                )}
                <p className="paragraph">[{show.genres.join(', ')}]</p>
                <p className="paragraph">Premiered {show.premiered}</p>
                <p className="paragraph">
                  {show._embedded.episodes.length} Episodes [{show.status}]
                </p>
                <p className="paragraph summary">
                  {show.summary.replace(/(<([^>]+)>)/gi, ' ')}
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </section>
    );
  }
}

export default SingleSeries;
