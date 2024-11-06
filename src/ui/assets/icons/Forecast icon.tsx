import React from "react";

interface CustomIconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

export const ForecastIcon: React.FC<CustomIconProps> = ({
  width = 20,
  height = 20,
  fill = "none",
  stroke = "black",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 1V5H9M7 15V19M15 12V19M11 11V19M19 10V19"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ForecastIcon;
