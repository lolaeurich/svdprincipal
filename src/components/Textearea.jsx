import React from "react";
import "../styles/Textearea.css";

export function Textarea({ value, onChange, placeholder, rows = 4, name, className, required }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className={`custom-textarea ${className || ""}`}
    />
  );
}
