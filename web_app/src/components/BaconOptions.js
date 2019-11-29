import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

class BaconOptions extends Component {

    render() {
        return (
            <body>
            <div className="BreakfastPage" id="container">
                <img id="login_bg" />

                <h1 id="head">Breakfast Menu</h1>
                <h3 id="please_select">Please Select Options:</h3> <br />

                <form method="GET" name="BreakfastItem" class="order">

                <div id="bacon_options">
                    <input type="radio" name="smoked" id="smoked" value="smoked" class="all_options" /> <label for="smoked" class="option_label">Smoked</label><br />
                    <input type="radio" name="turkey" id="turkey" value="turkey" class="all_options" /> <label for="turkey" class="option_label">Turkey Bacon</label><br />
                    <input type="radio" name="canadian" id="canadian" value="canadian" class="all_options" /> <label for="canadian" class="option_label">Canadian Bacon</label><br />
                    <input type="radio" name="pancetta" id="pancetta" value="pancetta" class="all_options" /> <label for="pancetta" class="option_label">Pancetta</label><br />
                 </div> <br />

                <Link to="/orderConfirmation"><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default BaconOptions;