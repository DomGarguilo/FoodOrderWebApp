import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Breakfast from './pages/breakfast'
import Ingredient from './pages/ingredient';
import Login from './pages/login';
import OrderConformation from './pages/orderConformation'
import Pasta from './pages/pasta';
import Selection from './pages/selection';
import ViewOrder from './pages/viewOrder';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("https://wv-food-order-api.herokuapp.com/")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  //type users
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/breakfast" component={Breakfast} />
          <Route exact path="/ingredient" component={Ingredient} />
          <Route exact path="/" component={Login} />
          <Route exact path="/orderConformation" component={OrderConformation} />
          <Route exact path="/pasta" component={Pasta} />
          <Route exact path="/selection" component={Selection} />
          <Route exact path="/viewOrder" component={ViewOrder} />
          
          
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
