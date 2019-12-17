import React from "react";

class CurrentScore extends React.Component {

    render() {
        return (
            <h2 className="text-center my-0">Current Score: {this.props.currentScore}</h2>
        );
    }
}

export default CurrentScore;