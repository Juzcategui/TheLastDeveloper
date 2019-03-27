import React from "react";
import { Link } from "react-router-dom";
import CSSBG from '../../Backgrounds/CeruleanCity.png'
import portal from "../../SVG/portal.gif"


class CSSTown extends React.Component {
    state = {
        abilities: []
    }

    render() {
        return (

            <div>
                <div>
                    <img className="BG" src={CSSBG} alt="CSSBG" />
                    <h1 className="CSSTownTitle">CSS CULT</h1>
                </div>

                {/* Character filler sprite */}

                <img id="CSSSprite1" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="CSSSprite1" />
                <img id="CSSSprite2" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="CSSSprite2" />
                <img id="CSSSprite3" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="CSSSprite3" />
                <img id="CSSSprite4" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="CSSSprite4" />
                <img id="CSSSprite5" src="https://i.pinimg.com/originals/c0/d3/8c/c0d38c518fdbf6012e0475bb7a0598a5.gif" alt="CSSSprite5" />

                {/* ------------------------------------ */}

                <Link to="/CSSHouse">
                    <img id="CSS" src={portal} alt="portal"></img>
                </Link>
                <br />
                <Link to="/WorldMap">
                    <img id="CSSWorld" src={portal} alt="portal"></img>
                </Link>

            </div>
        )
    }

}

export default CSSTown;