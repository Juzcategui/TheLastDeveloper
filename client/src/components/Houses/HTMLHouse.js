import React from "react";
import { Link } from "react-router-dom";
import HTMLHouseImg from "../../Backgrounds/HTMLHouse.jpg"
import Jorge from "../../Sprites/Jorge.png"
import imgscroll from "../../Backgrounds/scroll.png"


class HTMLHouse extends React.Component {
    state = {
        npcName: 'Jorge the HTML Hotshot',
        scroll: "HTML"
    }

    scrollClick = (event) => {
        event.preventDefault();
        sessionStorage.setItem('class', this.state.scroll);
        this.props.history.push("/Scroll")
    };

    render() {
        return (

            <div>
                <img className="BG" src={HTMLHouseImg} alt="HTMLHouse" />
                <h1 className="HouseTitles">HTML House</h1>
                <img className="houseScroll" onClick={this.scrollClick} src={imgscroll} />
                <img id="Jorge" src={Jorge} alt="Jorge"></img>

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p className="namePlate">Jorge the HTML Hotshot</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to the HTML house</h3>
                        <p>Ya noob</p>
                    </div>
                </div>

                <div id="actionBox">
                    <Link to="/HTMLTown">
                        <button className="btn btn-success">Back</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default HTMLHouse;