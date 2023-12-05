//import react into the bundle
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter() {
    let [counter, setCounter] = useState(0);
   useEffect(() =>{
    setInterval(function () {
        setCounter(counter++)
    }, 1000);
   },[])
    return (<div className="bigCounter">
        <div className="calendar">
            <i class="fa-solid fa-clock"></i>
        </div>
        <div className="four">{Math.floor(counter/1000) % 10}</div>
        <div className="three">{Math.floor(counter/100) % 10}</div>
        <div className="two">{Math.floor(counter/10) % 10}</div>
        <div className="one">{Math.floor(counter/1) % 10}</div>
    </div>);

}




//render your react application

ReactDOM.render(<SimpleCounter  />,
    document.querySelector("#app")
);
