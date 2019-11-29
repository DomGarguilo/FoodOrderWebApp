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
                        <input type="checkbox" name="sugar" id="sugar" class="all_options" /> <label for="sugar" class="option_label">Sugar</label><br />
                        <input type="checkbox" name="syrup" id="syrup" class="all_options" /> <label for="syrup" class="option_label">Syrup</label><br />
                        <input type="checkbox" name="berries" id="berries" class="all_options" /> <label for="berries" class="option_label">Berries</label><br />
                        <input type="checkbox" name="wh_cream" id="wh_cream" class="all_options" /> <label for="wh_cream" class="option_label">Whipped Cream</label><br />
                    </div> <br />

                    <Link to="/orderConfirmation"><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default PancakeOptions;