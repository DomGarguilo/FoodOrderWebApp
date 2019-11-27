import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage'


class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
      </header>
    </div>
    );
  }
}

export default App;
