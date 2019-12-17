import React from "react";

class Score extends React.Component {

    render() {
        return (
            <span>{this.props.children} {this.props.score}</span>
        );
    }
}

export default Score;