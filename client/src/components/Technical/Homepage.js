import React, { Component } from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import * as $ from 'axios';
import codeGIF from "../../Backgrounds/code.gif"


class Homepage extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.toLowerCase()
        })
    }

    handlePWChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = (event) => {
        event.preventDefault();
        $.post('/api/authenticate', { username: this.state.username, password: this.state.password })
            .then((data) => {
                sessionStorage.setItem('userId', data.data.id);
                this.props.history.push("/WorldMap")
            }).catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div id="homeBackground">
                <img className="BG" src={codeGIF} alt="LoginPage" />

                <div id="titleBlock" class="container">
                    <h1 className="gameTitle"><span id="word1">The </span><span id="word2">LAST </span><span id="word3">Developer</span></h1>
                    <h2 className="gameMotto">Sometimes You Will Have to Code with Your Fists</h2>

                </div>
                <div id="homePageStyle" class="container">
                    <h3 id="loginTitle">Log In to Your Account</h3>
                    <div id="homeInput">
                        <div className="input-group-prepend homeInput">
                            <span className="input-group-text" id="basic-addon1"> <i className="fas fa-user-circle"></i> </span>
                            <input value={this.state.username} onChange={this.handleChange} name="username" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group-prepend homeInput">
                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                            <input onChange={this.handlePWChange} name="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>

                    </div>
                    <div id="signIn">
                        <button type="button" id="signInBtnStyle" className="btn btn-primary" onClick={this.handleLogin}>
                            Log in
                       </button>
                        <h5 id="registerBtnStyle">Need an Account?
                   <button type="button" className="btn btn-primary regBtn">
                                Register
                       </button>
                        </h5>
                    </div>
                </div>
            </div>



        );
    }
}

export default Homepage;