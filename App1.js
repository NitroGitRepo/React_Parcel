import React from "react";
import  ReactDOM   from "react-dom/client";
import { createElement } from "react";
const tag1 = React.createElement("h1", {}, "Tag -1 From Parcel 🔴");
const tag_1 = <h1 id="title">Namaste React -JSX</h1>;
const tag_2 = (
  <h1 id="title">
         NAMASTE
  </h1>
)
const tag2 = React.createElement("h1", {}, "Tag -2 From Parcel 🔴");
const container = React.createElement(
  "div",
  {
    id: "box",
    hello: "world",
  },
  [tag1, tag2]
);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

const name1 = React.createElement("h1", {}, "Rajneesh 🫡 Parcel");
const name2 = React.createElement("h1", {}, "Ritik 🫡 Parcel");
const container1 = React.createElement("div", {}, [name1, name2]);
console.log(container1); 
const r1 = ReactDOM.createRoot(document.getElementById("root1"));
r1.render(container1);

const element1 = createElement("h3",{},"heading3");

