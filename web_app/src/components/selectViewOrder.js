import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

class ViewOrderSelect extends Component {
    render() {
      return (
        <body>
          <div className="SelectionPage" id="container">
            <img id="login_bg" />
  
            <h1 id="head">Menu</h1>
            <h3 id="please_select">Please Select an Item:</h3> <br />
  
            <form action="review_order.html" method="GET" name="MenuItem" class="order">
              <div class='grid-container'>
                <div class='grid-item'>
                  <Link to = "/breakfast">
                  <input type="radio" id="breakfast" name="BFItem" value="breakfast" class="radio-tools" />
                  </Link>
                  <label id='l_breakfast' for="breakfast" class="item_label"></label>
                  <p id='text'>Breakfast</p> 
                </div>
                <div class='grid-item'>
                  <Link to = "/pasta">
                  <input type="radio" id="pasta" name="PItem" value="pasta" class="radio-tools" />
                  </Link>
                  <label id='l_pasta' for="pasta" class="item_label"></label>
                  <p id='text'>Pasta</p> 
                </div>  
              </div>
             
            </form>
  
          </div>
        </body>
  
      );
    }
  }
  
  export default ViewOrderSelect;