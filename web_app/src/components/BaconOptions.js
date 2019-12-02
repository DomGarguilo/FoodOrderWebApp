import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

var urlData;

class BaconOptions extends Component {
    constructor() {
        super();
        this.state = {
          smoked: 0,
          turkey: 0,
          canadian: 0,
          pancetta: 0,
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
        urlData = "bacon=0&"
            + "bac="
            + (this.determineBacon(this.state.smoked, this.state.turkey, this.state.canadian, this.state.pancetta))
            + "&" + (this.state.id);
        this.setState(() => { return { urlDataState: urlData } })
        this.updateStates();
        console.log(urlData);
    }

    updateStates() {
        this.setState(() => { return { dummyState: '' } });
        this.setState(() => { return { dummyState: '' } });
    }

    turnBaconOff(pc) {
        this.setState((prevState, props) => { return { smoked: 0 } });
        this.setState((prevState, props) => { return { turkey: 0 } });
        this.setState((prevState, props) => { return { canadian: 0 } });
        this.setState((prevState, props) => { return { pancetta: 0 } });
        if (pc == 1)
            this.setState((prevState, props) => { return { smoked: 1 } });
        else if (pc == 2)
            this.setState((prevState, props) => { return { turkey: 1 } });
        else if (pc == 3)
            this.setState((prevState, props) => { return { canadian: 1 } });
        else if (pc == 4)
            this.setState((prevState, props) => { return { pancetta: 1 } });
    }

    determineBacon(a, b, c, d) {
        if (a == 1)
            return 1;
        else if (b == 1)
            return 2;
        else if (c == 1)
            return 3;
        else if (d == 1)
            return 4;
        else
            return 0;

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
                    <div class='grid-container'>
                        <div class='grid-item'>
                            <input type="radio" id="smoked" onChange={() => this.setState((prevState, props) => this.turnBaconOff(1))} name="bacon" value="smoked" class="all_options" /> <label id='l_smoked' for="smoked" class="option_label"></label><p id='text'>Smoked</p>
                        </div>
                        <div class='grid-item'>
                            <input type="radio" id="turkey" onChange={() => this.setState((prevState, props) => this.turnBaconOff(2))} name="bacon" value="turkey" class="all_options" /> <label id='l_turkey' for="turkey" class="option_label"></label><p id='text'>Turkey</p>
                        </div>
                        <div class='grid-item'>
                            <input type="radio" id="canadian" onChange={() => this.setState((prevState, props) => this.turnBaconOff(3))} name="bacon" value="canadian" class="all_options" /> <label id='l_canadian' for="canadian" class="option_label"></label><p id='text'>Canadian</p>
                        </div>
                        <div class='grid-item'>
                            <input type="radio"  id="pancetta" onChange={() => this.setState((prevState, props) => this.turnBaconOff(4))} name="bacon" value="pancetta" class="all_options" /> <label id='l_pancetta' for="pancetta" class="option_label"></label><p id='text'>Pancetta</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{this.state.smoked}</p>
                    <p>{this.state.turkey}</p>
                    <p>{this.state.canadian}</p>
                    <p>{this.state.pancetta}</p>
                </div>
                <Link to={"/orderConformation" + "?" + urlData} onMouseDown={() => this.updateUrlData()} onClick={() => this.updateStates()}><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default BaconOptions;