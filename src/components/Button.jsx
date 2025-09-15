import React from "react";
import "../styles/Button.css";

export function Button({ children, onClick, className, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={`btn ${className || ""}`}>
      {children}
    </button>
  );
}
