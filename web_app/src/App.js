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

import Login from './pages/login';
import Selection from './pages/selection';

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
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Login} />
        <Route path ="/selection" component={Selection} />
      </Switch>
      <p className="App-intro">;{this.state.apiResponse}</p>
    </Router>
    
  ); 
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
