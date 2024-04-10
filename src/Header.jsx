import React, { useState } from "react";
import './header.css'
export default function Header({ changeColor, toggleColors }) {
  const [fontColor, setFontColor] = useState("black");

  const handleButtonClick = () => {
    changeColor(); // Call the changeColor function
    toggleColors(); // Call the toggleColors function
    setFontColor(fontColor === "black" ? "white" : "black");
  };

  return (
    <div className="header">
      <div>
        <h1 style={{ color: fontColor }}>Where is the World?</h1>
      </div>
      <div>
        <button onClick={handleButtonClick} style={{ color: fontColor, backgroundColor: fontColor === "black" ? "white" : "hsl(207, 26%, 17%)" }}>Dark Mode</button>
      </div>
    </div>
  );
}