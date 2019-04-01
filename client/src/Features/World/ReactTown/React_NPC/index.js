import React from 'react';
import { connect } from 'react-redux';
import Dialogue from "../../../Dialogue/DialogueBox";
import './style.css'

const ReactNPC = (props) => (
  <div>
    <div className="Erwins"></div>
    <div className="Paige"></div>
    <div className="Craigster"></div>
    <div className="Camila"></div>
    <div className="Nathan"></div>
    <div className="Gabe"></div>
    <div className="ReactGuard"></div>
    {props.isShown && <Dialogue dialogue={props.dialogue} name={props.name} pos={props.npcPos}
      isTravel={props.isTravel} mapName={props.mapName} />}
  </div>
)


function mapStateToProps(state) {
  return {
    ...state.dialogue
  }
}

export default connect(mapStateToProps)(ReactNPC);