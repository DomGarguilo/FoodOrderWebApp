import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

class EggOptions extends Component {
    constructor() {
        super();
        this.state = {
            scrambled: 0,
            omlette: 0,
            sunside: 0,
            red_pep : 0,
            salt_pep : 0,
            sage : 0,
            sgarlic : 0,
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
                    <h4 id="egg_prepared">How would you like your eggs cooked?</h4>
                    <div id="egg_cooked">
                        <input type="checkbox" id="scrambled" onChange={() => this.setState((prevState, props) => { return { scrambled: prevState.scrambled+1}})} name="cooked" value="scrambled" class="all_options" /> <label id = 'l_scramble' for="scrambled" class="option_label">Scrambled</label>
                        <input type="checkbox" id="omlette" onChange={() => this.setState((prevState, props) => { return { omlette: prevState.omlette+1}})} name="cooked" value="omlette" class="all_options" /> <label id='l_omelette' for="omlette" class="option_label">Omlette</label>
                        <input type="checkbox" id="sunside" onChange={() => this.setState((prevState, props) => { return { sunside: prevState.sunside+1}})} name="cooked" value="sunside" class="all_options" /> <label id='l_sunnyside' for="sunside" class="option_label">"Sunny-Side" Up</label><br />
                    </div>
                    <div id="egg_options">
                        <input type="checkbox" id="red_pep" onChange={() => this.setState((prevState, props) => { return {red_pep: prevState.red_pep+1}})} name="option" value="red_pep" class="all_options" /> <label id='l_red_pep' for="red_pep" class="option_label">Red Pepper</label>
                        <input type="checkbox" id="salt" onChange={() => this.setState((prevState, props) => { return {salt: prevState.salt+1}})} name="option" value="salt" class="all_options" /> <label id='l_salt' for="salt" class="option_label">Salt</label>
                        <input type="checkbox" id="sage" onChange={() => this.setState((prevState, props) => { return {sage: prevState.sage+1}})} name="option" value="sage" class="all_options" /> <label id='l_sage' for="sage" class="option_label">Sage</label>
                        <input type="checkbox" id="garlic" onChange={() => this.setState((prevState, props) => { return {garlic: prevState.garlic+1}})} name="option" value="garlic" class="all_options" /> <label id='l_garlic' for="garlic" class="option_label">Garlic</label>
                        <br/>
                        <div>
                            <p>{this.state.scrambled}</p>
                            <p>{this.state.omlette}</p>
                            <p>{this.state.sunside}</p>
                            <p>{this.state.red_pep}</p>
                            <p>{this.state.salt}</p>
                            <p>{this.state.sage}</p>
                            <p>{this.state.garlic}</p>
                        </div>
                    </div> <br />

                    <Link to="/orderConformation"><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default EggOptions;