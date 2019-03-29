import React, { Component } from "react";
import '../../App.css'
import { Link, Redirect } from "react-router-dom";
import * as $ from 'axios';
import LordOfTheRings from "../../Audio/LordOfTheRings.mp3"
import stars from "../../Backgrounds/stars.jpg"

class Intro extends React.Component {
    state = {
        npcName: 'Intro',
        dialogue: [],
        redirect: false,
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 11000)
      }
    
      componentWillUnmount() {
        clearTimeout(this.id)
      }

render (){
        return (
            this.state.redirect
            ? <Redirect to="/SecretCave" />
            :<div>
                
            <audio src={LordOfTheRings} autoPlay/>

            <img className="BG" src={stars} alt="stars" />

                <div class="fade"></div>

                <section class="star-wars">

                    <div class="crawl">

                        <div class="title">
                            <p>The Last Developer</p>
                            <br></br>
                            <br></br>
                            <h1>From the developers of Super Trivia Bros., Sozial, Run-Escape, PoetryGenius, & MediApp</h1>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>

                        <p>Long ago ..</p>
                        <br></br>
                        <p>Existed a unified land - A land of knowledge, community, and collaboration. Everything was open sourced, and information was willingly shared for the benefit of all. But while all the developers and their communities flourished, a great darkness was brooding down below....</p>
                        <br></br>
                        <p>Feasting on syntax errors for it's own devious intentions, the darkness began to infect the minds of the developers, making them lazy and growing in power from their redundant code. As more and more developers fell prey to the darkness, it used all of their horrific and error filled code to manifest itself into an abomination the likes of which the land had never seen. An endless void consuming all in its path: MonGOD.</p>
                        <br></br>
                        <p>With the citizens of the kingdom in this weakened state, MonGod saw the perfect opportunity to strike. It unleashed a virus to the global scope of the land, splintering the people and their knowledge. HTML, Javascript, React, and CSS now existed in isolation.</p>
                        <br></br>
                        <p>Only King Jacob, master of all four elements, could stop the ruthless MonGod. But when the world needed him most, he vanished...</p>
                        <br></br>
                        <p>Now the final protector of the realm seeks out the last known existing descendant to the royal bloodline, Alan Breck. He is one of the few people remaining that is resistant to MonGod's influence. Cody tells him that his mission, should he accept it, is to gather information within the scrolls spread amongts the different lands and unite them in order to seal away MonGod for good and restore rightful order to the plane.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>You are the world's last hope...</p>
                        <br></br>
                        <br></br>
                        <br></br>
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
