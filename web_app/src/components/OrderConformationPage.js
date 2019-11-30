import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/orderConformationStyle.css"
import "../styles/commonStyle.css"

class OrderConformationPage extends Component {
  render() {
    return (
      <div className="OrderConformationPage" id="container">
        {/*Used to pass studentID from previous webpage*/}
        <input type='hidden' value='' name='studentID' id='studentID' />
        <img id="login_bg" />
        <h1 id="head">Review Order</h1><br/>
        <ol>
          <li></li>
        </ol>
        <h3 id="please_select">Please Select an Option:</h3> <br />
      </div>
    );
  }
}

export default OrderConformationPage;