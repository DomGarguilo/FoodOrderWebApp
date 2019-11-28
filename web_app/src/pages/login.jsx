import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../components/LoginPage"

function numberInput(number) {
    document.getElementById('studentID').value += number;
}

//Deletes last digit
 function del() {
    var input = document.getElementById('studentID').value;
    input = input.substring(0, input.length - 1);
    document.getElementById('studentID').value = input;
}

const Login = () => {

    return (
        
        <LoginPage />

    );

}

export default Login;