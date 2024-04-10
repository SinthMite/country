import React, { useState } from "react";
import Data from './data.json'; // Import Data variable

import "./App.css";
import Header from "./Header.jsx";
import Body from './body.jsx';

export default function App({ toggleColors }) {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  const changeColor = () => {
    setBackgroundColor(backgroundColor === "white" ? "hsl(207, 26%, 17%)" : "white");
    setFontColor(fontColor === "black" ? "white" : "black");
  };

  return (
    <>
      <div>
        <Header changeColor={changeColor} toggleColors={toggleColors} />
      </div>
      <div>
       <Body  />

      </div>
    </>
  );
}