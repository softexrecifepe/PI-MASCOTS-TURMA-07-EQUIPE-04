import React from "react";

interface CustomIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const MenuIcon: React.FC<CustomIconProps> = ({
  width = 40,
  height = 40,
  fill = "#ffffff",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 -960 960 960"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
  </svg>
);

export default MenuIcon;
