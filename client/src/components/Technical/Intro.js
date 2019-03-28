import React, { Component } from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import * as $ from 'axios';

class Intro extends React.Component {
    state = {
        npcName: 'Intro',
        dialogue: []
    }

    render() {
        return (
            <p>Intro Placeholder</p>

        )
    }

}

export default Intro;