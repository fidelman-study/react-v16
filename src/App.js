import React, { Component } from 'react';
import './App.css';
/* components */
// new rendering types
import NewRederingTypesStrings from './NewRenderingTypes/Strings';
import NewRederingTypesFragments from './NewRenderingTypes/Fragments';
import NewRederingTypesArrays from './NewRenderingTypes/Arrays';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>New Rendering Types</h2>
        <NewRederingTypesStrings/>
        <NewRederingTypesFragments/>
        <NewRederingTypesArrays/>
      </div>
    );
  }
}

export default App;