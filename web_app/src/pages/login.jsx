import React from "react";
import { Link } from "react-router-dom";

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
        <div>
            <h1 id="head">Welcome</h1>
            <h3>Please log in with your TU-ID</h3>
            <form id='loginForm' action='selection_page.html' method='GET' class='order'>

                <div>

                    <h5>ID: <input type='text' name='studentID' id='studentID' /> </h5>

                </div>

                <table>

                    <tb>
                        {/* <!--Table 7,8,9 --> */}
                        <tr>
                            <td onClick={numberInput(7)}>7</td>
                            <td onClick="numberInput(8)">8</td>
                            <td onClick="numberInput(9)">9</td>
                        </tr>

                        {/* <!--Table 4,5,6 --> */}
                        <tr>
                            <td onClick="numberInput(4)">4</td>
                            <td onClick="numberInput(5)">5</td>
                            <td onClick="numberInput(6)">6</td>
                        </tr>

                        {/* <!--Table 1,2,3--> */}
                        <tr>
                            <td onClick="numberInput(1)">1</td>
                            <td onClick="numberInput(2)">2</td>
                            <td onClick="numberInput(3)">3</td>
                        </tr>

                        {/* <!--Table 0,Delete--> */}
                        <tr>
                            <td onClick="numberInput(0)">0</td>
                            <td onClick="del()" colspan="2">Delete</td>
                        </tr>

                    </tb>
                    <tf>
                        {/* <!--Table Enter--> */}
                        
                    </tf>

                </table>

            </form>
        </div>



    );

}

export default Login;