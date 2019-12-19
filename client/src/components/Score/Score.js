import React from "react";
import "./Score.css";

function Score(props) {

    return (
        <span className={props.className}>{props.children} {props.score}</span>
    );
}

export default Score;
