import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

class BreakfastPage extends Component {
  render() {
    return (
      <body>
        <div className="BreakfastPage" id="container">
          <img id="login_bg" />

          <h1 id="head">Breakfast Menu</h1>
          <h3 id="please_select">Please Select an Item:</h3> <br />

          <form action="review_order.html" method="GET" name="BreakfastItem" class="order">

            {/*Used to pass studentID from previous webpage*/}
            <input type='hidden' value='' name='studentID' id='studentID' />

            {/*Pancake Button (Options only appear when this button is clicked)*/}
            <input type="radio" id="r_pancakes" name="BFItem" value="pancakes" onclick="displayPancakeOptions(checked)" class="radio-tools" />
            <label for="r_pancakes" class="item_label">Pancakes</label> <br /><br />

            {/*Eggs Button (Options only appear when this button is clicked)*/}
            <input type="radio" id="r_eggs" name="BFItem" value="fried_eggs" onclick="displayEggOptions(checked)" class="radio-tools" />
            <label for="r_eggs" class="item_label">Fried Eggs</label> <br /><br />

            {/*Bacon Button (Options only appear when this button is clicked)*/}
            <input type="radio" id="r_bacon" name="BFItem" value="bacon" onclick="displayBaconOptions(checked)" class="radio-tools" />
            <label for="r_bacon" class="item_label">Bacon</label> <br /><br />

            {/*Submit form and proceed to review_order page*/}
            <br /><input type="submit" value="Next" />

          </form>

        </div>
      </body>

    );
  }
}

export default BreakfastPage;