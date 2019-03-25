import React from "react";
import { Link } from "react-router-dom";



class OuterTown extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (

            <div>
                <p>OuterTown</p>
                <Link to="/OuterForest">Continue to forest</Link>
                <br />
                <Link to="/World">World Map</Link>
            </div>
        )
    }

}

export default OuterTown;