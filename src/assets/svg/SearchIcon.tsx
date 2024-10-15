import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 15"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.171 12.773C2.77 12.773 0 9.907 0 6.386S2.769 0 6.171 0s6.171 2.865 6.171 6.386-2.769 6.387-6.17 6.387m0-10.977c-2.448 0-4.435 2.062-4.435 4.59s1.992 4.59 4.435 4.59 4.435-2.061 4.435-4.59-1.987-4.59-4.435-4.59"
    />
    <path
      fill="currentColor"
      d="M13.132 15a.85.85 0 0 1-.612-.265l-3.354-3.471a.92.92 0 0 1 0-1.271.85.85 0 0 1 1.228 0l3.354 3.471c.339.35.339.92 0 1.271a.85.85 0 0 1-.612.265z"
    />
  </svg>
);
export default SvgSearchIcon;
