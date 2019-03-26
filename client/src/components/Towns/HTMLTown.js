import React from "react";
import { Link } from "react-router-dom";
import JSBG from '../../Backgrounds/PewterCity.png'


class HTMLTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <div>
                    <img className="BG" src={JSBG} alt="CSSBG" />
                    <h1 id="HTMLTitle">HOUSE OF HTML</h1>
                </div>

                {/* Character filler sprite */}

                <img id="HTMLSprite1" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="HTMlSprite1" />
                <img id="HTMLSprite2" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="HTMlSprite2" />
                <img id="HTMLSprite3" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="HTMlSprite3" />
                <img id="HTMLSprite4" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="HTMlSprite4" />
                <img id="HTMLSprite5" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="HTMlSprite5" />

                {/* ------------------------------------ */}

                <Link to="/HTMLHouse">
                    <img id="HTML" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>
                <br />
                <Link to="/WorldMap">
                    <img id="HTMLWorld" src="http://i.imgur.com/hgvDp.gif"></img>
                </Link>

            </div>
        )
    }

}

export default HTMLTown;