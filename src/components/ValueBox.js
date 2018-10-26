import React from "react";

export const ValueBox = ({ text, name, value, handleInputChange }) => (
    <div className="box value">
        <span>{text}:</span><input name={name} type="number" value={value} onChange={handleInputChange} />
    </div>
)