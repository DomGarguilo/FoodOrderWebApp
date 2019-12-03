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
          <h1 id="head">View Current Breakfast Orders</h1>
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
            <th>Order</th>
            <th>Order Status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>635565</td>
            <td>Pancakes (4)
              <li>Sugar</li>
              <li>Berries</li>
            </td>
            <td>
              <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
              </label>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>729188</td>
            <td>Bacon
              <li>Smoked</li>
            </td>
            <td>
              <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
              </label>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>663596</td>
            <td>SunnySideUp
              <li>Salt</li>
              <li>Sage</li>
            </td>
            <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>
              </td>
          </tr>
          <tr>
            <td>4</td>
            <td>635111</td>
            <td>Omelette
              <li>RedPepper</li>
              <li>Salt</li>
              <li>Garlic</li>
            </td>
            <td>
              <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
              </label>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}



/*class Row extends Component {

  /*constructor() {
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
    console.log(this.state.orderNum);
  }

  
  render() {
    return (
      <table class="row">
        <tr>
          <td>1</td>
          <td>635565</td>
          <td>Pancakes (4)
            <li>Sugar</li>
            <li>Berries</li>
          </td>
          <td>
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider"></span>
            </label>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>729188</td>
          <td>Bacon
            <li>Smoked</li>
          </td>
          <td>
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider"></span>
            </label>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>663596</td>
          <td>SunnySideUp
            <li>Salt</li>
            <li>Sage</li>
          </td>
          <td>
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider"></span>
            </label>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>635111</td>
          <td>Omelette
            <li>RedPepper</li>
            <li>Salt</li>
            <li>Garlic</li>
          </td>
          <td>
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider"></span>
            </label>
          </td>
        </tr>
      </table>
    );
  }
}*/


export default ViewBreakfastOrderPage;