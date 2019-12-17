import React from "react";
import "./style.css";

function Card(props) {

    return (
        <div className="click-card-frame">
            <div className="click-card" 
            style={{backgroundImage: `url(${props.image})`}}
            >
            </div>
        </div>
    );
}

export default Card;