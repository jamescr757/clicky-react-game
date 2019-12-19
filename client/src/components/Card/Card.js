import React from "react";
import "./Card.css";

function Card(props) {

    return (
        <div className="click-card-frame">
            <div className="click-card" 
                style={{backgroundImage: `url(${props.image})`}}
                onClick={()=>props.handleCardClick(props.id)}
            >
            </div>
        </div>
    );
}

export default Card;