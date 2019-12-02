import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/welcomeStyle.css"

class WelcomePage extends Component {

    render() {
        return (
            <body>
            <div className="BreakfastPage" id="container">
                <img id="login_bg" />

                <h1 id="head">Welcome to West Village Dining Hall</h1>

                <Link to="/custLogin" ><button class="loginSelect">Customer Login</button></Link>
                <br/><br/>
                <Link to="/empLogin" ><button class="loginSelect">Employee Login</button></Link>

            </div>
        </body>
        );
    }
}

export default WelcomePage;