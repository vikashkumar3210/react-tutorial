//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";
const name = "vikash";
const d = new Date();
const currentYear = d.getFullYear();
ReactDOM.render(
  /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement("p", null, "Created by ", name, " "),
    /*#__PURE__*/ React.createElement("p", null),
    "Copyright ",
    currentYear
  ),
  document.getElementById("root")
);
