import React from "react";
import { Link } from "react-router-dom";
import worldMap from "../../Backgrounds/WorldMap.png";
import ReactSVG from "../../SVG/react.png";
import HTMLSVG from "../../SVG/html.png";
import CSSSVG from "../../SVG/css.png";
import JSSVG from "../../SVG/js.png";
import mongoSVG from "../../SVG/mongo.png";
import hideOut from "../../SVG/Hideout.png";
import willBucksLogo from "../../SVG/willBucksLogo.png";
import CygnusGarden from "../../Audio/CygnusGarden.mp3"
import * as $ from 'axios';




class WorldMap extends React.Component {
    state = {
        abilities: [],
        numAbilities: null
    }


    componentDidMount() {
        const userId = sessionStorage.getItem("userId");
        $.get(`/api/user/${userId}`).then(userDB => {
            console.log(userDB)
            this.setState({
                numAbilities: userDB.data.trialsPassed,
                abilities: userDB.data.abilities

            })
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <audio src={CygnusGarden} autoPlay loop />
                <img className="BG" src={worldMap} alt="WorldMap" />
                <h1 id="WorldMapTitle">WORLD MAP</h1>
                <h4 id="abilities" data-toggle="modal"
                    data-target="#abilityModal" >Abilities</h4>


                <div className="modal" id="abilityModal" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" >Ability List</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body abilityList">
                                {this.state.numAbilities === 0 ? "Complete trials to unlock abilities!" :
                                    this.state.abilities.map((data, i) => (
                                        <li key={i} className={`ability${i}`}>
                                            {data.body}
                                        </li>))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <h3 className="JSWorldTitle">Javascript Junkies</h3> */}
                <Link to="/JavascriptTown">
                    <img id="JavascriptJunkies" src={JSSVG} alt="JSVG"></img>
                </Link>

                {/* <h3 className="ReactWorldTitle">Rivers of React</h3> */}
                <Link to="/ReactTown">
                    <img id="RiversOfReact" src={ReactSVG} alt="ReactSVG"></img>
                </Link>

                {/* <h3 className="HTMLWorldTitle">House of HTML</h3> */}
                <Link to="/HTMLTown">
                    <img id="HouseOfHTML" src={HTMLSVG} alt="HTMLSVG"></img>
                </Link>

                {/* <h3 className="CSSWorldTitle">CSS Cult</h3> */}
                <Link to="/CSSTown">
                    <img id="CSSCult" src={CSSSVG} alt="CSSSVG"></img>
                </Link>

                {/* <h3 className="ForestWorldTitle">Forest</h3> */}
                <Link to="/OuterTown">
                    <img className={`${this.state.numAbilities < 4 && "visibleToggle"}`} id="ForestWorldMap" src={mongoSVG} alt="mongoSVG"></img>

                </Link>

                {/* <h3 className="SecretCaveWorldTitle">???</h3> */}
                <Link to="/SecretCave">
                    <img id="SecretCaveWorldMap" src={hideOut} alt="hideOut"></img>
                </Link>

                {/* <h3 className="WillBucksWorldTitle">WillBucks</h3> */}
                <Link to="/WillBucks">
                    <img id="WillBucksWorldMap" src={willBucksLogo} alt="willBucksLogo"></img>
                </Link>
            </div>
        )
    }

}

export default WorldMap;
