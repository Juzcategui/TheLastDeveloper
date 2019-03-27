import React from "react";
import { Link } from "react-router-dom";
import JSHouse from "../../Backgrounds/JSHouse.jpg"
import Vu from "../../Sprites/Vu.png"
import imgscroll from "../../Backgrounds/scroll.png"


class JavascriptHouse extends React.Component {
    state = {
        npcName: 'Vu the Javascript Jaeger',
        scroll: "Javascript"
    }

    scrollClick = (event) => {
        event.preventDefault();
        sessionStorage.setItem('class', this.state.scroll);
        this.props.history.push("/Scroll")
    };

    render() {
        return (

            <div>
                <img className="BG" src={JSHouse} alt="JSHouse" />
                <h1 className="HouseTitles">Javascript House</h1>
                <img className="houseScroll" onClick={this.scrollClick} src={imgscroll} />
                <img id="Vu" src={Vu} alt="Vu"></img>

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p className="namePlate">Vu the Javascript Jaeger</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to the Javascript house</h3>
                        <p>Unable to do 2+2 lookin ahh</p>
                    </div>
                </div>

                <div id="actionBox">
                    <Link to="/JavascriptTown">
                        <button className="btn btn-success">Back</button>
                    </Link>
                </div>

            </div>
        )
    }

}

export default JavascriptHouse;