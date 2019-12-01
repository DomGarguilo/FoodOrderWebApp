import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

class PancakeOptions extends Component {
    constructor() {
        super();
        this.state = {
          onepc: 0,
          twopc: 0,
          threepc: 0,
          fourpc: 0,
          sugar: 0,
          berries: 0,
          wh_cream: 0
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

                    <div id="pancake_options">
                        <h4>Select Quantity: </h4>
                        <input type="radio" id = "onepc" onChange={() => this.setState((prevState, props) => { return { onepc: prevState.onepc+1}})} name="numOfPancakes" value="onepc" class = "radio-tools"/> <label for="onepc" class="quantity_label">1</label>
                        <input type="radio" id = "twopc" onChange={() => this.setState((prevState, props) => { return { twopc: prevState.twopc+1}})} name="numOfPancakes" value="twopc" class = "radio-tools"/> <label for="twopc" class="quantity_label">2</label>
                        <input type="radio" id = "threepc" onChange={() => this.setState((prevState, props) => { return { threepc: prevState.threepc+1}})} name="numOfPancakes" value="threepc" class = "radio-tools"/> <label for="threepc" class="quantity_label">3</label>
                        <input type="radio" id = "fourepc" onChange={() => this.setState((prevState, props) => { return { fourpc: prevState.fourpc+1}})} name="numOfPancakes" value="fourpc" class = "radio-tools"/> <label for="fourpc" class="quantity_label">4</label>
                        <br></br>
                        <br></br>
                        <h4>Select Toppings: </h4>
                        <input type="checkbox" id="sugar" onChange={() => this.setState((prevState, props) => { return { syrup: prevState.syrup+1}})} name="topping" value="syrup" class="all_options" /> <label for="sugar" class="option_label">Sugar</label>
                        <input type="checkbox" id="berries" onChange={() => this.setState((prevState, props) => { return { berries: prevState.berries+1}})} name="topping" value="berries" class="all_options" /> <label for="berrues" class="option_label">Berries</label>
                        <input type="checkbox" id="wh_cream" onChange={() => this.setState((prevState, props) => { return { wh_cream: prevState.wh_cream+1}})} name="topping" value="wh_cream" class="all_options" /> <label for="wh_cream" class="option_label">Whipped Cream</label>

                        <div>
                            <p>{this.state.onepc}</p>
                            <p>{this.state.twopc}</p>
                            <p>{this.state.threepc}</p>
                            <p>{this.state.fourpc}</p>
                            <p>{this.state.sugar}</p>
                            <p>{this.state.wh_cream}</p>
                        </div>
                    </div> <br />

                    <Link to="/orderConformation"><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default PancakeOptions;