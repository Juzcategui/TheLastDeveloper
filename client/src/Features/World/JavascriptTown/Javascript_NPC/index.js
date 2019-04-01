import React from 'react';
import { connect } from 'react-redux';
import Dialogue from "../../../Dialogue/DialogueBox";
import './style.css'



const JavascriptNPC = (props) => (
  <div>
    <div className="Pedro"></div>
    <div className="Aaron"></div>
    <div className="Garrett"></div>
    <div className="Emily"></div>
    <div className="Alexander"></div>
    <div className="Vu"></div>
    <div className="JavascriptGuard"></div>
    {props.isShown && <Dialogue dialogue={props.dialogue} name={props.name} pos={props.npcPos}
      isTravel={props.isTravel} mapName={props.mapName} />}
  </div>
)


function mapStateToProps(state) {
  return {
    ...state.dialogue
  }
}

export default connect(mapStateToProps)(JavascriptNPC);