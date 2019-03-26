/*------------------ Important stuff ------------------*/
import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import World from './Features/World';


/*------------------ Technical Folder ------------------*/
import Homepage from './components/Technical/Homepage';
import Login from './components/Technical/Login';
import Register from './components/Technical/Register';
import DialogueBox from './components/Technical/DialogueBox';
import WorldMap from './components/Technical/WorldMap';

/*------------------ Forest Path Folder ------------------*/
import OuterTown from './components/ForestPath/OuterTown'
import OuterForest from './components/ForestPath/OuterForest'
import Forest from './components/ForestPath/Forest';

/*------------------ Houses Folder ------------------*/
import HTMLHouse from './components/Houses/HTMLHouse';
import CSSHouse from './components/Houses/CSSHouse';
import JavascriptHouse from './components/Houses/JavascriptHouse';
import ReactHouse from './components/Houses/ReactHouse';
import SecretCave from './components/Houses/SecretCave';

/*------------------ Towns Folder ------------------*/
import HTMLTown from './components/Towns/HTMLTown';
import CSSTown from './components/Towns/CSSTown';
import JavascriptTown from './components/Towns/JavascriptTown';
import ReactTown from './components/Towns/ReactTown';
import WillBucks from './components/Towns/WillBucks';


const App = () => (
  
  <BrowserRouter>
    <div>
      {/* ------------------ *** ------------------ */}
      
      
      {/* ------------------ Technical Folder ------------------ */}
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/DialogueBox" component={DialogueBox} />
      <Route exact path="/WorldMap" component={WorldMap} />

      {/* ------------------ Forest Path Folder ------------------ */}
      <Route exact path="/OuterTown" component={OuterTown} />
      <Route exact path="/OuterForest" component={OuterForest} />
      <Route exact path="/Forest" component={Forest} />

      {/* ------------------ Houses Folder ------------------ */}
      <Route exact path="/HTMLHouse" component={HTMLHouse} />
      <Route exact path="/CSSHouse" component={CSSHouse} />
      <Route exact path="/JavascriptHouse" component={JavascriptHouse} />
      <Route exact path="/ReactHouse" component={ReactHouse} />
      <Route exact path="/SecretCave" component={SecretCave} />

      {/* ------------------ Town Folder ------------------ */}
      <Route exact path="/World" component={World} />
      <Route exact path="/CSSTown" component={CSSTown} />
      <Route exact path="/HTMLTown" component={HTMLTown} />
      <Route exact path="/JavascriptTown" component={JavascriptTown} />
      <Route exact path="/ReactTown" component={ReactTown} />
      <Route exact path="/WillBucks" component={WillBucks} />

    </div>
  </BrowserRouter>
)

export default App;
