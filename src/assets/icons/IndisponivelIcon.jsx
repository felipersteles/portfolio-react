const IndisponivelIcon = ({ color = "#000000", size = 50 }) => {
  return (
    <svg
      fill={color}
      height={size}
      width={size}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      id="memory-alert-rhombus-fill"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12,21H10V20H9V19H8V18H7V17H6V16H5V15H4V14H3V13H2V12H1V10H2V9H3V8H4V7H5V6H6V5H7V4H8V3H9V2H10V1H12V2H13V3H14V4H15V5H16V6H17V7H18V8H19V9H20V10H21V12H20V13H19V14H18V15H17V16H16V17H15V18H14V19H13V20H12ZM12,12V6H10V12ZM12,16V14H10V16Z"></path>
      </g>
    </svg>
  );
};

export default IndisponivelIcon;
