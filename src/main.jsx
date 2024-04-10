import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const Root = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  const toggleColors = () => {
    setBackgroundColor(backgroundColor === "white" ? "hsl(207, 26%, 17%)" : "white");
    setFontColor(fontColor === "black" ? "white" : "black");
  };
  return (
    <React.StrictMode>
      <div style={{backgroundColor: backgroundColor, width:'100%', height:'100%'}}>
      <App toggleColors={toggleColors} backgroundColor={backgroundColor} fontColor={fontColor} />
      </div>
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
