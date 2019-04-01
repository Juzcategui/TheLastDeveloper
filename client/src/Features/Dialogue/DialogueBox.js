import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import "./dialogue.css";
import store from '../../config/store';


class DialogueBox extends React.Component {


  travelTo = (event) => {
    event.preventDefault();
    const mapName = store.getState().dialogue.mapName
    this.props.history.push(`/${mapName}House`)
               
  };

  render() {
    var name = this.props.name;
    const newName = name.replace(/\s/g, '');

    return (
      <section>
        <img id="avatar" src={`../avatars/${newName}.png`} />
        <div
          className="DiaBox"
          style={{
            // left: props.pos[0],
            // top: props.pos[1],
            backgroundColor: "white",
            color: "black",
            position: "absolute",
            bottom: 5,
            right: 5,
            margin: 10,
            borderRadius: 5,
            fontSize: 30,
            width: 1000,
            opacity: 0.8,
            borderWidth: 5,
            borderStyle: "solid"
          }}
        >
          <div className="nameTag">{this.props.name}</div>
          <div style={{ padding: 8 }}>{this.props.dialogue}</div>

          <button onClick={this.travelTo} className={`${!this.props.isTravel && "visibleToggle"}`}>{this.props.mapName}</button>
        </div>
      </section>
    )
  }
}



//connects our player function to the React data store, and will map the redux state to the react state.
export default withRouter(DialogueBox);
