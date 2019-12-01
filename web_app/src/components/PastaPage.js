import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/pastaStyle.css";
import "../styles/commonStyle.css";

var urlVar = "/orderConformation";

class PastaPage extends Component {

  constructor() {
    super();
    this.state = {
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

      // protein : {
      //   chicken : false,
      //   shrimp : false,
      //   meatball : false,
      //   sausage : false,
      //   crab_meat : false,
      // },
    };
  }

  render() {
    return (
      <body>
        <div className="PastaPage" id="container">
          <img id="login_bg" />
          <h1 id="head">Pasta Menu</h1><br />

          {/*WE NEED TO MAKE IT SO PASTA TYPE IS REQUIRED AND TELLS USER ON SUBMIT*/}
          <form name="pasta_form" method="GET" action="review_order.html" class="order" onSubmit={this.handleSubmit}>
            <label for="c_pasta" class="item_label">Select Pasta Type</label><br /><br />
            <div id="pasta_options">
              <input type="radio" id="penne" onChange={() => this.setState((prevState, props) => { return { pasta: 'penne' } })} name="pasta_type" value="penne" class="all_options" required /> <label for="penne" class="option_label">Penne</label>
              <input type="radio" id="bowtie" onChange={() => this.setState((prevState, props) => { return { pasta: 'bowtie' } })} name="pasta_type" value="bowtie" class="all_options" required /> <label for="bowtie" class="option_label">Bowtie</label>
            </div> {/*end pasta options*/} <br />

            <label for="c_sauce" class="item_label">Select Sauce Type</label><br /><br />
            <div id="sauce_options">
              <input type="checkbox" id="pesto" onChange={() => this.setState((prevState, props) => { return { sauce_pesto: prevState.sauce_pesto + 1 } })} name="sauce_type" value="pesto" class="all_options" /> <label for="pesto" class="option_label">Pesto</label><br />
              <input type="checkbox" id="marinara" onChange={() => this.setState((prevState, props) => { return { sauce_marinara: prevState.sauce_marinara + 1 } })} name="sauce_type" value="marinara" class="all_options" /> <label for="marinara" class="option_label">Marinara</label><br />
              <input type="checkbox" id="alfredo" onChange={() => this.setState((prevState, props) => { return { sauce_alfredo: prevState.sauce_alfredo + 1 } })} name="sauce_type" value="alfredo" class="all_options" /> <label for="alfredo" class="option_label">Alfredo</label><br />
            </div> {/*end sauce options*/} <br />

            <div>
              <p>{this.state.pasta}</p>
              <p>{this.state.sauce_pesto}</p>
              <p>{this.state.sauce_marinara}</p>
              <p>{this.state.sauce_alfredo}</p>
            </div>

            <label for="c_protein" class="item_label">Select Proteins</label><br /><br />
            <div id="protein_options">
              <input type="checkbox" id="chicken" onChange={() => this.setState((prevState, props) => { return { protein_chicken: prevState.protein_chicken + 1 } })} name="protein" value="chicken" class="all_options" /> <label for="chicken" class="option_label">Chicken</label><br />
              <input type="checkbox" id="shrimp" onChange={() => this.setState((prevState, props) => { return { protein_shrimp: prevState.protein_shrimp + 1 } })} name="protein" value="shrimp" class="all_options" /> <label for="shrimp" class="option_label">Shrimp</label><br />
              <input type="checkbox" id="meatball" onChange={() => this.setState((prevState, props) => { return { protein_meatball: prevState.protein_meatball + 1 } })} name="protein" value="meatball" class="all_options" /> <label for="meatball" class="option_label">Meatball</label><br />
              <input type="checkbox" id="sausage" onChange={() => this.setState((prevState, props) => { return { protein_sausage: prevState.protein_sausage + 1 } })} name="protein" value="sausage" class="all_options" /> <label for="sausage" class="option_label">Sausage</label><br />
              <input type="checkbox" id="crab_meat" onChange={() => this.setState((prevState, props) => { return { protein_crab_meat: prevState.protein_crab_meat + 1 } })} name="protein" value="crabmeat" class="all_options" /> <label for="crab_meat" class="option_label">Crab Meat</label><br />
            </div> {/*end sauce options*/} <br />

            <div>
              <p>{this.state.protein_chicken}</p>
              <p>{this.state.protein_shrimp}</p>
              <p>{this.state.protein_meatball}</p>
              <p>{this.state.protein_sausage}</p>
              <p>{this.state.protein_crab_meat}</p>
            </div>

            <label for="c_topping" class="item_label">Select Additional Toppings</label><br /><br />
            <div id="topping_options">
              <input type="checkbox" id="onion" onChange={() => this.setState((prevState, props) => { return { onion: prevState.onion + 1 } })} name="ingredients" value="onion" class="all_options" /> <label for="onion" class="option_label">Onion</label><br />
              <input type="checkbox" id="tomato" onChange={() => this.setState((prevState, props) => { return { tomato: prevState.tomato + 1 } })} name="ingredients" value="tomato" class="all_options" /> <label for="tomato" class="option_label">Tomato</label><br />
              <input type="checkbox" id="broccoli" onChange={() => this.setState((prevState, props) => { return { broccoli: prevState.broccoli + 1 } })} name="ingredients" value="broccoli" class="all_options" /> <label for="broccoli" class="option_label">Broccoli</label><br />
              <input type="checkbox" id="mushroom" onChange={() => this.setState((prevState, props) => { return { mushroom: prevState.mushroom + 1 } })} name="ingredients" value="mushroom" class="all_options" /> <label for="mushroom" class="option_label">Mushroom</label><br />
              <input type="checkbox" id="corn" onChange={() => this.setState((prevState, props) => { return { corn: prevState.corn + 1 } })} name="ingredients" value="Corn" class="all_options" /> <label for="corn" class="option_label">Corn</label><br />
            </div> {/*end toppings options*/} <br />

            <div>
              <p>{this.state.onion}</p>
              <p>{this.state.tomato}</p>
              <p>{this.state.broccoli}</p>
              <p>{this.state.mushroom}</p>
              <p>{this.state.corn}</p>
            </div>

            <label for="c_seasoning" class="item_label">Select Seasonings</label><br /><br />
            <div id="seasoning_options">
              <input type="checkbox" id="saltNpep" name="seasonings" value="saltAndPepper" class="all_options" /> <label for="saltNpep" class="option_label">Salt and Pepper</label><br />
              <input type="checkbox" id="old_bay" name="seasonings" value="oldBay" class="all_options" /> <label for="old_bay" class="option_label">Old Bay</label><br />
              <input type="checkbox" id="cajun" name="seasonings" value="cajun" class="all_options" /> <label for="cajun" class="option_label">Cajun</label><br />
              <input type="checkbox" id="italian" name="seasonings" value="italian" class="all_options" /> <label for="italian" class="option_label">Italian</label><br />
              <input type="checkbox" id="garlic" name="seasonings" value="garlic" class="all_options" /> <label for="garlic" class="option_label">Garlic</label><br />
            </div> {/*end seasonings options*/} <br />

            <Link to={urlVar + "?" + "yeehaw"} ><input type="submit" id="button" value="Add item to order" /></Link>


          </form>

        </div> {/*end pasta page*/}
      </body>
    );
  }
}

export default PastaPage;