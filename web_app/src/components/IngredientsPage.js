import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/ingredientStyle.css";
import "../styles/commonStyle.css";

class IngredientsPage extends Component {

  constructor() {
    super();
    this.state = {
      Alfredo: 0,
      Bacon: 0,
      Bowtie: 0,
      Broccoli: 0,
      Cajun: 0,
      Cheese: 0,
      Chicken: 0,
      Egg: 0,
      Marinara: 0,
      Meatball: 0,
      Mushroom: 0,
      Old_Bay: 0,
      Onion: 0,
      Pancakes: 0,
      Penne: 0,
      Pepper: 0,
      Pesto: 0,
      Salt: 0,
      Sausage: 0,
      Spinach: 0,
      Vegan_Chicken: 0,
      stats: "",
    }
  }

  componentDidMount() {
    //retrieve test IDs from table 'users' on the api (can change this later)
    fetch("https://wv-food-order-api.herokuapp.com/ingredient_status")
      .then(res => res.text())
      .then(res => this.setState({ stats: res }))
      .catch(err => err);
    //console.log(this.state.validIDs);
  }

  initStatus() {
    var s = this.state.stats;
    // console.log(ids);
    s = s.replace('[', ''); //remove excess API string junk
    s = s.replace(']', ''); //ie) '["123","234"]' becomes '123,234'
    s = s.replace(/"/g, '');
    s = s.split(",");

    var i = 0;
    for (var key in this.state) {
      this.setState({[key] : s[i]});
      i++;
    }

    this.setState({stats : s});

  }

  render() {
    return (
      <body>
        <div className="IngredientsPage" id="container">
          <img id="login_bg" />
          <h1 id="head">Ingredient Status Page</h1>
          <h3 id="please_select">
            Click to alter the status of an ingredient
          </h3>{" "}
          <br />

          {() => this.initStatus()}

          <table>
            <tr>
              <th>Ingredient</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Alfredo {this.state.stats}</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td>Bacon</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Bowtie</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Broccoli</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Cajun</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Cheese</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Chicken</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Egg</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Marinara</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Meatball</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Mushroom</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>              </td>
            </tr>
            <tr>
              <td>Old_Bay</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Onion</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Pancakes</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>              </td>
            </tr>
            <tr>
              <td>Penne</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Pepper</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>              </td>
            </tr>
            <tr>
              <td>Pesto</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Salt</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
            <tr>
              <td>Sausage</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>              </td>
            </tr>
            <tr>
              <td>Spinach</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>              </td>
            </tr>
            <tr>
              <td>Vegan_Chicken</td>
              <td>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider"></span>
                </label>{" "}
              </td>
            </tr>
          </table>
        </div>
      </body>
    );
  }
}

class StatusButton extends Component {
  render() {
    return <button type="button">{this.props.item}</button>;
  }
}

export default IngredientsPage;


/* THIS VERSION MIGHT BE EASIER. COULD JUST USE PROPS.ITEM TO QUERY THE DB
<tr><td>Alfredo</td><td><StatusButton item="In" /></td></tr>
            <tr><td>Bacon</td><td><StatusButton item="Bacon" /></td></tr>
            <tr><td>Bowtie</td><td><StatusButton item="Bowtie" /></td></tr>
            <tr><td>Brocoli</td><td><StatusButton item="Brocoli" /></td></tr>
            <tr><td>Cajun</td><td><StatusButton item="Cajun" /></td></tr>
            <tr><td>Cheese</td><td><StatusButton item="Cheese" /></td></tr>
            <tr><td>Chicken</td><td><StatusButton item="Chicken" /></td></tr>
            <tr><td>Egg</td><td><StatusButton item="Egg" /></td></tr>
            <tr><td>Marinara</td><td><StatusButton item="Marinara" /></td></tr>
            <tr><td>Meatball</td><td><StatusButton item="Meatball" /></td></tr>
            <tr><td>Mushroom</td><td><StatusButton item="Mushroom" /></td></tr>
            <tr><td>Old_Bay</td><td><StatusButton item="Old_Bay" /></td></tr>
            <tr><td>Onion</td><td><StatusButton item="Onion" /></td></tr>
            <tr><td>Pancakes</td><td><StatusButton item="Pancakes" /></td></tr>
            <tr><td>Penne</td><td><StatusButton item="Penne" /></td></tr>
            <tr><td>Pepper</td><td><StatusButton item="Pepper" /></td></tr>
            <tr><td>Pesto</td><td><StatusButton item="Pesto" /></td></tr>
            <tr><td>Salt</td><td><StatusButton item="Salt" /></td></tr>
            <tr><td>Sausage</td><td><StatusButton item="Sausage" /></td></tr>
            <tr><td>Spinach</td><td><StatusButton item="Spinach" /></td></tr>
            <tr><td>Vegan_Chicken</td><td><StatusButton item="Vegan_Chicken" /></td></tr> */