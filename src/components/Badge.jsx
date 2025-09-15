import React from "react";
import "../styles/Badge.css";

export function Badge({ children, variant = "default", className }) {
  return (
    <span className={`badge ${variant} ${className || ""}`}>
      {children}
    </span>
  );
}
