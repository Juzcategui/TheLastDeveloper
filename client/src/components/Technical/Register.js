import React, { Component } from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import * as $ from 'axios';

class Register extends React.Component {
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
                        <button type="button" id="signInBtnStyle" className="btn btn-dark">
                            Submit
                        </button>
                    </div>
                </div>
                <Link to="/">HomePage</Link>
            </div>
                );
            }
        }
        
export default Register;