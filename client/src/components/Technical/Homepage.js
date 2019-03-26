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

    handleLogin = (event) => {
        event.preventDefault();
        $.post('/api/authenticate', { username: this.state.username, password: this.state.password })
            .then((data) => {
                console.log(data)
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
                <h1 className="gameTitle"><span id="word1">The </span><span id="word2">LAST </span><span id="word3">Developer</span></h1>

                <div id="homePageStyle">

                    <div className="input-group-prepend homeInput">
                        <span className="input-group-text" id="basic-addon1"> <i className="fas fa-user-circle"></i> </span>
                        <input onChange={this.handleChange} name="username" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group-prepend homeInput">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                        <input onChange={this.handleChange} name="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                    </div>

                    <div id="signIn">
                        <button type="button" id="signInBtnStyle" className="btn btn-dark" onClick={this.handleLogin}>
                            Log in
                        </button>
                    </div>


                    <div id="register">
                        <h4>New player?
                    <button type="button" id="registerBtnStyle" className="btn btn-warning">
                                <Link to="/Register">Register</Link></button>
                        </h4>
                    </div>


                </div>

            </div>



        );
    }
}

export default Homepage;