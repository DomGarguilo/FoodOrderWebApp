import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/selectionStyle.css";

class SelectionPage extends Component {
  render() {
    return (
      <body>
        <img id = "bg"/>
        <h1 id="head">Make a Selection</h1>
            
            <input type='hidden' value='' name='studentID' id='studentID'/>
            <div class='order'>
                <div id='t1'>
    
                    <figure id='breakfast'>
                        <figcaption id="text">BREAKFAST
                        </figcaption>
                        <img id = "bf"/>
                    </figure>
                </div>
                <div id='t2'>
    
                    <figure id='pasta'>
                        <figcaption >PASTA</figcaption>
                        <img id = "p"/>
    
                    </figure>
                </div>
              </div>
    </body>
    );
  }
}

export default SelectionPage;