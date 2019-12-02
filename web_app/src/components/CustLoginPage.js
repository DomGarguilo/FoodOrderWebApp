import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/loginStyle.css";
import "../styles/commonStyle.css"

var urlLink = '/selection';
var urlData;

class CustLoginPage extends Component {

  constructor() {
    super();
    this.state = {
      dummyState: '', //used to make this shitty react program WORK
      ID: "",
      validIDs: "",
      orderNum: '',
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

  componentDidMount() {
    //retrieve test IDs from table 'users' on the api (can change this later)
    fetch("https://wv-food-order-api.herokuapp.com/testCustIds")
      .then(res => res.text())
      .then(res => this.setState({ validIDs: res }))
      .catch(err => err);

    
    fetch("https://wv-food-order-api.herokuapp.com/OrderNumber")
      .then(res => res.text())
      .then(res => this.setState({ orderNum: res }))
      .catch(err => err);
    //console.log(this.state.validIDs);
  }

  //checks if the user's numpad ID matches and existing IDs
  checkId(e) {
    // console.log(this.state.validIDs);
    var ids = this.state.validIDs;
    // console.log(ids);
    ids = ids.replace('[', ''); //remove excess API string junk
    ids = ids.replace(']', ''); //ie) '["123","234"]' becomes '123,234'
    ids = ids.replace(/"/g, '');
    // console.log(ids);
    ids = ids.split(",");
    console.log(ids.includes(this.state.ID) ? "yes" : "no"); //yes - exists, no - doesnt
    if (ids.includes(this.state.ID)) { //id does exist

      console.log(this.state.orderNum);
      //[{"max(Order_Num)":97646}]
      var orderNumJSON = this.state.orderNum;
      orderNumJSON = orderNumJSON.substring(19, orderNumJSON.length);
      orderNumJSON = orderNumJSON.replace(/}]/, '');

      this.setState(() => { return { orderNum: orderNumJSON} });
      this.setState(() => {return { orderNum: orderNumJSON}});
      console.log(orderNumJSON + " " + this.state.orderNum);
      urlData = "id=" + this.state.ID + "&orderNum=" + this.state.orderNum;
      return true;
    }
    else { //id doesnt exists
      //more code here to indicate to the user that the ID doesnt exist (maybe?)
      return (
        e.preventDefault(),
        window.alert("Please make sure that you entered a valid ID!")
      );
    }
  }

  updateStates() {
    urlData = "id=" + this.state.ID + "&orderNum=" + this.state.orderNum;
    this.setState(() => { return { dummyState: '' } })
  }

  render() {
    return (
      <body>
        <div id="container" >

          <img id="login_bg" />

          <h1 id="head">Customer Login</h1>
          <h3>Please log in with your TU-ID {this.state.idArr}</h3>

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
                <td colspan="3" ><Link to={urlLink + "?" + urlData} onMouseDown={() => this.updateStates()} onClick={(e) => this.checkId(e)}><button id="enter">Enter</button></Link></td>
              </tr>
            </tb>

          </table>
          {/* <p>;;{this.state.ID}</p> */}

        </div>
      </body>

    );

  }
}

export default CustLoginPage;