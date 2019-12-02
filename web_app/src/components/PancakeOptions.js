import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

var urlData;

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
            wh_cream: 0,
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
        urlData = "pancake=0&"
            + "pc="
            // + (this.state.onepc)
            // + "_" + (this.state.twopc)
            // + "_" + (this.state.threepc)
            // + "_" + (this.state.fourpc)
            + (this.determinePc(this.state.onepc, this.state.twopc, this.state.threepc, this.state.fourpc))
            + "&sugar=" + (this.state.sugar % 2)
            + "&berries=" + (this.state.berries % 2)
            + "&wh_cream=" + (this.state.wh_cream % 2)
            + "&" + (this.state.id);
        this.setState(() => { return { urlDataState: urlData } })
        this.updateStates();
        console.log(urlData);
    }

    updateStates() {
        this.setState(() => { return { dummyState: '' } });
        this.setState(() => { return { dummyState: '' } });
    }

    turnPcsOff(pc) {
        this.setState((prevState, props) => { return { onepc: 0 } });
        this.setState((prevState, props) => { return { twopc: 0 } });
        this.setState((prevState, props) => { return { threepc: 0 } });
        this.setState((prevState, props) => { return { fourpc: 0 } });
        if (pc == 1)
            this.setState((prevState, props) => { return { onepc: 1 } });
        else if (pc == 2)
            this.setState((prevState, props) => { return { twopc: 1 } });
        else if (pc == 3)
            this.setState((prevState, props) => { return { threepc: 1 } });
        else if (pc == 4)
            this.setState((prevState, props) => { return { fourpc: 1 } });
    }

    determinePc(a, b, c, d) {
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

                        <div id="pancake_options">
                            <h4>Select Quantity: </h4>
                            <input type="radio" id="onepc" onChange={() => this.setState((prevState, props) => this.turnPcsOff(1))} name="numOfPancakes" value="onepc" class="radio-tools" /> <label for="onepc" class="quantity_label">1</label>
                            <input type="radio" id="twopc" onChange={() => this.setState((prevState, props) => this.turnPcsOff(2))} name="numOfPancakes" value="twopc" class="radio-tools" /> <label for="twopc" class="quantity_label">2</label>
                            <input type="radio" id="threepc" onChange={() => this.setState((prevState, props) => this.turnPcsOff(3))} name="numOfPancakes" value="threepc" class="radio-tools" /> <label for="threepc" class="quantity_label">3</label>
                            <input type="radio" id="fourpc" onChange={() => this.setState((prevState, props) => this.turnPcsOff(4))} name="numOfPancakes" value="fourpc" class="radio-tools" /> <label for="fourpc" class="quantity_label">4</label>

                            <br></br>
                            <br></br>
                            <h4>Select Toppings: </h4>
                            <div class='grid-container2'>
                                <div class='grid-item'>
                                    <input type="checkbox" id="sugar" onChange={() => this.setState((prevState, props) => { return { sugar: prevState.sugar + 1 } })} name="topping" value="syrup" class="all_options" /> <label id='l_sugar' for="sugar" class="option_label"></label><p id='text'>Sugar</p>
                                </div>
                                <div class='grid-item'>
                                    <input type="checkbox" id="berries" onChange={() => this.setState((prevState, props) => { return { berries: prevState.berries + 1 } })} name="topping" value="berries" class="all_options" /> <label id='l_berries' for="berries" class="option_label"></label><p id='text'>Berries</p>
                                </div>
                                <div class='grid-item'>
                                    <input type="checkbox" id="wh_cream" onChange={() => this.setState((prevState, props) => { return { wh_cream: prevState.wh_cream + 1 } })} name="topping" value="wh_cream" class="all_options" /> <label id='l_wh_cream' for="wh_cream" class="option_label"></label><p id='text'>Whipped Cream</p>
                                </div>
                            </div>
                            <div>
                                {/* <p>{this.state.onepc}</p>
                                <p>{this.state.twopc}</p>
                                <p>{this.state.threepc}</p>
                                <p>{this.state.fourpc}</p>
                                <p>{this.state.sugar}</p>
                                <p>{this.state.berries}</p>
                                <p>{this.state.wh_cream}</p> */}
                            </div>
                        </div> <br />

                        <Link to={"/orderConformation" + "?" + urlData} onMouseDown={() => this.updateUrlData()} onClick={() => this.updateStates()}><input type="submit" id="button" value="Add item to order" /></Link>

                    </form>

                </div>
            </body>
        );
    }
}

export default PancakeOptions;