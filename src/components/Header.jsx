import React from "react";
import logo from '../assets/logo.png'
import "../App.css"

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" >
            <div class="container-fluid d-flex">
            <button class="navbar-brand" >
                    <img src={logo} alt="" width="50" height="50"/>
                   </button>
                <div class=" justify-content-end" id="navbarText">
                    {/* <ul class="nav nav-pills ">
                    <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"></a>
                        </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Donation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Feedback</a>
                        </li>
                    </ul> */}
                    <span class="navbar-text "><ul className="list-group"><li className="list-group-item active">Library is open</li></ul>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header;