import React from "react";
import "./CardContainer.css"
import Card from "../Card";
import characters from "./characters.json";
import { shuffle } from "../../utils/shuffle";

function CardContainer(props) {

    let characterArray;
    if (props.shuffleCards) {
        characterArray = shuffle(characters);
    } else {
        characterArray = characters;
    }

    return (
        <div className="card-container">
            {characterArray.map((character, index) => (
                <Card 
                    key={index}
                    image={`./images/${character.name}.jpeg`}
                    id={character.id}
                    handleCardClick={props.handleCardClick}
                />
            ))}
        </div>
    );
}


export default CardContainer;