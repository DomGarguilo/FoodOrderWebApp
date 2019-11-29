import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/pastaStyle.css";
import "../styles/commonStyle.css";

class PastaPage extends Component {
  render() {
    return (
      <body>
    <div className="PastaPage">
      
      <img id = "login_bg"/>
        <h1 id="head">Pasta Menu</h1>
        <form name="pasta_form" method="GET" action="review_order.html" class="order">
          <input type = "checkbox" id = "c_pasta" name = "PastaItem" onclick = "displayPastaOptions(checked)" class = "radio-tools"/>
          <label for = "c_pasta" class = "item_label">Select Pasta Type</label>
          <div id = "pasta_options">
            <input type="radio" id = "penne" name="pasta_type" value="penne" class = "all_options" required/> <label for = "penne" class = "option_label">Penne</label>
            <input type="radio" id = "bowtie" name="pasta_type" value="bowtie" class = "all_options" required/> <label for = "bowtie" class = "option_label">Bowtie</label>
          </div>
          </form>
      
    </div>
    </body>
    );
  }
}

export default PastaPage;