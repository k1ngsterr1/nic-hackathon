interface ArrowProps {
  className: string;
}

export default function Arrow({ className }: ArrowProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.32882 23.6175C8.79795 23.0866 8.79795 22.2259 9.32882 21.695L16.5238 14.5L9.32882 7.30497C8.79795 6.77411 8.79795 5.91339 9.32882 5.38253C9.85968 4.85166 10.7204 4.85166 11.2513 5.38253L19.4075 13.5388C19.9384 14.0696 19.9384 14.9304 19.4075 15.4612L11.2513 23.6175C10.7204 24.1483 9.85968 24.1483 9.32882 23.6175Z"
        fill="white"
      />
    </svg>
  );
}
