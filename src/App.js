import React, { Component } from 'react';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="text-center">FreeCodeCamp Leaderboard</h1>
        </header>
        <Results/>
      </div>
    );
  }
}

export default App;
