import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/pastaStyle.css";
import "../styles/commonStyle.css";

class PastaPage extends Component {
  render() {
    return (
      <body>
        <div className="PastaPage" id="container">
          <img id="login_bg" />
          <h1 id="head">Pasta Menu</h1><br />

          {/*WE NEED TO MAKE IT SO PASTA TYPE IS REQUIRED AND TELLS USER ON SUBMIT*/}
          <form name="pasta_form" method="GET" action="review_order.html" class="order">
            <label for="c_pasta" class="item_label">Select Pasta Type</label><br /><br />
            <div id="pasta_options">
              <input type="radio" id="penne" name="pasta_type" value="penne" class="all_options" required /> <label for="penne" class="option_label">Penne</label>
              <input type="radio" id="bowtie" name="pasta_type" value="bowtie" class="all_options" required /> <label for="bowtie" class="option_label">Bowtie</label>
            </div> {/*end pasta options*/} <br />

            <label for="c_sauce" class="item_label">Select Sauce Type</label><br /><br />
            <div id="sauce_options">
              <input type="checkbox" id="pesto" name="sauce_type" value="pesto" class="all_options" /> <label for="pesto" class="option_label">Pesto</label><br />
              <input type="checkbox" id="marinara" name="sauce_type" value="marinara" class="all_options" /> <label for="marinara" class="option_label">Marinara</label><br />
              <input type="checkbox" id="alfredo" name="sauce_type" value="alfredo" class="all_options" /> <label for="alfredo" class="option_label">Alfredo</label><br />
            </div> {/*end sauce options*/} <br />

            <label for="c_protein" class="item_label">Select Proteins</label><br /><br />
            <div id="protein_options">
              <input type="checkbox" id="chicken" name="protein" value="chicken" class="all_options" /> <label for="chicken" class="option_label">Chicken</label><br />
              <input type="checkbox" id="shrimp" name="protein" value="shrimp" class="all_options" /> <label for="shrimp" class="option_label">Shrimp</label><br />
              <input type="checkbox" id="meatball" name="protein" value="meatball" class="all_options" /> <label for="meatball" class="option_label">Meatball</label><br />
              <input type="checkbox" id="sausage" name="protein" value="sausage" class="all_options" /> <label for="sausage" class="option_label">Sausage</label><br />
              <input type="checkbox" id="crab_meat" name="protein" value="crabmeat" class="all_options" /> <label for="crab_meat" class="option_label">Crab Meat</label><br />
            </div> {/*end sauce options*/} <br />

            <label for="c_topping" class="item_label">Select Additional Toppings</label><br /><br />
            <div id="topping_options">
              <input type="checkbox" id="onion" name="ingredients" value="onion" class="all_options" /> <label for="onion" class="option_label">Onion</label><br />
              <input type="checkbox" id="tomato" name="ingredients" value="tomato" class="all_options" /> <label for="tomato" class="option_label">Tomato</label><br />
              <input type="checkbox" id="brocoli" name="ingredients" value="broccoli" class="all_options" /> <label for="brocoli" class="option_label">Broccoli</label><br />
              <input type="checkbox" id="mushroom" name="ingredients" value="mushroom" class="all_options" /> <label for="mushroom" class="option_label">Mushroom</label><br />
              <input type="checkbox" id="corn" name="ingredients" value="Corn" class="all_options" /> <label for="corn" class="option_label">Corn</label><br />
            </div> {/*end toppings options*/} <br />

            <label for="c_seasoning" class="item_label">Select Seasonings</label><br /><br />
            <div id="seasoning_options">
              <input type="checkbox" id="saltNpep" name="seasonings" value="saltAndPepper" class="all_options" /> <label for="saltNpep" class="option_label">Salt and Pepper</label><br />
              <input type="checkbox" id="old_bay" name="seasonings" value="oldBay" class="all_options" /> <label for="old_bay" class="option_label">Old Bay</label><br />
              <input type="checkbox" id="cajun" name="seasonings" value="cajun" class="all_options" /> <label for="cajun" class="option_label">Cajun</label><br />
              <input type="checkbox" id="italian" name="seasonings" value="italian" class="all_options" /> <label for="italian" class="option_label">Italian</label><br />
              <input type="checkbox" id="garlic" name="seasonings" value="garlic" class="all_options" /> <label for="garlic" class="option_label">Garlic</label><br />
            </div> {/*end seasonings options*/} <br />

            <input type="submit" id="button" value="Add item to order" />

          </form>

        </div> {/*end pasta page*/}
      </body>
    );
  }
}

export default PastaPage;