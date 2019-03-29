import React from "react";
import img from "../../Backgrounds/bgscroll.jpg"
import '../../App.css'
import * as $ from 'axios';


class Scroll extends React.Component {
    state = {
        dialogue: []
    };


    componentDidMount() {
        const classID = sessionStorage.getItem("class");
        $.get(`/api/gamedb/${classID}`).then(data => {
            this.setState({
                dialogue: data.data.dialogue
            });
        });
    }


    render() {
        const classID = sessionStorage.getItem("class");
        return (
            this.state.dialogue.length > 0 && (
                <div>
                    <img className="BG" src={img} alt="img" />
                    <div className={"scrollInfo" + classID}>
                        <h1 className="">{classID} Documentation</h1>
                        <ul className="scrollList">
                            {this.state.dialogue.map((data, i) => (
                                <li key={i}>
                                    {data}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="xButton" onClick={() => {
                        window.history.back()
                    }}>❌</div>

                </div>
            ));
    }
}

export default Scroll;