import React from "react";
import { Link } from "react-router-dom";
import CSSHouseImg from "../../Backgrounds/CSSHouse.jpg"
import Adam from "../../Sprites/Adam.png"
import imgscroll from "../../Backgrounds/scroll.png"

class CSSHouse extends React.Component {
    state = {
        npcName: "Adam the CSS Connoisseur",
        scroll: "CSS"
    }

    scrollClick = (event) => {
        event.preventDefault();
        sessionStorage.setItem('class', this.state.scroll);
        this.props.history.push("/Scroll")
    };

    render() {
        return (

            <div>

                <img className="BG" src={CSSHouseImg} alt="CSSHouse" />
                <h1 className="HouseTitles">CSS House</h1>
                <img className="houseScroll" onClick={this.scrollClick} src={imgscroll} />
                <img id="adam" src={Adam} alt="Adam"></img>
                <div id='DialogContainer'>

                    <div id="characterName">
                        <p className="namePlate">Adam the CSS Connoisseur</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to the CSS house</h3>
                        <p>Dave Chapelle lookin ahh</p>
                    </div>
                </div>

                <div id="actionBox">
                    <Link to="/CSSTown">
                        <button className="btn btn-success">Back</button>
                    </Link>
                </div>

            </div>
        )
    }

}

export default CSSHouse;