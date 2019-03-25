import React, { Component } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import * as $ from 'axios';

class Home extends React.Component {
    state = {
        reguser: '',
        regpw: '',
        username: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.toLowerCase()
        })
    }

    render() {
        return (
            <div >
                <h1>HomePage Placeholder</h1>
                <h2>New Game</h2>
                <h2>Load Game</h2>

                <Link to="/World">World</Link>
            </div>
        );
    }
}

export default Home;