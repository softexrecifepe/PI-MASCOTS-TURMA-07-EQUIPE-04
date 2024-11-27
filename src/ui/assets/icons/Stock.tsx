import React from "react";

interface SaveIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const StockIcon: React.FC<SaveIconProps> = ({
  width = 16,
  height = 16,
  fill = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6V0H4V6H0V13H16V6H12ZM7 12H1V7H3V8H5V7H7V12ZM5 6V1H7V2H9V1H11V6H5ZM15 12H9V7H11V8H13V7H15V12ZM0 16H3V15H13V16H16V14H0V16Z"
      fill={fill}
    />
  </svg>
);

export default StockIcon;
