import React from "react";

export const CalcSelectionRow = ({ text, name, handleInputChange, calcSelection }) => (
    <div className="row">
        <input type="radio" name={name} onChange={handleInputChange} checked={calcSelection === name} /><span>{text}</span>
    </div>
)