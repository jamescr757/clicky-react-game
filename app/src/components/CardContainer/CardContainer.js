import React from "react";
import "./style.css"
import Card from "../Card";
import characters from "./characters.json";
import { shuffle } from "../../utils/shuffle";

class CardContainer extends React.Component {

    render() {

        const shuffledCharacters = shuffle(characters);

        return (
            <div className="card-container">
                {shuffledCharacters.map((character, index) => (
                    <Card 
                        key={index}
                        image={`./images/${character.name}.jpeg`}
                        id={character.id}
                        handleCardClick={this.props.handleCardClick}
                    />
                ))}
            </div>
        );
    }
}


export default CardContainer;