import React from "react";
import "./CardContainer.css"
import Card from "../Card";
import characters from "./characters.json";
import { shuffle } from "../../utils/shuffle";

class CardContainer extends React.Component {

    render() {

        let shuffledCharacters;
        if (this.props.shuffleCards) {
            shuffledCharacters = shuffle(characters);
        } else {
            shuffledCharacters = characters;
        }

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