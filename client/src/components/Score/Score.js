import React from "react";
import "./Score.css";

class Score extends React.Component {

    render() {
        return (
            <span className={this.props.className}>{this.props.children} {this.props.score}</span>
        );
    }
}

export default Score;
