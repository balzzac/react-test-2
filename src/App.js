import React, {Component} from 'react';

import Main from './components/Main';

import './App.css';

/**
 * React App component
 */
class App extends Component {
  /**
   * Renders React component
   * @return {string} HTML for React component
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series Finder</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
