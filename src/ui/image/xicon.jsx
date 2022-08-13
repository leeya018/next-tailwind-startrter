import { useState } from "react";

export default function XIcon({}) {
  const [isHover, setIsHover] = useState(0);

  return (
    <svg
      focusable="false"
      aria-hidden="true"
      role="presentation"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      className={`Sq(24px) P(4px) border-2 border-black rounded-full p-1 ml-auto duration-500  ease-in-out
    ${isHover ? "rotate-90 " : "-rotate-90"}
    `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <path
        className=""
        d="m15.44 12 4.768 4.708c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L12 15.52l-4.713 4.605c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417L8.47 12 3.874 7.271c-1.138-.976-1.138-2.44 0-3.417a1.973 1.973 0 0 1 3.25 0L12 8.421l4.713-4.567c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417L15.44 12Z"
      ></path>
    </svg>
  );
}
