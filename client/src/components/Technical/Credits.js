import React, { Component } from "react";
import '../../App.css'
import { Link, Redirect } from "react-router-dom";
import * as $ from 'axios';

class Credits extends React.Component {
    state = {
        npcName: 'Credits',
        dialogue: [],
        redirect: false,
    }


    render() {
        return (
            <p>credits</p>
        )
    }
}

export default Credits;