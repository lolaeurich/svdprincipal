import React from "react";
import "../styles/Input.css";

export function Input({ type = "text", name, value, onChange, placeholder, className, required }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`custom-input2 ${className || ""}`}
    />
  );
}
