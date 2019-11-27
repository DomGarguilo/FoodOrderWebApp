import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage'

import {
  BroswerRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/server")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount(){
    this.callAPI();
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <p className="App-intro">;{this.state.apiResponse}</p>
      </header>
    </div>
    );
  }
}

export default App;
