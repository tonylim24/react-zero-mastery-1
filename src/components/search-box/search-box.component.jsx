import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      // Use setState second parameter to console.log onChange values,
      // Otherwise the value is always one step behind due to synchronous operation if we just clg below setState call.
      // However using the callback parameter allows the program to clg right after setState is called.

      // * You should never call setState inside render function. Always make a new function for the onChange to call.
      // This is due to rendering issue, everytime the state changes, render is called, therefore setState is called and change the state again.
      onChange={handleChange}
    />
  );
};
