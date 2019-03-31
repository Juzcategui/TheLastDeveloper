import React from 'react';
import { connect } from 'react-redux';
import Dialogue from "../../../Dialogue/DialogueBox";
import './style.css'


const islandNPC = (props) => (
  <div>
    <div className="Son"></div>
    <div className="boatIsland"></div>
    {props.isShown && <Dialogue dialogue={props.dialogue} name={props.name} pos={props.npcPos} />}
  </div>
)


function mapStateToProps(state) {
  return {
    ...state.dialogue
  }
}

export default connect(mapStateToProps)(islandNPC);