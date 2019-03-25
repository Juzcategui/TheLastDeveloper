import React from "react";
import { Link } from "react-router-dom";



class JavascriptHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="BG" s src="https://userscontent2.emaze.com/images/26d1c133-376b-442b-b8ac-0a07cea44c7c/cab00413219d05d80ed5085542996d8d.png" alt="JSHouse" />
                <h1>Javascript House</h1>

                <div id="characterBox">
                    <p>Insert picture here</p>

                    <div id="characterName">
                        <p>Insert character name here</p>
                    </div>
                </div>

                <div id="textBox">
                    <h1>Welcome to the JS house</h1>
                    <p>Unable to do 2+2 lookin ahh</p>

                </div>
                <Link to="/Town">Town</Link>
            </div>
        )
    }

}

export default JavascriptHouse;