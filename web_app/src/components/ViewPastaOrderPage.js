import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/viewOrderStyle.css";
import "../styles/commonStyle.css"

class ViewPastaOrderPage extends Component {
  render() {
    return (
      <body>
        <div className="ViewOrderPage" id="container">
          <img id="login_bg" />
          <h1 id="head">View Current Pasta Orders</h1>
            
        </div>
      </body>
    );
  }
}

export default ViewPastaOrderPage;