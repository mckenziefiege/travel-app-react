import React, { Component } from 'react';
import './App.css';
import DestinationContainer from './Components/DestinationContainer'

class App extends Component {

  render() {
    return (
    <div>
    <h1>Travel Journal :)</h1>
    <DestinationContainer />
    </div>
    );
  }
}

export default App;
