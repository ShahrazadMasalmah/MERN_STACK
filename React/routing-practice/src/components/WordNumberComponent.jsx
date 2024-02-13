import React from "react";
import { useParams } from "react-router-dom";

const WordNumberComponent = props => {
    const {wordNumber, textColor, backColor} = useParams();
  
    return (
      <div className="div-word" style={{ backgroundColor: backColor ? backColor : "white" }}>
        <h1 style={{ color: textColor ? textColor : "#252525" }}>{ isNaN(wordNumber) ? "The word: " + wordNumber : "The number: " + wordNumber}</h1>
      </div>
    );
}

export default WordNumberComponent;