
// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

// create header element using JSX
// JSX => Babbel converts /transpiles it into => React.createElement => Object => HTML (DOM) (babel does all the conversion)

const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

const Title = () => {
  return (
    <h1 id="title" key="title">Namaste React component</h1>
  )
}

const HeaderComponent = function (){
  return (
    <div>
      <Title/>

      {console.log(10)}
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);