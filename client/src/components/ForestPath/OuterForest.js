import React from "react";
import { Link } from "react-router-dom";



class OuterForest extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>Outer Forest</p>
                <Link to="/Forest">Continue deeper</Link>
            </div>
        )
    }

}

export default OuterForest;