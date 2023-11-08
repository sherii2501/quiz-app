import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quiz />
      </div>
    );
  }
}

export default App;
