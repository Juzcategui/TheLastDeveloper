import React from "react";
import { Link } from "react-router-dom";
import REACTHouse from "../../Backgrounds/REACTHouse.jpeg"
import Gabe from "../../Sprites/Gabe.png"
import imgscroll from "../../Backgrounds/scroll.png"


class ReactHouse extends React.Component {
    state = {
        npcName: 'Gabe the React Rabid',
        scroll: "React"
    }

    scrollClick = (event) => {
        event.preventDefault();
        sessionStorage.setItem('class', this.state.scroll);
        this.props.history.push("/Scroll")
    };

    render() {
        return (

            <div>
                <img className="BG" src={REACTHouse} alt="ReactHouse" />
                <h1 className="HouseTitles">React House</h1>
                <img className="houseScroll" onClick={this.scrollClick} src={imgscroll} />
                <img id="Gabe" src={Gabe} alt="Gabe"></img>

                <div id='DialogContainer'>

                    <div id="characterName">
                        <p className="namePlate">Gabe the React Rabid</p>
                    </div>

                    <div id="textBox">
                        <h3>Welcome to the React house</h3>
                        <p>React or gtfo</p>
                    </div>
                </div>

                <div id="actionBox">
                    <button className="btn btn-success"><Link to="/ReactTown">Back</Link></button>
                </div>

            </div>
        )
    }

}

export default ReactHouse;