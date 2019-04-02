import React from "react";
import '../../App.css'
import { Link, Redirect } from "react-router-dom";
import IntroLore from "../../Audio/IntroMASTERmp3.mp3"
import stars from "../../Backgrounds/stars.jpg"

class Intro extends React.Component {
    state = {
        npcName: 'Intro',
        dialogue: [],
        redirect: false,
    }


    componentDidMount() {
        this.id = setTimeout(
            () => this.setState({ redirect: true }), 119000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return (
            this.state.redirect
                ? <Redirect to="/SecretCave" />
                : <div>
                    <img className="BG" src={stars} alt="stars" />
                    <Link to="/SecretCave">
                        <button type="button" className="btn btn-dark introButton">Skip Intro</button>
                    </Link>
                    <audio src={IntroLore} autoPlay />

                    <img className="BG" src={stars} alt="stars" />

                    <div className="fade"></div>

                    <section className="star-wars">

                        <div className="crawl">

                            <div className="title">
                                <p>The Last Developer</p>
                                <br></br>
                                <h1>From the developers of Super Trivia Bros., Sozial, Run-Escape, PoetryGenius, & MediApp</h1>
                                <br></br>
                            </div>

                            <p>Long ago ...</p>
                            <br></br>
                            <p>Existed a unified land - a land of knowledge, community, and collaboration. Everything was open sourced, and information was willingly shared for the benefit of all. But while all the developers and their communities flourished, a great darkness was brooding below....</p>
                            <br></br>
                            <br></br>
                            <p>Feasting on syntax errors for its own devious intentions, the darkness began to infect the minds of the developers, making them lazy and growing in power from their redundant code. As more and more developers fell prey to the darkness, it used all of their horrific and error filled code to manifest itself into an abomination the likes of which the land had never seen. An endless void consuming all in its path: MonGod.</p>
                            <br></br>
                            <br></br>
                            <p>With the citizens of the kingdom in this weakened state, MonGod saw the perfect opportunity to strike. It unleashed a virus to the global scope of the land, splintering the people and their knowledge. HTML, Javascript, React, and CSS now existed in isolation.</p>
                            <br></br>
                            <p>Only King Jacob, master of all four elements, could stop the ruthless MonGod. But when the world needed him most, he vanished...</p>
                            <br></br>
                            <p>Now the final protector of the realm, the Prophet, seeks out the last known existing descendant to the royal bloodline, Alan Breck. He is one of the few people remaining that is resistant to MonGod's influence. Cody tells him that his mission, should he accept it, is to gather information within the four realms of the world and unite them in order to seal away MonGod for good.</p>
                            <br></br>
                            <p>You are the world's last hope...</p>
                            <br></br>
                            <br></br>
                            <br></br>

                        </div>

                    </section>

                </div>
        )
    }
}


export default Intro;