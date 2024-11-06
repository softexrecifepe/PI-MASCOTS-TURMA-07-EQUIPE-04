import React from "react";

interface CustomIconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

const hamburguerIcon: React.FC<CustomIconProps> = ({
  width = 16,
  height = 12,
  fill = "none",
  stroke = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 12"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 11H15M1 6H15M1 1H15"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default hamburguerIcon;
