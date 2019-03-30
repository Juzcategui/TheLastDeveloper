import React from "react";
import "./dialogue.css";

const DialogueBox = props => (

    < section >
        {/* <img id="avatar" src={require(`../../Sprites/${props.name}.png`)}></img> */}
        <p

            className="DiaBox"
            style={{
                // left: props.pos[0],
                // top: props.pos[1],
                backgroundColor: "white",
                color: "black",
                position: "absolute",
                bottom: 5,
                right: 5,
                margin: 10,
                borderRadius: 5,
                fontSize: 30,
                width: 1000,
                opacity: 0.8,
                borderWidth: 5,
                borderStyle: "solid",
            }}
        >

            <p className="nameTag">{props.name}</p>
            <p style={{ padding: 8, }}>{props.dialogue}</p>
        </p>

    </section >
);


export default DialogueBox;
