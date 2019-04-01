import React, { Component } from "react";
import '../../App.css'
import { Link, Redirect } from "react-router-dom";
import * as $ from 'axios';

class Credits extends React.Component {
    state = {
        npcName: 'Credits',
        dialogue: [],
        redirect: false,
    }


    componentDidMount() {
        this.id = setTimeout(
            () => this.setState({ redirect: true }), 150000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return (
            this.state.redirect
                ? <Redirect to="/worldMap" />
                : <div>
                    {/* <img className="BG" src={stars} alt="stars" /> */}
                    <Link to="/worldMap">
                        <button type="button" className="btn btn-dark introButton">Skip Credits</button>
                    </Link>
                    {/* <audio src={IntroLore} autoPlay /> */}

                    {/* <img className="BG" src={stars} alt="stars" /> */}

                    <div class="fade"></div>

                    <section class="credits">

                        <div class="outroCrawl">

                            <div class="title">
                                <p>The Last Developer</p>
                                <br></br>
                                <h1>Developed by:</h1>
                                <br></br>
                                <h1>Adam Garner</h1>
                                <h1>Gabe Baek</h1>
                                <h1>Jorge Uzcategui</h1>
                                <h1>Son Bui</h1>
                                <h1>Vu P. Nguyen</h1>
                            </div>

                            <br></br>
                            <br></br>
                            <p><u>Credits</u></p>
                            <br></br>
                            <p>Personalities By:</p>
                            <br></br>
                            <h1>Aaron B. as AARON</h1>
                            <br></br>
                            <h1>Alan Breck as HIMSELF </h1>
                            <br></br>
                            <h1>Barry R. as BARRY</h1>
                            <br></br>
                            <h1>Harrison T. as HARRISON</h1>
                            <br></br>
                            <h1>Lin H. as LIN</h1>
                            <br></br>
                            <h1>Manny C. as MANNY</h1>
                            <br></br>
                            <h1>Mark H. as MARK </h1>
                            <br></br>
                            <h1>Nathan S. as NATHAN</h1>
                            <br></br>
                            <h1>Paige M. as PAIGE</h1>
                            <br></br>
                            <h1>Tim C. as TIM</h1>
                            <br></br>
                            <h1>Erwins S. as ERWINS</h1>
                            <br></br>
                            <h1>Peter J. as PETER</h1>
                            <br></br>
                            <br></br>
                            <p>Special Appearances by:</p>
                            <br></br>
                            <h1>Cody G. as THE PROPHET C</h1>
                            <br></br>
                            <h1>Jacob L. as King Jacob</h1>
                            <br></br>
                            <h1>Will M. as WILLBUCKS CEO/COO/CFO</h1>
                            <br></br>
                            <br></br>
                            <p>MUSIC</p>
                            <br></br>
                            <h1>Intro Theme - Lord of the Rings: The Fellowship of the ring OST</h1>
                            <br></br>
                            <h1>Careless Whisper - George Michael</h1>
                            <br></br>
                            <h1>Cygnus Garden - MapleStory Orchestra Live in Budapest</h1>
                            <br></br>
                            <h1>Those Who Fight(Let the Battles Begin) - Final Fantasy VII</h1>
                            <br></br>
                            <h1>My Hero is Our Hero - My Hero Academia OST</h1>
                            <br></br>
                            <h1>All of You is All of Me - No Game No Life OST</h1>
                            <br></br>
                            <h1>Red Red Wine - UB40</h1>
                            <br></br>
                            <h1>Sephiroth's Theme - Final Fantasy VII</h1>
                            <br></br>
                            <h1>Starwolf Theme - Starfox 64</h1>
                            <br></br>
                            <h1>Waltz for Zizi - Cowboy BeBop OST</h1>
                            <br></br>
                            <h1>Welcome to My World - Made in Abyss OST</h1>
                            <br></br>
                            <br></br>
                            <p>Images:</p>
                            <br></br>
                            <h1>Sprites created using Game Character Hub</h1>
                            <br></br>
                            <h1>Avatars created with Anime Character Maker 2.2</h1>
                            <br></br>
                            <h1>Sprite Map background images borrowed from Nintendo Pokemon Game Series</h1>
                            <br></br>
                            <h1>Various art and images from DeviantArt</h1>
                            <br></br>
                            <h1>Willbucks Logo from Starbucks</h1>
                            <br></br>
                            <h1>World Map background borrowed from Secret of Mana</h1>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p><u>Special Thanks To:</u></p>
                            <br></br>
                            <br></br>
                            <h1>Jacob Lamont, Cody Goss, Will Miller, Peter Colella, Arturo Salmeron, and Conner Scofield</h1>
                            <br></br>
                            <h1>Career Services and Student Success Team</h1>
                            <br></br>
                            <h1>Trilogy Education and Georgia Tech Bootcamps</h1>
                            <br></br>
                            <h1>And all of Full Stack Web Development Coding Cohort 15</h1>
                            <br></br>   

                            

                            


                        </div>

                    </section>

                </div>
        )
    }
}


export default Credits;