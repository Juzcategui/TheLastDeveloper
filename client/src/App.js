import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login';
import Homepage from './components/Homepage';
import Town from './components/Town';
import Forest from './components/Forest';
import HTMLHouse from './components/Houses/HTMLHouse';
import JavascriptHouse from './components/Houses/JavascriptHouse';
import ReactHouse from './components/Houses/ReactHouse';
import CSSHouse from './components/Houses/CSSHouse';
import World from './Features/World';
import DialogueBox from './components/DialogueBox';


const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Town" component={Town} />
      <Route exact path="/Forest" component={Forest} />
      <Route exact path="/HTMLHouse" component={HTMLHouse} />
      <Route exact path="/CSSHouse" component={CSSHouse} />
      <Route exact path="/JavascriptHouse" component={JavascriptHouse} />
      <Route exact path="/ReactHouse" component={ReactHouse} />
      <Route exact path="/World" component={World} />
      <Route exact path="/DialogueBox" compinent={DialogueBox} />
    </div>
  </BrowserRouter>
)

export default App;
