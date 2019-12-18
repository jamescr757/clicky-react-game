import React from "react";
import "./Message.css";


function Message(props) {
    return (
        <h4 className="message">{props.message}</h4>
    );
}

export default Message;