import React from "react";

class HighScore extends React.Component {

    render() {
        return (
            <span>High Score: {this.props.highScore}</span>
        );
    }
}

export default HighScore;