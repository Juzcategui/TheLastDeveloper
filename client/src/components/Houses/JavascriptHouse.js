import React from "react";
import { Link } from "react-router-dom";



class JavascriptHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <img class="HouseBG" s src="https://userscontent2.emaze.com/images/26d1c133-376b-442b-b8ac-0a07cea44c7c/cab00413219d05d80ed5085542996d8d.png" alt="JSHouse" />
                <p>Javascript House</p>
                <Link to="/Town">Town</Link>
            </div>
        )
    }

}

export default JavascriptHouse;