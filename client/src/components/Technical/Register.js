import React from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import * as $ from 'axios';
import codeGIF from "../../Backgrounds/code.gif"

class Register extends React.Component {
    state = {
        reguser: '',
        regpw: '',
        regError: false
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

    handleRegister = (event) => {
        event.preventDefault();
        $.post('/api/signup', { username: this.state.reguser, password: this.state.regpw })
            .then((data) => {
                sessionStorage.setItem('userId', data.data._id);
                this.props.history.push("/Intro")
            }).catch(err => {
                console.log(err);
                this.setState({
                    regError: true
                })
            });

    }

    render() {
        return (
            <div id="homeBackground">
                <img className="BG" src={codeGIF} alt="LoginPage" />

                <div id="titleBlock" className="container">
                    <h1 className="gameTitle"><span id="word1">The </span><span id="word2">LAST </span><span id="word3">Developer</span></h1>
                    <h2 className="gameMotto">Sometimes You Have to Code with Your Fists</h2>

                </div>
                <div id="homePageStyle" className="container">
                    <h3 id="loginTitle">Register New Account</h3>
                    <form onSubmit={this.handleRegister} id="homeInput">
                        <div className="input-group-prepend homeInput">
                            <span className="input-group-text" id="basic-addon1"> <i className="fas fa-user-circle"></i> </span>
                            <input value={this.state.reguser} onChange={this.handleChange} name="reguser" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group-prepend homeInput">
                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                            <input onChange={this.handlePWChange} name="regpw" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>


                        <div id="signIn">
                            <button type="submit" className="btn btn-primary signInBtnStyle" >
                                Register
                       </button>
                            <br />
                            <div className={`loginErr ${!this.state.regError && "errToggle"}`}>Registration error - try again</div>
                            <Link to="/">
                                <p>Back to Login</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>



        );
    }
}
export default Register;