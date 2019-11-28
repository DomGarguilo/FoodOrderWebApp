import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      ID: "",
    }
  }

  //Takes passed # and adds it to the textfield
  numberInput(number) {
    this.setState((prevState, props) => {
      return { ID: prevState.ID + number }
    });
  }

  //Deletes last digit
  del() {
    this.setState((prevState, props) => {
      var id = prevState.ID;
      var idArr = id.split("");
      id = "";
      for (var i = 0; i < idArr.length-1; i++) {
        id += idArr[i];
      }
      return { ID: id }
    });
  }

  selection() {
    return <link to="/SelectionPage"></link>;
  }

  render() {
    return (

      <div>
        <h1 id="head">Welcome</h1>
        <h3>Please log in with your TU-ID</h3>

        <div>

          <h5>ID: <input type='text' value={this.state.ID} onChange={this.numberInput} /> </h5>

        </div>

        <table>

          <tb>
            {/* <!--Table 7,8,9 --> */}
            <tr>
              <button onClick={() => this.numberInput(7)}>7</button>
              <button onClick={() => this.numberInput(8)}>8</button>
              <button onClick={() => this.numberInput(9)}>9</button>
            </tr>

            {/* <!--Table 4,5,6 --> */}
            <tr>
              <button onClick={() => this.numberInput(4)}>4</button>
              <button onClick={() => this.numberInput(5)}>5</button>
              <button onClick={() => this.numberInput(6)}>6</button>
            </tr>

            {/* <!--Table 1,2,3--> */}
            <tr>
              <button onClick={() => this.numberInput(1)}>1</button>
              <button onClick={() => this.numberInput(2)}>2</button>
              <button onClick={() => this.numberInput(3)}>3</button>
            </tr>

            {/* <!--Table 0,Delete--> */}
            <tr>
              <button onClick={() => this.numberInput(0)}>0</button>
              <button onClick={() => this.del()}>Delete</button>
            </tr>
            <tr>
              {/* <!--Table Enter--> */}
              <button onClick={this.selection()} colspan="3">Enter</button>
            </tr>
          </tb>

        </table>

      </div>

    );

  }
}

export default LoginPage;