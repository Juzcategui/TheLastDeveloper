import React from 'react';
import { connect } from 'react-redux';
import Dialogue from "../../../Dialogue/DialogueBox";
import './style.css'

const CSSNPC = (props) => (
  <div>
    <div className="Barry" />
    <div className="Lin" />
    <div className="Manny" />
    <div className="Tim" />
    <div className="Jenny" />
    <div className="Adam" />
    <div className="CSSGuard" />
    {props.isShown && <Dialogue dialogue={props.dialogue} name={props.name} pos={props.npcPos}
      isTravel={props.isTravel} mapName={props.mapName} />}
  </div>
)


function mapStateToProps(state) {
  return {
    ...state.dialogue
  }
}

export default connect(mapStateToProps)(CSSNPC);