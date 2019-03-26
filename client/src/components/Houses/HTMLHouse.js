import React from "react";
import { Link } from "react-router-dom";



class HTMLHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" src="https://userscontent2.emaze.com/images/26d1c133-376b-442b-b8ac-0a07cea44c7c/cab00413219d05d80ed5085542996d8d.png" alt="HTMLHouse" />
                <h1>HTML House</h1>

                <div id="characterBox">
                    <p>Insert picture here</p>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>
                </div>

                <div id="textBox">
                    <h1>Welcome to the HTML house</h1>
                    <p>Ya noob</p>

                </div>
                <Link to="/HTMLTown">Back</Link>
            </div>
        )
    }

}

export default HTMLHouse;