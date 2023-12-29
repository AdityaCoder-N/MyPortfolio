import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        {/* Transform the 'A' for better centering and scaling */}
        <g id="A" transform="translate(25, 8)"> {/* Adjusted for better centering */}
          {/* Defining a smaller 'A' without changing the stroke width */}
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="8" // Keeping the original stroke width
            d="M 15,55 25,35 35,55" // Adjusted coordinates for a smaller 'A'
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="8" // Keeping the stroke width consistent for the crossbar
            d="M 20,45 H 30" // Adjusted coordinates for a smaller crossbar
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;