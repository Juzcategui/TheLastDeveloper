import React from 'react';
import { connect } from 'react-redux';
import Dialogue from "../../../Dialogue/DialogueBox";
import './style.css'


const HTMLNPC = (props) => (
  <div>
    <div className="Harrison"></div>
    <div className="Mark"></div>
    <div className="Leonardo"></div>
    <div className="Michaelangelo"></div>
    <div className="Raphael"></div>
    <div className="Jorge"></div>
    <div className="HTMLGuard"></div>
    <div className="boat"></div>
    {props.isShown && <Dialogue dialogue={props.dialogue} name={props.name} pos={props.npcPos}
      isTravel={props.isTravel} mapName={props.mapName} />}
  </div>
)


function mapStateToProps(state) {
  return {
    ...state.dialogue
  }
}

export default connect(mapStateToProps)(HTMLNPC);