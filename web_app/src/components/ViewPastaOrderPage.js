import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/viewOrderStyle.css";
import "../styles/commonStyle.css";

class ViewPastaOrderPage extends Component {
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
            <th>Pasta type</th>
            <th>Sauce</th>
            <th>Ingredients</th>
            <th>Order Status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>635565</td>
            <td>Penne</td>
            <td>Pesto</td>
            <td>
              <li>Chicken</li>
              <li>Onion</li>
              <li>Broccoli</li>
              <li>Mushrooms</li>
              <li>Salt/Pepper</li>
              <li>Garlic</li>
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
            <td>621448</td>
            <td>Bowtie</td>
            <td>Marinara</td>
            <td>
              <li>Meatballs</li>
              <li>Salt/Pepper</li>
              <li>Garlic</li>
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
            <td>729188</td>
            <td>Bowtie</td>
            <td>Alfredo</td>
            <td>
              <li>Chicken</li>
              <li>Onion</li>
              <li>Corn</li>
              <li>Salt/Pepper</li>
              <li>OldBay</li>
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
            <td>663596</td>
            <td>Penne</td>
            <td><li>Pesto</li><li>Alfredo</li></td>
            <td>
              <li>Shrimp</li>
              <li>Corn</li>
              <li>Salt/Pepper</li>
              <li>Garlic</li>
              <li>Italian</li>
            </td>
            <td>
              <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
              </label>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>635111</td>
            <td>Penne</td>
            <td>Marinara</td>
            <td>
              <li>Meatballs</li>
              <li>Sausage</li>
              <li>Onion</li>
              <li>Salt/Pepper</li>
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
        <br/><br/>
      </div>
    );
  }
}

/*class Row extends Component {
  render() {
    return (
      <tr>
        <td>OrderNum</td>
        <td>Customer ID</td>
        <td>Pasta type</td>
        <td></td>
        <td></td>
        <td>Mark as complete button</td>
      </tr>
    );
  }
}*/


export default ViewPastaOrderPage;