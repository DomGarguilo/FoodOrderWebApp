import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/orderConformationStyle.css"
import "../styles/commonStyle.css"
var urlData;

var sauces, protein, topping, seasoning, pastaChoice, id;
var saucesArr, proteinArr, toppingArr, seasoningArr;

class OrderConformationPage extends Component {

  constructor() {
    super();
    this.state = {

      id: 0,

      pasta: '',

      sauce_pesto: 0,
      sauce_marinara: 0,
      sauce_alfredo: 0,

      protein_chicken: 0,
      protein_shrimp: 0,
      protein_meatball: 0,
      protein_sausage: 0,
      protein_crab_meat: 0,

      onion: 0,
      tomato: 0,
      broccoli: 0,
      mushroom: 0,
      corn: 0,

      saltNpep: 0,
      old_bay: 0,
      cajun: 0,
      italian: 0,
      garlic: 0,

    };
  }

  componentDidMount() {
    console.log('yeet bomb');
    console.log(window.location.href);
    urlData = window.location.href; //localhost:3000/orderConformation?sauces=1_1_1&protein=1_1_1_0_1&topping=1_0_1_0_1&seasonings=1_0_1_0_1

    urlData = urlData.split('?'); //sauces=1_1_1&protein=1_1_1_0_1&topping=1_0_1_0_1&seasoning=1_0_1_0_1
    urlData = urlData[1];

    var urlDataArr = urlData.split('&')
    sauces = urlDataArr[0]; //sauces=1_1_1
    protein = urlDataArr[1]; //protein=1_1_1_0_1
    topping = urlDataArr[2]; //topping=1_0_1_0_1
    seasoning = urlDataArr[3]; //seasoning=1_0_1_0_1
    pastaChoice = urlDataArr[4];
    id = urlDataArr[5];

    sauces = sauces.replace('sauces=', ''); //sauces=1_1_1
    protein = protein.replace('protein=', ''); //protein=1_1_1_0_1
    topping = topping.replace('topping=', ''); //topping=1_0_1_0_1
    seasoning = seasoning.replace('seasoning=', ''); //seasoning=1_0_1_0_1
    pastaChoice = pastaChoice.replace('pasta=', '');
    id = id.replace('id=', '');

    saucesArr = sauces.split('_');
    proteinArr = protein.split('_');
    toppingArr = topping.split('_');
    seasoningArr = seasoning.split('_');

    this.setState((prevState, props) => { return { pasta: pastaChoice } });
    this.refreshStates();

    /* the arrays are stored as such:
    Sauces - pesto, marinara, alfredo
    Protein - Chicken, shrimp, meatball, sausage, crab
    Topping - onion, tomato, broccoli, mushroom, corn
    Seasoning - salt/pep, old bay, cajun, italian, garlic

    Pasta - just string format for 'bowtie' or 'penne', *no array used*
    */

  }

  refreshStates() {
    console.log(urlData);
    //console.log(this.state.pasta);
    this.setState((prevState, props) => { return { pasta: pastaChoice } });

    this.setState((prevState, props) => { return { sauce_pesto: saucesArr[0] } });
    this.setState((prevState, props) => { return { sauce_marinara: saucesArr[1] } });
    this.setState((prevState, props) => { return { sauce_alfredo: saucesArr[2] } });

    this.setState((prevState, props) => { return { protein_chicken: proteinArr[0] } });
    this.setState((prevState, props) => { return { protein_shrimp: proteinArr[1] } });
    this.setState((prevState, props) => { return { protein_meatball: proteinArr[2] } });
    this.setState((prevState, props) => { return { protein_sausage: proteinArr[3] } });
    this.setState((prevState, props) => { return { protein_crab_meat: proteinArr[4] } });

    this.setState((prevState, props) => { return { onion: toppingArr[0] } });
    this.setState((prevState, props) => { return { tomato: toppingArr[1] } });
    this.setState((prevState, props) => { return { broccoli: toppingArr[2] } });
    this.setState((prevState, props) => { return { mushroom: toppingArr[3] } });
    this.setState((prevState, props) => { return { corn: toppingArr[4] } });

    this.setState((prevState, props) => { return { saltNpep: seasoningArr[0] } });
    this.setState((prevState, props) => { return { old_bay: seasoningArr[1] } });
    this.setState((prevState, props) => { return { cajun: seasoningArr[2] } });
    this.setState((prevState, props) => { return { italian: seasoningArr[3] } });
    this.setState((prevState, props) => { return { garlic: seasoningArr[4] } });

  }

  sendOrder() {
    //fetch(("https://wv-food-order-api.herokuapp.com/order?dbquery=sauces=1_1_1&protein=1_0_1_0_1&topping=1_0_1_0_1&seasoning=1_0_1_0_1&pasta=bowtie&id=635111"))
    fetch(("https://wv-food-order-api.herokuapp.com/order?dbquery=" + urlData))
      .then(res => res.text())
      .then(res => this.setState({ validIDs: res }))
      .catch(err => err);
  }

  getSauces() {
    var sauceNames = '';

    if (this.state.sauce_pesto == 1)
      sauceNames += ' pesto &';
    if (this.state.sauce_marinara == 1)
      sauceNames += ' marinara &';
    if (this.state.sauce_alfredo == 1)
      sauceNames += ' alfredo &';

    sauceNames = (sauceNames.length > 0 ? sauceNames.substring(0, sauceNames.length - 1) : 'none');

    return sauceNames;
  }

  getProtein() {
    var proteinNames = '';

    if (this.state.protein_chicken == 1)
      proteinNames += ' chicken &';
    if (this.state.protein_shrimp == 1)
      proteinNames += ' shrimp &';
    if (this.state.protein_meatball == 1)
      proteinNames += ' meatball &';
    if (this.state.protein_sausage == 1)
      proteinNames += ' sausage &';
    if (this.state.protein_crab_meat == 1)
      proteinNames += ' crab &';

    proteinNames = (proteinNames.length > 0 ? proteinNames.substring(0, proteinNames.length - 1) : 'none');

    return proteinNames;
  }

  getTopping() {
    var toppingNames = '';

    if (this.state.onion == 1)
      toppingNames += ' onion &';
    if (this.state.tomato == 1)
      toppingNames += ' tomato &';
    if (this.state.broccoli == 1)
      toppingNames += ' broccoli &';
    if (this.state.mushroom == 1)
      toppingNames += ' mushroom &';
    if (this.state.corn == 1)
      toppingNames += ' corn &';

    toppingNames = (toppingNames.length > 0 ? toppingNames.substring(0, toppingNames.length - 1) : 'none');

    return toppingNames;
  }

  getSeasoning() {
    var seasoningNames = '';

    if (this.state.saltNpep == 1)
      seasoningNames += ' salt/pepper &';
    if (this.state.old_bay == 1)
      seasoningNames += ' old bay &';
    if (this.state.cajun == 1)
      seasoningNames += ' cajun &';
    if (this.state.italian == 1)
      seasoningNames += ' italian &';
    if (this.state.garlic == 1)
      seasoningNames += ' garlic &';

    seasoningNames = (seasoningNames.length > 0 ? seasoningNames.substring(0, seasoningNames.length - 1) : 'none');

    return seasoningNames;
  }

  getSauceChoiceLabel() {
    var label = '';
    var counter = 0;

    if (this.state.sauce_pesto == 1)
      counter++;
    if (this.state.sauce_marinara == 1)
      counter++
    if (this.state.sauce_alfredo == 1)
      counter++

    label = (counter > 1 ? 'Choices' : 'Choice');
    return label;
  }

  getProteinChoiceLabel() {
    var label = '';
    var counter = 0;

    if (this.state.protein_chicken == 1)
      counter++
    if (this.state.protein_shrimp == 1)
      counter++
    if (this.state.protein_meatball == 1)
      counter++
    if (this.state.protein_sausage == 1)
      counter++
    if (this.state.protein_crab_meat == 1)
      counter++

    label = (counter > 1 ? 'Choices' : 'Choice');
    return label;
  }
  getToppingChoiceLabel() {
    var label = '';
    var counter = 0;

    if (this.state.onion == 1)
      counter++
    if (this.state.tomato == 1)
      counter++
    if (this.state.broccoli == 1)
      counter++
    if (this.state.mushroom == 1)
      counter++
    if (this.state.corn == 1)
      counter++

    label = (counter > 1 ? 'Choices' : 'Choice');
    return label;
  }
  getSeasoningChoiceLabel() {
    var label = '';
    var counter = 0;

    if (this.state.saltNpep == 1)
      counter++
    if (this.state.old_bay == 1)
      counter++
    if (this.state.cajun == 1)
      counter++
    if (this.state.italian == 1)
      counter++
    if (this.state.garlic == 1)
      counter++

    label = (counter > 1 ? 'Choices' : 'Choice');
    return label;
  }

  render() {

    return (
      <div onMouseOver={() => this.refreshStates()} className="OrderConformationPage" id="container">
        {/*Used to pass studentID from previous webpage*/}
        <input type="hidden" value="" name="studentID" id="studentID" />
        <img id="login_bg" />
        <h1 id="head">Order Confirmation</h1>
        <br />
        <h2 id="order_con">Thank you for dining with us</h2> <br />
        <h3 id="order_con">Your order is on its way</h3> <br />
        <h3 id="order_con">Order Confirmation Number: 123</h3> <br />
        <div>
          {/* <p>PASTA : {this.state.pasta}</p> */}

          <br />
          {/* <p>Sauce Choice(s): {this.getSauces()}</p>
          <p>Protein Choice(s): {this.getProtein()}</p>
          <p>Topping Choice(s): {this.getTopping()}</p>
          <p>Seasoning Choice(s): {this.getSeasoning()}</p> */}
          <table class = "center">
          <tr>
            <td>Item</td>
            <td>Sauce Choice(s)</td>
            <td>Protein Choice(s)</td>
            <td>Topping Choice(s)</td>
            <td>Seasoning Choice(s)</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
          <tr>
            <td>Pasta</td>
            <td>{this.getSauces()}</td>
            <td>{this.getProtein()}</td>
            <td>{this.getTopping()}</td>
            <td>{this.getSeasoning()}</td>
            <td>1</td>
            <td>$Big Bucks</td>
          </tr>
          </table>
          <br />
          <Link to="/" ><button class="backToMain">Return to Menu</button></Link>
        </div>
      </div>
    );
  }
}

export default OrderConformationPage;