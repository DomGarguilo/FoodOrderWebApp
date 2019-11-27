import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage'

import {
  BrowserRouter as Router,
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

//type users
render()
{
  return <Router>
    <Route path ="/users" component={LoginPage} >
    
    </Route>
  </Router>
}

  // render() {
  //   return (
  //   <div className="App">
  //     <header className="App-header">
  //       <LoginPage />
  //       <p className="App-intro">;{this.state.apiResponse}</p>
  //     </header>
  //   </div>
  //   );
  // }
}

export default App;
