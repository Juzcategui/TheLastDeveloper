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
            () => this.setState({ redirect: true }), 119000)
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

                    <section class="star-wars">

                        <div class="outroCrawl">

                            <div class="title">
                                <p>The Last Developer</p>
                                <br></br>
                                <h1>Developed by:</h1>
                                <h1>Adam Garner</h1>
                                <h1>Gabe Baek</h1>
                                <h1>Jorge Uzcategui</h1>
                                <h1>Son Bui</h1>
                                <h1>Vu P. Nguyen</h1>
                            </div>

                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p> Credits </p>
                            <br></br>
                            <p>Personalities By:</p>
                            <br></br>
                            <br></br>
                            <p>Aaron B. as AARON</p>
                            <br></br>
                            <p>Barry R. as BARRY</p>
                            <br></br>
                            <p>Harrison T. as HARRISON</p>
                            <br></br>
                            <p>Lin H. as LIN</p>
                            <br></br>
                            <p>Manny C. as MANNY</p>
                            <br></br>
                            <p>Mark H. as MARK </p>
                            <br></br>
                            <p>Nathan S. as NATHAN</p>
                            <br></br>
                            <p>Paige M. as PAIGE</p>
                            <br></br>
                            <p>Tim C. as TIM</p>
                            <br></br>
                            <p>Erwins S. as ERWINS</p>
                            <br></br>
                            <p>Peter J. as PETER</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h5>Special Appearances by:</h5>
                            <br></br>
                            <p>Cody G. as THE PROPHET C</p>
                            <br></br>
                            <p>Jacob L. as King Jacob</p>
                            <br></br>
                            <p>Will M. as WILLBUCKS CEO/COO/CFO</p>
                            <br></br>
                            <br></br>
                            <h4>MUSIC</h4>
                            <p>Intro Theme - Lord of the Rings: The Fellowship of the ring OST</p>
                            <br></br>
                            <p>Careless Whisper - George Michael</p>
                            <br></br>
                            <p>Cygnus Garden - MapleStory Orchestra Live in Budapest</p>
                            <br></br>
                            <p>Those Who Fight(Let the Battles Begin) - Final Fantasy VII</p>
                            <br></br>
                            <p>My Hero is Our Hero - My Hero Academia OST</p>
                            <br></br>
                            <p>All of You is All of Me - No Game No Life OST</p>
                            <br></br>
                            <p>Red Red Wine - UB40</p>
                            <br></br>
                            <p>Sephiroth's Theme - Final Fantasy VII</p>
                            <br></br>
                            <p>Starwolf Theme - Starfox 64</p>
                            <br></br>
                            <p>Waltz for Zizi - Cowboy BeBop OST</p>
                            <br></br>
                            <p>Welcome to My World - Made in Abyss OST</p>
                            <br></br>
                            <br></br>
                            <h4>Images:</h4>
                            <br></br>
                            <p>Sprites created using Game Character Hub</p>
                            <br></br>
                            <p>Avatars created with Anime Character Maker 2.2</p>
                            <br></br>
                            <p>Sprite Map background images borrowed from Nintendo Pokemon Game Series</p>
                            <br></br>
                            <p>Various art and images from DeviantArt</p>
                            <br></br>
                            <p>Willbucks Logo from Starbucks</p>
                            <br></br>
                            <p>World Map background borrowed from Secret of Mana</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h4>Special Thanks To:</h4>
                            <br></br>
                            <br></br>
                            <p>Jacob Lamont, Cody Goss, Will Miller, Peter Colella, Arturo Salmeron, and Conner Scofield</p>
                            <br></br>
                            <p>Career Services and Student Success Team</p>
                            <br></br>
                            <p>Trilogy Education and Georgia Tech Bootcamps</p>
                            <br></br>
                            <p>And all of Full Stack Web Development Coding Cohort 15</p>
                            <br></br>

                            

                            


                        </div>

                    </section>

                </div>
        )
    }
}


export default Credits;