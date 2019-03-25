import React from "react";
import { Link } from "react-router-dom";



class Forest extends React.Component {
    state = {
        npcName: ''
    }

    render() {
        return (
            <div>
                            <img class="BG" src="https://i.pinimg.com/originals/aa/46/be/aa46beaee67d41a7e5fb027b1ffca0f1.png" alt="Forest" />
                <p>Forest (where mongoose is located)</p>
                <Link to="/World">World Map</Link>
            </div>
        )
    }

}

export default Forest;