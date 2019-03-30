/*------------------ Important stuff ------------------*/
import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";


/*------------------ Technical Folder ------------------*/
import Homepage from './components/Technical/Homepage';
import Register from './components/Technical/Register';
import Intro from './components/Technical/Intro';
import WorldMap from './components/Technical/WorldMap';
import Scroll from './components/Technical/Scroll';


/*------------------ Forest Path Folder ------------------*/
import OuterTown from './components/ForestPath/OuterTown'
import Final from './components/ForestPath/Final'
import OuterForest from './components/ForestPath/OuterForest'
import Forest from './components/ForestPath/Forest';

/*------------------ Houses Folder ------------------*/
import HTMLHouse from './components/Houses/HTMLHouse';
import CSSHouse from './components/Houses/CSSHouse';
import JavascriptHouse from './components/Houses/JavascriptHouse';
import ReactHouse from './components/Houses/ReactHouse';
import SecretCave from './components/Houses/SecretCave';

/*------------------ Towns Folder ------------------*/
import HTMLTown from './Features/World/HTMLTown/index';
import CSSTown from './Features/World/CSSTown/index';
import JavascriptTown from './Features/World/JavascriptTown/index';
import ReactTown from './Features/World/ReactTown/index';
import WillBucks from './components/Towns/WillBucks';

const App = () => (

  <BrowserRouter>
    <div>
      {/* ------------------ *** ------------------ */}

      {/* ------------------ Technical Folder ------------------ */}
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Intro" component={Intro} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/WorldMap" component={WorldMap} />
      <Route exact path="/Scroll" component={Scroll} />

      {/* ------------------ Forest Path Folder ------------------ */}
      <Route exact path="/OuterTown" component={OuterTown} />
      <Route exact path="/Final" component={Final} />
      <Route exact path="/OuterForest" component={OuterForest} />
      <Route exact path="/Forest" component={Forest} />

      {/* ------------------ Houses Folder ------------------ */}
      <Route exact path="/HTMLHouse" component={HTMLHouse} />
      <Route exact path="/CSSHouse" component={CSSHouse} />
      <Route exact path="/JavascriptHouse" component={JavascriptHouse} />
      <Route exact path="/ReactHouse" component={ReactHouse} />
      <Route exact path="/SecretCave" component={SecretCave} />

      {/* ------------------ Town Folder ------------------ */}
      <Route exact path="/CSSTown" component={CSSTown} />
      <Route exact path="/HTMLTown" component={HTMLTown} />
      <Route exact path="/JavascriptTown" component={JavascriptTown} />
      <Route exact path="/ReactTown" component={ReactTown} />
      <Route exact path="/WillBucks" component={WillBucks} />

    </div>
  </BrowserRouter>
)

export default App;
