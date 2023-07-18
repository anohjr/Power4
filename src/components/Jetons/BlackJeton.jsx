function BlackJeton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="132"
      height="132"
      viewBox="0 0 132 132"
      fill="none"
    >
      <g filter="url(#filter0_d_4_54)">
        <circle cx="65" cy="65" r="55" fill="#735959" />
      </g>
      <defs>
        <filter
          id="filter0_d_4_54"
          x="0"
          y="0"
          width="132"
          height="132"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_4_54"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4_54"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_54"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default BlackJeton;