import React from "react";
import "./style.css"
import Card from "../Card";

class CardContainer extends React.Component {


    render() {
        return (
            <div className="card-container">
                {/* {
                    cardArray.map(card => (
                        <Card />
                    ))
                } */}
                <Card />
            </div>
        );
    }
}


export default CardContainer;