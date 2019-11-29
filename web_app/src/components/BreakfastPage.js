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

            <Link to = "/pancake">
            <input type="radio" id="r_pancakes" name="BFItem" value="pancakes" onclick="displayPancakeOptions(checked)" class="radio-tools" />
            </Link>
            <label for="r_pancakes" class="item_label">Pancakes</label> <br /><br />
            

            <Link to = "/eggs">
            <input type="radio" id="r_eggs" name="BFItem" value="fried_eggs" onclick="displayEggOptions(checked)" class="radio-tools" />
            </Link>
            <label for="r_eggs" class="item_label">Fried Eggs</label> <br /><br />
            
            
            <Link to = "/bacon">
            <input type="radio" id="r_bacon" name="BFItem" value="bacon" onclick="displayBaconOptions(checked)" class="radio-tools" />
            </Link>
            <label for="r_bacon" class="item_label">Bacon</label> <br /><br />


          </form>

        </div>
      </body>

    );
  }
}

export default BreakfastPage;