import React from "react";
import '../App.css'

class Login extends React.Component {
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
                Login Page Placeholder
            </div>
        );
    }
}

export default Login;