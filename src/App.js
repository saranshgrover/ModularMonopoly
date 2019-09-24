import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import HouseTile from "./HouseTile.js";
import javits from "./images/javits.jpg";
import Monopoly from "./Monopoly";
import { Switch, Route } from 'react-router-dom';
import Landing from "./Landing.js";
import NewLanding from './NewLanding.js';

function App() {
  //let img = require("../public/images/javits.jpg");
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/play" component={Monopoly} />
        <Route exact path="/new" component={NewLanding} />
      </Switch>
    </div>
  );
}

export default App;
