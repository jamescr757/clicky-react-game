import React from "react";
import "./style.css";

class Card extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         clicked: false
    //     }
    // }

    // hasBeenClicked = () => {
    //     this.setState({
    //         clicked: true
    //     })
    // }

    render() {
        return (
            <div className="click-card-frame">
                <div className="click-card" 
                    style={{backgroundImage: `url(${this.props.image})`}}
                    onClick={()=>this.props.handleCardClick(this.props.id)}
                >
                </div>
            </div>
        );
    }
}

export default Card;