import React from 'react';

interface EditIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ServiceIcon: React.FC<EditIconProps> = ({
  width = 20,
  height = 19,
  fill = 'black',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5.71L15 8.71V18.71H13V12.71H6L4 15.71V18.71H2V12.71L3 11.71V8.71L0 5.71L1 4.71L3 6.71H5V9.71C5 9.97522 5.10536 10.2296 5.29289 10.4171C5.48043 10.6046 5.73478 10.71 6 10.71H10C10.2652 10.71 10.5196 10.6046 10.7071 10.4171C10.8946 10.2296 11 9.97522 11 9.71V6.71L12 5.71ZM17 2.71V0.71L13 4.71L16 7.71L17 6.71L18 7.71L20 5.71L17 2.71ZM9.5 7.21L2.5 0.21C2.23 -0.07 1.79 -0.07 1.5 0.21C1.22 0.48 1.22 0.92 1.5 1.21L8.5 8.21C8.77 8.49 9.21 8.49 9.5 8.21C9.78 7.94 9.78 7.5 9.5 7.21Z"
      fill={fill}
    />
  </svg>
);

export default ServiceIcon;
