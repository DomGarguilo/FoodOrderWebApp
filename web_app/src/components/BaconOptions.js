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
                    <input type="radio" name="smoked" id="smoked" value="smoked" class="all_options" /> <label id = 'l_smoked'for="smoked" class="option_label"></label><p id='text'>Smoked</p><br />
                    <input type="radio" name="turkey" id="turkey" value="turkey" class="all_options" /> <label id='l_turkey'for="turkey" class="option_label"></label><p id='text'>Turkey Bacon</p><br />
                    <input type="radio" name="canadian" id="canadian" value="canadian" class="all_options" /> <label id= 'l_canadian' for="canadian" class="option_label"></label><p id='text'>Canadian Bacon</p><br />
                    <input type="radio" name="pancetta" id="pancetta" value="pancetta" class="all_options" /> <label id = 'l_pancetta' for="pancetta" class="option_label"></label><p id='text'>Pancetta</p><br />
                 </div> <br />

                <Link to="/orderConformation"><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default BaconOptions;