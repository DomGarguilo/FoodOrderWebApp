import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/pastaStyle.css";
import "../styles/commonStyle.css";

var urlVar = "/orderConformation";
var urlData = "yeet";

var id;

class PastaPage extends Component {

  constructor() {
    super();
    this.state = {

      dummyState: '',

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

      urlDataState: '',

    };
    this.updateUrlData = this.updateUrlData.bind(this);

  }

  componentDidMount(){
    urlData = window.location.href; //localhost:3000/pasta?id=012345
    console.log(urlData);
    urlData = urlData.split('?'); 
     console.log(urlData);
     urlData = urlData[1]; //id=12345
     console.log(urlData);
     console.log("." + this.state.sauce_pesto);
     this.setState((prevState, props) => { return { id: urlData } });
    // id = urlData.replace('id=', '');
  }

  updateUrlData() {
    // console.log("YAAAAAAAA");
    // urlData = "pesto=" + (this.state.sauce_pesto % 2)
    //   + "&marinara=" + (this.state.sauce_marinara % 2)
    //   + "&alfredo=" + (this.state.sauce_alfredo % 2)
    //   + "&chicken=" + (this.state.protein_chicken % 2)
    //   + "&shrimp=" + (this.state.protein_shrimp % 2)
    //   + "&meatball=" + (this.state.protein_meatball % 2)
    //   + "&sausage=" + (this.state.protein_sausage % 2)
    //   + "&crab=" + (this.state.protein_crab_meat % 2)
    //   + "&onion=" + (this.state.onion % 2)
    //   + "&tomato=" + (this.state.tomato % 2)
    //   + "&broccoli=" + (this.state.broccoli % 2)
    //   + "&mushroom=" + (this.state.mushroom % 2)
    //   + "&corn=" + (this.state.corn % 2)
    //   + "&saltNpep=" + (this.state.saltNpep % 2)
    //   + "&oldbay=" + (this.state.old_bay % 2)
    //   + "&cajun=" + (this.state.cajun % 2)
    //   + "&italian=" + (this.state.italian % 2)
    //   + "&garlic=" + (this.state.garlic % 2)

    urlData = "sauces=" + (this.state.sauce_pesto % 2)
      + "_" + (this.state.sauce_marinara % 2)
      + "_" + (this.state.sauce_alfredo % 2)
      + "&protein=" + (this.state.protein_chicken % 2)
      + "_" + (this.state.protein_shrimp % 2)
      + "_" + (this.state.protein_meatball % 2)
      + "_" + (this.state.protein_sausage % 2)
      + "_" + (this.state.protein_crab_meat % 2)
      + "&topping=" + (this.state.onion % 2)
      + "_" + (this.state.tomato % 2)
      + "_" + (this.state.broccoli % 2)
      + "_" + (this.state.mushroom % 2)
      + "_" + (this.state.corn % 2)
      + "&seasoning=" + (this.state.saltNpep % 2)
      + "_" + (this.state.old_bay % 2)
      + "_" + (this.state.cajun % 2)
      + "_" + (this.state.italian % 2)
      + "_" + (this.state.garlic % 2)
      + "&pasta=" + (this.state.pasta)
      + "&" + (this.state.id);

      this.setState(() => {return {urlDataState : urlData}})

      this.updateStates();

    console.log(urlData);
  }


  updateStates(){
    console.log(this.updateStates.id);
    this.setState(() => {return {urlDataState : urlData}})
  }

  render() {
    return (
      <body>
        <div className="PastaPage" id="container" onMouseDown={() => console.log(urlData)}>
          <img id="login_bg" />
          <h1 id="head">Pasta Menu</h1><br />

          {/*WE NEED TO MAKE IT SO PASTA TYPE IS REQUIRED AND TELLS USER ON SUBMIT*/}
          <form name="pasta_form" method="GET" class="order" onSubmit={this.handleSubmit}>
            <label for="c_pasta" class="item_label">Select Pasta Type</label><br /><br />
            <div id="pasta_options">
              <div class='grid-container'>
                <div class='grid-item'>
                  <input type="radio" id="penne" onChange={() => this.setState((prevState, props) => { return { pasta: 'penne' } })} name="pasta_type" value="penne" class="all_options" required /> <label id='l_penne' for="penne" class="option_label"></label><p id='text'>Penne</p>
                </div>
                <div class='grid-item'>        
                  <input type="radio" id="bowtie" onChange={() => this.setState((prevState, props) => { return { pasta: 'bowtie' } })} name="pasta_type" value="bowtie" class="all_options" required /> <label id='l_bowtie' for="bowtie" class="option_label"></label><p id='text'>Bowtie</p>
                </div>
              </div>
            </div> {/*end pasta options*/} <br />

            <label for="c_sauce" class="item_label">Select Sauce Type</label><br /><br />
            <div id="sauce_options">
            <div class='grid-container2'>
                <div class='grid-item2'>
                  <input type="checkbox" id="pesto" onChange={() => this.setState((prevState, props) => { return { sauce_pesto: prevState.sauce_pesto + 1 } })} name="sauce_type" value="pesto" class="all_options" /> <label id='l_pesto' for="pesto" class="option_label"></label><p id='text'>Pesto</p><br />
                </div>
                <div class='grid-item2'>
                  <input type="checkbox" id="marinara" onChange={() => this.setState((prevState, props) => { return { sauce_marinara: prevState.sauce_marinara + 1 } })} name="sauce_type" value="marinara" class="all_options" /> <label id='l_marinara' for="marinara" class="option_label"></label><p id='text'>Marinara</p><br />
                </div>
                <div class='grid-item2'>
                  <input type="checkbox" id="alfredo" onChange={() => this.setState((prevState, props) => { return { sauce_alfredo: prevState.sauce_alfredo + 1 } })} name="sauce_type" value="alfredo" class="all_options" /> <label id='l_alfredo' for="alfredo" class="option_label"></label><p id='text'>Alfredo</p><br />
                </div>
              </div>
            </div> {/*end sauce options*/} <br />

            {/* <div>
              <p>{this.state.pasta}</p>
              <p>{this.state.sauce_pesto}</p>
              <p>{this.state.sauce_marinara}</p>
              <p>{this.state.sauce_alfredo}</p>
            </div> */}

            <label for="c_protein" class="item_label">Select Proteins</label><br /><br />
            <div id="protein_options">
            <div class='grid-container2'>
                <div class='grid-item2'>
                  <input type="checkbox" id="chicken" onChange={() => this.setState((prevState, props) => { return { protein_chicken: prevState.protein_chicken + 1 } })} name="protein" value="chicken" class="all_options" /> <label id='l_chicken' for="chicken" class="option_label"></label><p id='text'>Chicken</p><br />
                </div>
                <div class='grid-item2'>
                  <input type="checkbox" id="shrimp" onChange={() => this.setState((prevState, props) => { return { protein_shrimp: prevState.protein_shrimp + 1 } })} name="protein" value="shrimp" class="all_options" /> <label id='l_shrimp' for="shrimp" class="option_label"></label><p id='text'>Shrimp</p><br />
                </div>
                <div class='grid-item2'>
                  <input type="checkbox" id="meatball" onChange={() => this.setState((prevState, props) => { return { protein_meatball: prevState.protein_meatball + 1 } })} name="protein" value="meatball" class="all_options" /> <label id='l_meatball'for="meatball" class="option_label"></label><p id='text'>Meatball</p><br />
                  </div>
                <div class='grid-item2'>
                  <input type="checkbox" id="sausage" onChange={() => this.setState((prevState, props) => { return { protein_sausage: prevState.protein_sausage + 1 } })} name="protein" value="sausage" class="all_options" /> <label id='l_sausage' for="sausage" class="option_label"></label><p id='text'>Sausage</p><br />
                  </div>
                <div class='grid-item2'>
                  <input type="checkbox" id="crab_meat" onChange={() => this.setState((prevState, props) => { return { protein_crab_meat: prevState.protein_crab_meat + 1 } })} name="protein" value="crabmeat" class="all_options" /> <label id='l_crabmeat' for="crab_meat" class="option_label"></label><p id='text'>Crab Meat</p><br />
                </div>
              </div>
            </div> {/*end sauce options*/} <br />

            {/* <div>
              <p>{this.state.protein_chicken}</p>
              <p>{this.state.protein_shrimp}</p>
              <p>{this.state.protein_meatball}</p>
              <p>{this.state.protein_sausage}</p>
              <p>{this.state.protein_crab_meat}</p>
            </div> */}

            <label for="c_topping" class="item_label">Select Additional Toppings</label><br /><br />
            <div id="topping_options">
            <div class='grid-container2'>
              <div class='grid-item2'>
                <input type="checkbox" id="onion" onChange={() => this.setState((prevState, props) => { return { onion: prevState.onion + 1 } })} name="ingredients" value="onion" class="all_options" /> <label id='l_onion' for="onion" class="option_label"></label><p id='text'>Onion</p><br />
              </div>
              <div class='grid-item2'>
                <input type="checkbox" id="tomato" onChange={() => this.setState((prevState, props) => { return { tomato: prevState.tomato + 1 } })} name="ingredients" value="tomato" class="all_options" /> <label id='l_tomato' for="tomato" class="option_label"></label><p id='text'>Tomato</p>
                </div>
              <div class='grid-item2'>
                <input type="checkbox" id="broccoli" onChange={() => this.setState((prevState, props) => { return { broccoli: prevState.broccoli + 1 } })} name="ingredients" value="broccoli" class="all_options" /> <label id='l_broccoli' for="broccoli" class="option_label"></label><p id='text'>Broccoli</p>
              </div>
              <div class='grid-item2'>
                <input type="checkbox" id="mushroom" onChange={() => this.setState((prevState, props) => { return { mushroom: prevState.mushroom + 1 } })} name="ingredients" value="mushroom" class="all_options" /> <label id='l_mushroom' for="mushroom" class="option_label"></label><p id='text'>Mushroom</p><br />
                </div>
              <div class='grid-item2'>
                <input type="checkbox" id="corn" onChange={() => this.setState((prevState, props) => { return { corn: prevState.corn + 1 } })} name="ingredients" value="Corn" class="all_options" /> <label id='l_corn' for="corn" class="option_label"></label><p id='text'>Corn</p><br />
              </div>
            </div>
            </div> {/*end toppings options*/} <br />

            {/* <div>
              <p>{this.state.onion}</p>
              <p>{this.state.tomato}</p>
              <p>{this.state.broccoli}</p>
              <p>{this.state.mushroom}</p>
              <p>{this.state.corn}</p>
            </div> */}

            <label for="c_seasoning" class="item_label">Select Seasonings</label><br /><br />
            <div id="seasoning_options">
            <div class='grid-container2'>
              <div class='grid-item2'>
                <input type="checkbox" id="saltNpep" onChange={() => this.setState((prevState, props) => { return { saltNpep: prevState.saltNpep + 1 } })} name="seasonings" value="saltAndPepper" class="all_options" /> <label id='l_saltnpep' for="saltNpep" class="option_label"></label><p id='text'>Salt Pepper</p><br />
              </div>
              <div class='grid-item2'>
                <input type="checkbox" id="old_bay" onChange={() => this.setState((prevState, props) => { return { old_bay: prevState.old_bay + 1 } })} name="seasonings" value="oldBay" class="all_options" /> <label id='l_old_bay' for="old_bay" class="option_label"></label><p id='text'>Old Bay</p><br />
              </div>
              <div class='grid-item2'>
                <input type="checkbox" id="cajun" onChange={() => this.setState((prevState, props) => { return { cajun: prevState.cajun + 1 } })} name="seasonings" value="cajun" class="all_options" /> <label id='l_cajun'for="cajun" class="option_label"></label><p id='text'>Cajun</p><br />
              </div>
              <div class='grid-item2'>
                <input type="checkbox" id="italian" onChange={() => this.setState((prevState, props) => { return { italian: prevState.italian + 1 } })} name="seasonings" value="italian" class="all_options" /> <label id='l_italian' for="italian" class="option_label"></label><p id='text'>Italian</p><br />
              </div>

              <div class='grid-item2'>
                <input type="checkbox" id="garlic" onChange={() => this.setState((prevState, props) => { return { garlic: prevState.garlic + 1 } })} name="seasonings" value="garlic" class="all_options" /> <label id='l_garlic' for="garlic" class="option_label"></label><p id='text'>Garlic</p><br />
              </div>
            </div>
            </div> {/*end seasonings options*/} <br />

            {/* <div>
              <p>{this.state.saltNpep}</p>
              <p>{this.state.old_bay}</p>
              <p>{this.state.cajun}</p>
              <p>{this.state.italian}</p>
              <p>{this.state.garlic}</p>
            </div> */}
            <Link to={urlVar + "?" + this.state.urlDataState} onMouseDown={() => this.updateUrlData()} onClick={() => this.updateStates()}><input type="submit" class = "item_label" value="Add item to order" /></Link>

          </form>

        </div> {/*end pasta page*/}
      </body>
    );
  }
}

export default PastaPage;