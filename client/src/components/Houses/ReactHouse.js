import React from "react";
import { Link } from "react-router-dom";



class ReactHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src="https://userscontent2.emaze.com/images/26d1c133-376b-442b-b8ac-0a07cea44c7c/cab00413219d05d80ed5085542996d8d.png" alt="ReactHouse" />
                <h1>React House</h1>

                <div id="characterBox">
                    <button class="btn btn-danger">Action 1</button>
                    <button class="btn btn-danger">Action 2</button>
                </div>

            <div>
                <div id="characterName">
                    <p>Insert character name</p>
                </div>

                <div id="textBox">
                    <h1>Welcome to the React House</h1>
                    <p>React or gtfo</p>
                </div>
            </div>

                <Link to="/Town">Town</Link>
            </div>
        )
    }

}

export default ReactHouse;