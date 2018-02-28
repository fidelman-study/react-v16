import React, { Component } from 'react';
import './App.css';
/* components */
// Error Handling
import ErrorBoundary from './ErrorBoundary';
import BrokenComponent from './BrokenComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Error Handling</h2>
        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
