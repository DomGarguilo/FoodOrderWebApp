import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";
class PancakeOptions extends Component {

    render() {
        return (
            <body>
            <div className="BreakfastPage" id="container">
                <img id="login_bg" />

                <h1 id="head">Breakfast Menu</h1>
                <h3 id="please_select">Please Select Options:</h3> <br />

                <form method="GET" name="BreakfastItem" class="order">

                    <div id="pancake_options">
                        <h4>Select Quantity: 
                        <input type="radio" id = "onepc" class = "radio-tools" name="numOfPancakes" required /> <label for="onepc" class="quantity_label">1</label>
                        <input type="radio" id = "twopc" class = "radio-tools" name="numOfPancakes" required /> <label for="twopc" class="quantity_label">2</label>
                        <input type="radio" id = "threepc" class = "radio-tools" name="numOfPancakes" required /> <label for="threepc" class="quantity_label">3</label>
                        <input type="radio" id = "fourpc" class = "radio-tools" name="numOfPancakes" required /> <label for="fourpc" class="quantity_label">4</label>
                        </h4>
                        <br></br>
                        <br></br>
                        <input type="checkbox" name="sugar" id="sugar" class="all_options" /> <label id='l_sugar' for="sugar" class="option_label"></label><p id='text'>Sugar</p><br />
                        <input type="checkbox" name="syrup" id="syrup" class="all_options" /> <label id = 'l_syrup'for="syrup" class="option_label">Syrup</label><p id='text'>Syrup</p><br />
                        <input type="checkbox" name="berries" id="berries" class="all_options" /> <label id='l_berries' for="berries" class="option_label"></label><p id='text'>Berries</p><br />
                        <input type="checkbox" name="wh_cream" id="wh_cream" class="all_options" /> <label id='l_wh_cream' for="wh_cream" class="option_label"></label><p id='text'>Whipped Cream</p><br />
                    </div> <br />

                    <Link to="/orderConfirmation"><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default PancakeOptions;