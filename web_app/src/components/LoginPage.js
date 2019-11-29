import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/loginStyle.css";
import "../styles/commonStyle.css"

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
      for (var i = 0; i < idArr.length - 1; i++) {
        id += idArr[i];
      }
      return { ID: id }
    });
  }

  render() {
    return (
      <body>
        <div id="container">

          <img id="login_bg" />

          <h1 id="head">Welcome</h1>
          <h3>Please log in with your TU-ID</h3>

          <div id="login_credentials">

            <h5>ID: <input type='text' value={this.state.ID} onChange={this.numberInput} /> </h5>

          </div>

          <table className="center">

            <tb>
              {/* <!--Table 7,8,9 --> */}
              <tr>
                <td><button id="seven" onClick={() => this.numberInput(7)}>7</button></td>
                <td><button id="eight" onClick={() => this.numberInput(8)}>8</button></td>
                <td><button id="nine" onClick={() => this.numberInput(9)}>9</button></td>
              </tr>

              {/* <!--Table 4,5,6 --> */}
              <tr>
                <td><button id="four" onClick={() => this.numberInput(4)}>4</button></td>
                <td><button id="five" onClick={() => this.numberInput(5)}>5</button></td>
                <td><button id="six" onClick={() => this.numberInput(6)}>6</button></td>
              </tr>

              {/* <!--Table 1,2,3--> */}
              <tr>
                <td><button id="one" onClick={() => this.numberInput(1)}>1</button></td>
                <td><button id="two" onClick={() => this.numberInput(2)}>2</button></td>
                <td><button id="three" onClick={() => this.numberInput(3)}>3</button></td>
              </tr>

              {/* <!--Table 0,Delete--> */}
              <tr>
                <td><button id="zero" onClick={() => this.numberInput(0)}>0</button></td>
                <td colspan="2"><button id="delete" onClick={() => this.del()}>Delete</button></td>
              </tr>
              <tr>
                {/* <!--Table Enter--> */}
                <td colspan="3"><Link to="/selection"><button id="enter">Enter</button></Link></td>
              </tr>
            </tb>

          </table>

        </div>
      </body>

    );

  }
}

export default LoginPage;