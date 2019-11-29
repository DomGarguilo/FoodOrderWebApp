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
import ViewBreakfastOrder from './pages/viewBreakfastOrder';
import ViewPastaOrder from './pages/viewPastaOrder';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      apiLogin: "", apiCurrent_orders: "", apiIngredient_status: "",
      apiBalances: "", apiEmployees: "", apiUsers: ""
    };
  }

  componentDidMount() {
    var apiUrl = "https://wv-food-order-api.herokuapp.com/"

    fetch(apiUrl)
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);

    fetch(apiUrl + "login")
      .then(res => res.text())
      .then(res => this.setState({ apiLogin: res }))
      .catch(err => err);

    fetch(apiUrl + "current_orders")
      .then(res => res.text())
      .then(res => this.setState({ apiCurrent_orders: res }))
      .catch(err => err);

    fetch(apiUrl + "ingredient_status")
      .then(res => res.text())
      .then(res => this.setState({ apiIngredient_status: res }))
      .catch(err => err);

    fetch(apiUrl + "users")
      .then(res => res.text())
      .then(res => this.setState({ apiUsers: res }))
      .catch(err => err);

    fetch(apiUrl + "employees")
      .then(res => res.text())
      .then(res => this.setState({ apiEmployees: res }))
      .catch(err => err);

    fetch(apiUrl + "balances")
      .then(res => res.text())
      .then(res => this.setState({ apiBalances: res }))
      .catch(err => err);
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
          <Route exact path="/viewPastaOrder" component={ViewPastaOrder} />
          <Route exact path="/viewBreakfastOrder" component={ViewBreakfastOrder} />
        </Switch>
        <p className="App-intro">all api:<br />{this.state.apiResponse}</p>
        <p className="App-intro">login api:<br />{this.state.apiLogin}</p>
        <p className="App-intro">current orders api:<br />{this.state.apiCurrent_orders}</p>
        <p className="App-intro">ingredient status api:<br />{this.state.apiIngredient_status}</p>
        <p className="App-intro">users api:<br />{this.state.apiUsers}</p>
        <p className="App-intro">employee api:<br />{this.state.apiEmployees}</p>
        <p className="App-intro">balances api:<br />{this.state.apiBalances}</p>
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
