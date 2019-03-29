import React from "react";
import "./dialogue.css";

const DialogueBox = props => (
    <div
        className="DiaBox"
        style={{
            left: props.pos[0],
            top: props.pos[1],
            backgroundColor: "red",
            color: "white",
            position: "absolute"
        }}
    >
        <p>{props.dialogue}</p>
    </div>
);

export default DialogueBox;