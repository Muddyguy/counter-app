import React, { useEffect, useState } from "react";
import '../App.css';

let counts = 0;

function ClicksMe() {
   counts ++
   document.getElementById("counts").innerHTML = counts;
}

function ButtonComponent() {
  return (
    <div className="yer">
        <h1> Counts <a id = "counts"> 0</a></h1>
        <button onClick={ClicksMe}>CLICK</button>
    </div>
  );
}

export default ButtonComponent;
