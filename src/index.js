//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
const colors = {
  color: ""
};

const time = new Date(2020, 12, 30, 12).getHours();

const wish = wishes();

function wishes() {
  if (time < 12) {
    colors.color = "red";
    return "Good Morning";
  }

  if (time >= 12 && time < 18) {
    colors.color = "green";
    return "Good Evening";
  }

  if (time > 18 && time < 24) {
    colors.color = "blue";
  }
}

ReactDOM.render(
  <h1 style={colors}> {wish} </h1>,
  document.getElementById("root")
);
