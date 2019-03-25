import React from "react";
import { Link } from "react-router-dom";



class CSSHouse extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>CSS House</p>
                <Link to="/Town">Town</Link>
            </div>
        )
    }

}

export default CSSHouse;