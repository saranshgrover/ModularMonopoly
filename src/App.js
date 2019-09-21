import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import HouseTile from "./HouseTile.js";
import javits from "./images/javits.jpg";

function App() {
  //let img = require("../public/images/javits.jpg");
  return (
    <div className="App">
      <p>This is a test</p>
      <HouseTile imgSrc={javits} propertyName="Javits Center" colorGroup="" houseCount={0} hotelCount={0} tileId={1}/>
    </div>
  );
}

export default App;
