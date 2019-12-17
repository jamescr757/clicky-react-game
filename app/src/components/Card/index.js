import React from "react";
import "./style.css";
import characters from "./characters.json";

class Card extends React.Component {

    render() {
        return (
            characters.map((character, index) => (
                <div className="click-card-frame">
                    <div className="click-card" 
                    style={{backgroundImage: `url(./images/${character.name}.jpeg)`}}
                    key={index}
                    >
                    </div>
                </div>
            ))
        );
    }
}

export default Card;