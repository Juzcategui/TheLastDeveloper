import React from 'react';
import { connect } from 'react-redux';
import Dialogue from "../../../Dialogue/DialogueBox";
import './style.css'

class ReactNPC extends React.Component {

  render() {
    return (
      <div>
        <div className="Erwins"></div>
        <div className="Paige"></div>
        <div className="Craigster"></div>
        <div className="Camila"></div>
        <div className="Nathan"></div>
        <div className="Gabe"></div>
        <div className="ReactGuard"></div>
        <Dialogue dialogue={this.props.dialogue} pos={this.props.npcPos} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      ...state.dialogue
  }
}

export default connect(mapStateToProps)(ReactNPC);