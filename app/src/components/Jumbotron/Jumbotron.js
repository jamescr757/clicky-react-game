import React from "react";
import "./style.css"

function Jumbotron() {

    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-4">Clicky Game - Mario Version!</h1>
                <p className="lead">Click on an image to earn points, but don't click on any more than once.</p>
            </div>
        </div>
    );
}


export default Jumbotron;