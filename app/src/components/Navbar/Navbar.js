import React from "react";
import "./style.css";
import Score from "../Score"

function Navbar(props) {
    
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Clicky Game <span className="sr-only">(current)</span></a>
                </li>
                </ul>
                <span className="navbar-text">
                    <Score score={props.score}>
                        High Score:
                    </Score>
                </span>
            </div>
        </nav>
    );
}


export default Navbar;