import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

let counts = 0;
function ClicksMe() {
   counts ++
   document.getElementById("counts").innerHTML = counts;
}
function DontClicksMe() {
  counts --
  document.getElementById("counts").innerHTML = counts;

}
function MaybeClicksMe() {
  counts = 0
  document.getElementById("counts").innerHTML = counts;

}
function DefClicksMe() {
  counts = counts +10
  document.getElementById("counts").innerHTML = counts;

}

function App() {
  return (
    <div className="App">
        <h1> Yerr supersmash bros</h1>
        <button onClick={ClicksMe}>SMASH</button>



        <button onClick={DontClicksMe}>PASS</button>
        <button onClick={MaybeClicksMe}>KO</button>
        <button onClick={DefClicksMe}>SUPER SMASH</button>


        <p> Touches <a id = "counts"> 0</a></p>
      
    </div>
  );
}

export default App;
