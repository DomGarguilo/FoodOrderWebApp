import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

class BaconOptions extends Component {
    constructor() {
        super();
        this.state = {
          smoked: 0,
          turkey: 0,
          canadian: 0,
          pancetta: 0
        }
    }
    render() {
        return (
            <body>
            <div className="BreakfastPage" id="container">
                <img id="login_bg" />

                <h1 id="head">Breakfast Menu</h1>
                <h3 id="please_select">Please Select Options:</h3> <br />

                <form method="GET" name="BreakfastItem" class="order">

                <div id="bacon_options">
                    <input type="radio" id="smoked" onChange={() => this.setState((prevState, props) => {return{smoked:prevState.smoked+1}})} name="smoked" value="smoked" class="all_options" /> <label id='l_smoked' for="smoked" class="option_label">Smoked</label>
                    <input type="radio" id="turkey" onChange={() => this.setState((prevState, props) => {return{turkey:prevState.turkey+1}})} name="turkey" value="turkey" class="all_options" /> <label id='l_turkey' for="turkey" class="option_label">Turkey</label>
                    <input type="radio" id="canadian" onChange={() => this.setState((prevState, props) => { return { canadian: prevState.canadian+1}})} name="canadian" value="canadian" class="all_options" /> <label id='l_canadian' for="canadian" class="option_label">Canadian</label>
                    <input type="radio"  id="pancetta" onChange={() => this.setState((prevState, props) => { return { pancetta: prevState.pancetta+1}})} name="pancetta" value="pancetta" class="all_options" /> <label id='l_pancetta' for="pancetta" class="option_label">Pancetta</label>
                </div>
                <div>
                    <p>{this.state.smoked}</p>
                    <p>{this.state.turkey}</p>
                    <p>{this.state.canadian}</p>
                    <p>{this.state.pancetta}</p>
                </div>
                <Link to="/orderConformation"><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default BaconOptions;