import React from "react";
import { Link } from "react-router-dom";



class WillBucks extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <Link to="/Town">Town</Link>
            </div>
        )
    }

}

export default WillBucks;