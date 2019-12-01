import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

class EmpDash extends Component {

    render() {
        return (
            <body>
                <div className="BreakfastPage" id="container">
                    <img id="login_bg" />

                    <h1 id="head">Employee Dashboard</h1>
                    <h3 id="please_select">Select an option:</h3> <br />

                    <form action="review_order.html" method="GET" name="MenuItem" class="order">
                        <div class='grid-container'>
                            <div class='grid-item'>
                                <Link to="/ingredient">
                                    <input type="radio" id="breakfast" name="BFItem" value="breakfast" class="radio-tools" />
                                </Link>
                                <label id='l_ingredient' for="breakfast" class="item_label"></label>
                                <p id='text'>Ingredient Status Page</p>
                            </div>
                            <div class='grid-item'>
                                <Link to="/viewOrderSelect">
                                    <input type="radio" id="pasta" name="PItem" value="pasta" class="radio-tools" />
                                </Link>
                                <label id='l_pasta' for="pasta" class="item_label"></label>
                                <p id='text'>View current orders</p>
                            </div>
                        </div>

                    </form>

                </div>
            </body>
        );
    }
}

export default EmpDash;