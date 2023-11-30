//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import propTypes from "prop-types";

function SimpleCounter(props) {
    return( <div className="bigCounter">
        <div className="calendar">
            <i class="fa-solid fa-clock"></i>
        </div>
        <div className="four">[props.digitFour]</div>
        <div className="three">[props.digitThree]</div>
        <div className="two">[props.digitTwo]</div>
        <div className="one">[props.digitOne]</div>
    </div>);
}
SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
}


let counter = 0;
setInterval(function(){
const four = Math.floor(counter/10000);
const three = Math.floor(counter/1000);
const two = Math.floor(counter/100);
const one = Math.floor(counter/10);
con
//render your react application
ReactDOM.render(<SimpleCounter digitOne={counter.indexOf(0)}/>, document.querySelector("#app"));
}, 1000);