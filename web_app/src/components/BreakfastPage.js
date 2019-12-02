import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

import im1 from '../images/Pancake.jpg';
import B1 from '../images/Bacon.jpg';
import FE from '../images/FriedEggs.jpg';

var urlData;

class BreakfastPage extends Component {

  constructor() {
    super();
    this.state = {
      dummyState: '',
      id: 0,
      urlDataState: '',
    };
  }

  componentDidMount() {
    urlData = window.location.href; //localhost:3000/pasta?id=012345
    urlData = urlData.split('?');
    urlData = urlData[1]; //id=12345
    this.setState((prevState, props) => { return { id: urlData } });
    this.updateStates();
  }

  updateStates() {
    this.setState(() => { return { dummyState: '' } });
    this.setState(() => { return { dummyState: '' } });
  }

  render() {
    return (
      <body>
        <div className="BreakfastPage" id="container">
          <img id="login_bg" />

          <h1 id="head">Breakfast Menu</h1>
          <h3 id="please_select">Please Select an Item:</h3> <br />
          <form action="review_order.html" method="GET" name="BreakfastItem" class="order">

            {/*Used to pass studentID from previous webpage*/}
            <input type='hidden' value='' name='studentID' id='studentID' />
            <div class='grid-container2'>
              <div class='grid-item2'>
                <Link to={"/pancake" + "?" + urlData}>
                  <input type="radio" id="r_pancakes" name="BFItem" value="pancakes" onclick="displayPancakeOptions(checked)" class="radio-tools" />
                </Link>
                <label id='pancake_label' for="r_pancakes" class="item_label2">
                </label>
                <p id='text'>Pancakes</p>
              </div>
              <div class='grid-item2'>
                <Link to={"/eggs" + "?" + urlData}>
                  <input type="radio" id="r_eggs" name="BFItem" value="fried_eggs" onclick="displayEggOptions(checked)" class="radio-tools" />
                </Link>
                <label id='eggs_label' for="r_eggs" class="item_label2"></label>
                <p id='text'>Fried Eggs</p>
              </div>
              <div class='grid-item2'>
                <Link to={"/bacon" + "?" + urlData}>
                  <input type="radio" id="r_bacon" name="BFItem" value="bacon" onclick="displayBaconOptions(checked)" class="radio-tools" />
                </Link>
                <label id='bacon_label' for="r_bacon" class="item_label2"></label>
                <p id='text'>Bacon</p>
              </div>
            </div>
          </form>
          {/* <Link to={urlVar + "?" + this.state.urlDataState} onMouseDown={() => this.updateUrlData()} onClick={() => this.updateStates()}><input type="submit" id="button" value="Add item to order" /></Link> */}

        </div>
      </body>

    );
  }
}

export default BreakfastPage;