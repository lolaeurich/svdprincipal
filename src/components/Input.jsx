import React from "react";
import "../styles/Input.css";

export function Input({ type = "text", value, onChange, placeholder, className }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`custom-input2 ${className || ""}`}
    />
  );
}
