import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/orderConformationStyle.css"
import "../styles/commonStyle.css"
var urlData, globalChoiceVar;

var type, sauces, protein, topping, seasoning, pastaChoice, id; //pasta url variables
var saucesArr, proteinArr, toppingArr, seasoningArr; //pasta array url variables (to saucesArr=sauces.split('_');)

var pancakeCount, sugar, berries, wh_cream; //pancake url variables

let pastaStyle = {
  display: 'none'
}
let pancakeStyle = {
  display: 'none'
}

class OrderConformationPage extends Component {

  constructor() {
    super();
    this.state = {

      id: 0,

      //--------PASTAS
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
      //--------

      //--------PANCAKESS
      pc: 0, //pancake count
      sug: 0, //sugar
      berr: 0, //berries
      wh_cr: 0, //whipped cream
      //--------



      //-------TABLE DISPLAYS
      pastaTableDisplay: 'none',
      pancakeTableDisplay: 'none',


    };
  }

  componentDidMount() {
    // console.log('yeet bomb');
    // console.log(window.location.href);
    urlData = window.location.href; //localhost:3000/orderConformation?sauces=1_1_1&protein=1_1_1_0_1&topping=1_0_1_0_1&seasonings=1_0_1_0_1

    urlData = urlData.split('?'); //pasta=0&sauces=1_1_1&protein=1_1_1_0_1&topping=1_0_1_0_1&seasoning=1_0_1_0_1
    urlData = urlData[1];

    var urlDataArr = urlData.split('&')
    type = urlDataArr[0];

    if (type == 'pasta=0') {

      this.setGlobalChoiceVar(1);

      sauces = urlDataArr[1]; //sauces=1_1_1
      protein = urlDataArr[2]; //protein=1_1_1_0_1
      topping = urlDataArr[3]; //topping=1_0_1_0_1
      seasoning = urlDataArr[4]; //seasoning=1_0_1_0_1
      pastaChoice = urlDataArr[5];
      id = urlDataArr[6];

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
      this.refreshStates(1); //1 for pasta

      /* the arrays are stored as such:
      Sauces - pesto, marinara, alfredo
      Protein - Chicken, shrimp, meatball, sausage, crab
      Topping - onion, tomato, broccoli, mushroom, corn
      Seasoning - salt/pep, old bay, cajun, italian, garlic
  
      Pasta - just string format for 'bowtie' or 'penne', *no array used*
      */
    }

    else if (type == 'pancake=0') {

      this.setGlobalChoiceVar(2)

      pancakeCount = urlDataArr[1];
      sugar = urlDataArr[2];
      berries = urlDataArr[3];
      wh_cream = urlDataArr[4];
      id = urlDataArr[5];

      pancakeCount = pancakeCount.replace('pc=', ''); //sauces=1_1_1
      sugar = sugar.replace('sugar=', ''); //protein=1_1_1_0_1
      berries = berries.replace('berries=', ''); //topping=1_0_1_0_1
      wh_cream = wh_cream.replace('wh_cream=', ''); //seasoning=1_0_1_0_1
      id = id.replace('id=', '');
      this.refreshStates(2);

      console.log("AHH " + pancakeCount + " " + sugar + " " + berries + " " + wh_cream + " " + id);
      /* http://localhost:3000/orderConformation?pancake=0&pc=0_1_0&sugar=1&berries=0&wh_cream=1 
      the arrays are stored as such:
      pc - 1 pancake, 2 pancake, 3 pancake
      sugar - #
      berries - #
      wh_cream - #

      */
    }

  }

  // 1 - pasta, 2 - pancakes, 3 - , 4 -
  refreshStates(choice) {
    //console.log(urlData);
    //console.log(choice);
    // //console.log(this.state.pasta);
    if (choice == 1) {
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

      this.setState(() => { return { pastaTableDisplay: '' } });
    }
    else if (choice == 2) {
      // pc: 0,
      // sug: 0,
      // berr: 0,
      // wh_cr: 0,
      this.setState((prevState, props) => { return { pc: pancakeCount } });
      this.setState((prevState, props) => { return { sug: sugar } });
      this.setState((prevState, props) => { return { berr: berries } });
      this.setState((prevState, props) => { return { wh_cr: wh_cream } });

      this.setState(() => { return { pancakeTableDisplay: '' } });

    }
    this.hideTables(globalChoiceVar);
  }

  sendOrder() {
    //fetch(("https://wv-food-order-api.herokuapp.com/order?dbquery=sauces=1_1_1&protein=1_0_1_0_1&topping=1_0_1_0_1&seasoning=1_0_1_0_1&pasta=bowtie&id=635111"))
    fetch(("https://wv-food-order-api.herokuapp.com/order?dbquery=" + urlData))
      .then(res => res.text())
      .then(res => this.setState({ validIDs: res }))
      .catch(err => err);
  }

  setGlobalChoiceVar(num) {
    globalChoiceVar = num;
    this.hideTables(num);
  }

  hideTables(num) {
    if (num == 1) { //pasta data
      pastaStyle = { display: this.state.pastaTableDisplay };

    }
    else if (num == 2) { //pancake data
      pancakeStyle = { display: this.state.pancakeTableDisplay };
    }
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

  getPc() {
    return this.state.pc;
  }
  getSugar() {
    if (this.state.sug == 1)
      return 'Yes';
    else
      return 'No';
  }
  getBerries() {
    if (this.state.berr == 1)
      return 'Yes';
    else
      return 'No';
  }
  getWh() {
    if (this.state.wh_cr == 1)
      return 'Yes';
    else
      return 'No';
  }



  render() {

    return (
      <div onMouseOver={() => this.refreshStates(globalChoiceVar)} className="OrderConformationPage" id="container">
        {/*Used to pass studentID from previous webpage*/}
        <input type="hidden" value="" name="studentID" id="studentID" />
        <img id="login_bg" />
        <h1 id="head">Order Confirmation</h1>
        <br />
        <h2 id="order_con">Thank you for dining with us</h2> <br />
        <h3 id="order_con">Your order is on its way</h3> <br />
        <h3 id="order_con">Order Confirmation Number: 123</h3> <br />
        <div>

          <br />
          <table class="center" id="pastaTable" style={{ display: this.state.pastaTableDisplay }}>
            <tr>
              <td>Item</td>
              <td>Sauce Choice(s)</td>
              <td>Protein Choice(s)</td>
              <td>Topping Choice(s)</td>
              <td>Seasoning Choice(s)</td>
              <td>Quantity</td>

            </tr>
            <tr>
              <td>Pasta</td>
              <td>{this.getSauces()}</td>
              <td>{this.getProtein()}</td>
              <td>{this.getTopping()}</td>
              <td>{this.getSeasoning()}</td>
              <td>1</td>

            </tr>
          </table>
          <table class="center" id="pancakeTable" style={{ display: this.state.pancakeTableDisplay }}>
            <tr>
              <td>Item</td>
              <td>Pancake Count</td>
              <td>Sugar</td>
              <td>Berries</td>
              <td>Whipped Cream</td>


            </tr>
            <tr>
              <td>Pancakes</td>
              <td>{this.getPc()}</td>
              <td>{this.getSugar()}</td>
              <td>{this.getBerries()}</td>
              <td>{this.getWh()}</td>

            </tr>
          </table>
          <br />
          <Link to="/" ><button class="backToMain">Return to Menu</button></Link>
          <p>{this.state.pc}</p>
          <p>{this.state.sug}</p>
          <p>{this.state.ber}</p>
          <p>{this.state.wh_cr}</p>
        </div>
      </div>
    );
  }
}

export default OrderConformationPage;

//pancake example: http://localhost:3000/orderConformation?pancake=0&pc=3&sugar=0&berries=1&wh_cream=0&id=635111
//pasta example: http://localhost:3000/orderConformation?pasta=0&sauces=1_1_1&protein=1_1_1_1_1&topping=1_1_1_1_1&seasoning=1_1_1_1_1&pasta=penne&id=635111