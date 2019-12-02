import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/viewOrderStyle.css";
import "../styles/commonStyle.css"

class ViewBreakfastOrderPage extends Component {


  render() {
    return (
      <body>
        <div className="ViewOrderPage" id="container">
          <img id="login_bg" />
          <h1 id="head">View Current Pasta Orders</h1>
          <Table />
        </div>
      </body>
    );
  }
}



class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>OrderNum</th>
            <th>Customer ID</th>
            <th>Pancake Quantity</th>
            <th>Fried Egg Quantity</th>
            <th>Omlette</th>
            <th>Scrambled eggs</th>
            <th>Bacon Quantity</th>
            <th>Sausage Quantity</th>
            <th>Order Status</th>
          </tr>
          <Row />
        </table>
      </div>
    );
  }
}



class Row extends Component {

  constructor() {
    super();
    this.state = {
      orderNum: "",
      validIDs: "order"
    }
  }

  componentDidMount() {
    //retrieve test IDs from table 'users' on the api (can change this later)
    fetch("https://wv-food-order-api.herokuapp.com/current_orders")
      .then(res => res.text())
      .then(res => this.setState({ orderNum: res }))
      .catch(err => err);
    //console.log(this.state.validIDs);
  }

  
  render() {
    return (
      <tr>
        <td>{JSON.parse(this.state.orderNum)}</td>
        <td>{this.state.validIDs}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Mark as complete button</td>
      </tr>
    );
  }
}


export default ViewBreakfastOrderPage;