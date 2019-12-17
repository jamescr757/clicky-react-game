import React from "react";
import "./style.css"
import Card from "../Card";
import characters from "./characters.json";

class CardContainer extends React.Component {

    render() {
        return (
            <div className="card-container">
                {characters.map((character, index) => (
                    <Card 
                        key={index}
                        image={`./images/${character.name}.jpeg`}
                        onClick={this.props.increaseScore}
                    />
                ))}
            </div>
        );
    }
}


export default CardContainer;