import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login';
import Homepage from './components/Homepage';
import Town from './components/Town';
import OuterTown from './components/ForestPath/OuterTown'
import OuterForest from './components/ForestPath/OuterForest'
import Forest from './components/ForestPath/Forest';
import HTMLHouse from './components/Houses/HTMLHouse';
import JavascriptHouse from './components/Houses/JavascriptHouse';
import ReactHouse from './components/Houses/ReactHouse';
import CSSHouse from './components/Houses/CSSHouse';
import World from './Features/World';
import DialogueBox from './components/DialogueBox';
import Register from './components/Register'


const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Town" component={Town} />
      <Route exact path="/Forest" component={Forest} />
      <Route exact path="/OuterTown" component={OuterTown} />
      <Route exact path="/OuterForest" component={OuterForest} />
      <Route exact path="/HTMLHouse" component={HTMLHouse} />
      <Route exact path="/CSSHouse" component={CSSHouse} />
      <Route exact path="/JavascriptHouse" component={JavascriptHouse} />
      <Route exact path="/ReactHouse" component={ReactHouse} />
      <Route exact path="/World" component={World} />
      <Route exact path="/DialogueBox" component={DialogueBox} />
      <Route exact path="/Register" component={Register} />
    </div>
  </BrowserRouter>
)

export default App;
