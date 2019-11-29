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
            <div id="pancake_options">
              <input type="checkbox" name="sugar" id="sugar" class="all_options" /> <label for="sugar" class="option_label">Sugar</label><br />
              <input type="checkbox" name="syrup" id="syrup" class="all_options" /> <label for="syrup" class="option_label">Syrup</label><br />
              <input type="checkbox" name="berries" id="berries" class="all_options" /> <label for="berries" class="option_label">Berries</label><br />
              <input type="checkbox" name="wh_cream" id="wh_cream" class="all_options" /> <label for="wh_cream" class="option_label">Whipped Cream</label><br />
            </div> <br />

            {/*Eggs Button (Options only appear when this button is clicked)*/}
            <input type="radio" id="r_eggs" name="BFItem" value="fried_eggs" onclick="displayEggOptions(checked)" class="radio-tools" />
            <label for="r_eggs" class="item_label">Fried Eggs</label> <br /><br />
            <div id="egg_options">
              <input type="checkbox" name="red_pep" id="red_pep" class="all_options" /> <label for="red_pep" class="option_label">Red Pepper</label><br />
              <input type="checkbox" name="salt" id="salt" class="all_options" /> <label for="salt" class="option_label">Salt</label><br />
              <input type="checkbox" name="sage" id="sage" class="all_options" /> <label for="sage" class="option_label">Sage</label><br />
              <input type="checkbox" name="garlic" id="garlic" class="all_options" /> <label for="garlic" class="option_label">Garlic</label><br />
            </div> <br />

            {/*Bacon Button (Options only appear when this button is clicked)*/}
            <input type="radio" id="r_bacon" name="BFItem" value="bacon" onclick="displayBaconOptions(checked)" class="radio-tools" />
            <label for="r_bacon" class="item_label">Bacon</label> <br /><br />
            <div id="bacon_options">
              <input type="radio" name="smoked" id="smoked" value="smoked" class="all_options" /> <label for="smoked" class="option_label">Smoked</label><br />
              <input type="radio" name="turkey" id="turkey" value="turkey" class="all_options" /> <label for="turkey" class="option_label">Turkey Bacon</label><br />
              <input type="radio" name="canadian" id="canadian" value="canadian" class="all_options" /> <label for="canadian" class="option_label">Canadian Bacon</label><br />
              <input type="radio" name="pancetta" id="pancetta" value="pancetta" class="all_options" /> <label for="pancetta" class="option_label">Pancetta</label><br />
            </div> <br />

            {/*Submit form and proceed to review_order page*/}
            <br /><input type="submit" value="Add item to order" />

          </form>

        </div>
      </body>

    );
  }
}

export default BreakfastPage;