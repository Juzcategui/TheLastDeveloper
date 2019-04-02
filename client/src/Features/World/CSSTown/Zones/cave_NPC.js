import React from 'react';
import { connect } from 'react-redux';
import Dialogue from "../../../Dialogue/DialogueBox";
import './style.css'


const caveNPC = (props) => (
  <div>
    <div className="signPost1"></div>
    <div className="signPost2"></div>
    <div className="signPost3"></div>
    {props.isShown && <Dialogue dialogue={props.dialogue} name={props.name} pos={props.npcPos} />}
  </div>
)


function mapStateToProps(state) {
  return {
    ...state.dialogue
  }
}

export default connect(mapStateToProps)(caveNPC);