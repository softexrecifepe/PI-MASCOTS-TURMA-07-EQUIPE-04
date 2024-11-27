import React from "react";

interface CustomIconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

const HospitalIcon: React.FC<CustomIconProps> = ({
  width = 22,
  height = 22,
  fill = "none",
  stroke = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 5V9M13 13H9M13 17H9M13 7H9M17 11H19C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V10C1 9.46957 1.21071 8.96086 1.58579 8.58579C1.96086 8.21071 2.46957 8 3 8H5"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 21V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V21"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HospitalIcon;
