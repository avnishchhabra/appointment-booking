import React from "react";

const Hamburger = ({ size = 20 }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m22 5h-20c-.552 0-1-.448-1-1s.448-1 1-1h20c.552 0 1 .448 1 1s-.448 1-1 1z" />
        <path d="m22 13h-20c-.552 0-1-.448-1-1s.448-1 1-1h20c.552 0 1 .448 1 1s-.448 1-1 1z" />
        <path d="m22 21h-20c-.552 0-1-.448-1-1s.448-1 1-1h20c.552 0 1 .448 1 1s-.448 1-1 1z" />
      </svg>
    </div>
  );
};

export default Hamburger;
