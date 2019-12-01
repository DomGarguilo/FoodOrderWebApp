import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/orderConformationStyle.css"
import "../styles/commonStyle.css"
var urlData;

var sauces, protein, topping, seasoning, pastaChoice;
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
    console.log(urlData);

    var urlDataArr = urlData.split('&')
    sauces = urlDataArr[0]; //sauces=1_1_1
    protein = urlDataArr[1]; //protein=1_1_1_0_1
    topping = urlDataArr[2]; //topping=1_0_1_0_1
    seasoning = urlDataArr[3]; //seasoning=1_0_1_0_1
    pastaChoice = urlDataArr[4];
    console.log(sauces);
    console.log(protein);
    console.log(topping);
    console.log(seasoning);
    console.log(pastaChoice);

    sauces = sauces.replace('sauces=', ''); //sauces=1_1_1
    protein = protein.replace('protein=', ''); //protein=1_1_1_0_1
    topping = topping.replace('topping=', ''); //topping=1_0_1_0_1
    seasoning = seasoning.replace('seasoning=', ''); //seasoning=1_0_1_0_1
    pastaChoice = pastaChoice.replace('pasta=', '');
    console.log(sauces);
    console.log(protein);
    console.log(topping);
    console.log(seasoning);
    console.log(pastaChoice);

    saucesArr = sauces.split('_');
    proteinArr = protein.split('_');
    toppingArr = topping.split('_');
    seasoningArr = seasoning.split('_');
    console.log(saucesArr);
    console.log(proteinArr);
    console.log(toppingArr);
    console.log(seasoningArr);

    // console.log(this.state.pasta);
    // this.setState((prevState, props) => { return { pasta: pastaChoice } });
    // console.log(this.state.pasta);

    /* the arrays are stored as such:
    Sauces - pesto, marinara, alfredo
    Protein - Chicken, shrimp, meatball, sausage, crab
    Topping - onion, tomato, broccoli, mushroom, corn
    Seasoning - salt/pep, old bay, cajun, italian, garlic

    Pasta - just string format for 'bowtie' or 'penne', *no array used*
    */

  }

  refreshStates() {
    console.log('helloooooo');
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


    // console.log(this.state.pasta);
  }

  render() {

    return (
      <div onMouseOver={() => this.refreshStates()} className="OrderConformationPage" id="container">
        {/*Used to pass studentID from previous webpage*/}
        <input type='hidden' value='' name='studentID' id='studentID' />
        <img id="login_bg" />
        <h1 id="head">Review Order</h1><br />
        <ol>
          <li></li>
        </ol>
        <h3 id="please_select">Please Select an Option:</h3> <br />
        <div >
          <p>PASTA : {this.state.pasta}</p>

          <br />
          <p>pesto: {this.state.sauce_pesto}</p>
          <p>{this.state.sauce_marinara}</p>
          <p>{this.state.sauce_alfredo}</p>
          <br />
          <p>chicken: {this.state.protein_chicken}</p>
          <p>{this.state.protein_shrimp}</p>
          <p>{this.state.protein_meatball}</p>
          <p>{this.state.protein_sausage}</p>
          <p>{this.state.protein_crab_meat}</p>
          <br />
          <p>onion: {this.state.onion}</p>
          <p>{this.state.tomato}</p>
          <p>{this.state.broccoli}</p>
          <p>{this.state.mushroom}</p>
          <p>{this.state.corn}</p>
          <br />
          <p>saltnpep: {this.state.saltNpep}</p>
          <p>{this.state.old_bay}</p>
          <p>{this.state.cajun}</p>
          <p>{this.state.italian}</p>
          <p>{this.state.garlic}</p>
        </div>
      </div>
    );
  }
}

export default OrderConformationPage;