import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

var urlData;

class EggOptions extends Component {
    constructor() {
        super();
        this.state = {
            cooked: '',
            red_pep : 0,
            salt : 0,
            sage : 0,
            garlic : 0,
            dummyState: '',
            id: 0,
            urlDataState: ''
        }
    }
    componentDidMount() {
        urlData = window.location.href; //localhost:3000/pasta?id=012345
        urlData = urlData.split('?');
        urlData = urlData[1]; //id=12345
        this.setState((prevState, props) => { return { id: urlData } });
        this.updateStates();
    }
    updateUrlData() {
        urlData = "eggs=0&"
            + "cooked="+(this.state.cooked)
            + "&red_pep=" + (this.state.red_pep % 2)
            + "&salt=" + (this.state.salt % 2)
            + "&sage=" + (this.state.sage % 2)
            + "&garlicE=" + (this.state.garlic % 2)
            + "&" + (this.state.id);
        this.setState(() => { return { urlDataState: urlData } })
        this.updateStates();
        console.log(urlData);
    }

    updateStates() {
        this.setState(() => { return { dummyState: '' } });
        this.setState(() => { return { dummyState: '' } });
    }

    turnCookOff(pc) {
        this.setState((prevState, props) => { return { scrambled: 0 } });
        this.setState((prevState, props) => { return { omlette: 0 } });
        this.setState((prevState, props) => { return { sunside: 0 } });
        if (pc == 1)
            this.setState((prevState, props) => { return { scrambled: 1 } });
        else if (pc == 2)
            this.setState((prevState, props) => { return { omlette: 1 } });
        else if (pc == 3)
            this.setState((prevState, props) => { return { sunside: 1 } });
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
                        <div class='grid-container2'>
                            <div class='grid-item2'>
                                <input type="checkbox" id="scrambled" onChange={() => this.setState((prevState, props) => { return {cooked: "Scrambled"} }, this.turnCookOff(1))} name="cooked" value="scrambled" class="all_options" required /> <label id='l_scramble' for="scrambled" class="option_label"></label><p id='text'>Scrambled</p>
                            </div>
                            <div class='grid-item2'>
                                <input type="checkbox" id="omlette" onChange={() => this.setState((prevState, props) => { return {cooked: "Omelette"} },this.turnCookOff(2))} name="cooked" value="omlette" class="all_options" /> <label id='l_omelette' for="omlette" class="option_label"></label><p id='text'>Omlette</p>
                            </div>
                            <div class='grid-item2'>
                                <input type="checkbox" id="sunside" onChange={() => this.setState((prevState, props) => { return {cooked: "SunnySide"} },this.turnCookOff(3))} name="cooked" value="sunside" class="all_options" /> <label id='l_sunnyside' for="sunside" class="option_label"></label><p id='text'>"Sunny-Side" Up</p><br />
                            </div>
                        </div>
                    </div>
                    <h4 id="egg_toppings">Please select your toppings:</h4>
                    <div id="egg_options">
                        <div class='grid-container'>
                            <div class='grid-item'>
                                <input type="checkbox" id="red_pep" onChange={() => this.setState((prevState, props) => { return {red_pep: prevState.red_pep+1}})} name="option" value="red_pep" class="all_options" /> <label id='l_red_pep' for="red_pep" class="option_label"></label><p id='text'>Red Pepper</p>
                            </div>
                            <div class='grid-item'>
                                <input type="checkbox" id="salt" onChange={() => this.setState((prevState, props) => { return {salt: prevState.salt+1}})} name="option" value="salt" class="all_options" /> <label id='l_salt' for="salt" class="option_label"></label><p id='text'>Salt</p>
                            </div>
                            <div class='grid-item'>
                                <input type="checkbox" id="sage" onChange={() => this.setState((prevState, props) => { return {sage: prevState.sage+1}})} name="option" value="sage" class="all_options" /> <label id='l_sage' for="sage" class="option_label"></label><p id='text'>Sage</p>
                            </div>
                            <div class='grid-item'>
                                <input type="checkbox" id="garlic" onChange={() => this.setState((prevState, props) => { return {garlic: prevState.garlic+1}})} name="option" value="garlic" class="all_options" /> <label id='l_garlic' for="garlic" class="option_label"></label><p id='text'>Garlic</p>
                            </div>
                        </div>
                        
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

                    <Link to={"/orderConformation" + "?" + urlData} onMouseDown={() => this.updateUrlData()} onClick={() => this.updateStates()}><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default EggOptions;