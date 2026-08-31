import React from "react";
import "./Greeting.css";

function Greeting() {

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let curDate = new Date(2026, 7, 19, 14);
curDate = curDate.getHours();
let greeting = ""; // create a variable to store the greeting message
const cssStyle = {}; // create an object to store the CSS styles

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green"; 
  }else if (curDate >=12 && curDate < 17) {
    greeting = "Good Afternoon"; 
    cssStyle.color = "orange"; 
  }else{
    greeting = "Good Night";
    cssStyle.color = "black"; 
  } 

  return (
    <>
      <div>
        <h1> 
          Hello sir, <span style ={cssStyle}> {greeting} </span>
        </h1>
      </div>
    </>
 );
}
export default Greeting;