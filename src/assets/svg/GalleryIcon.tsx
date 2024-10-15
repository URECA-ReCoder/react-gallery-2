import * as React from "react";
import type { SVGProps } from "react";
const SvgGalleryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 14"
    {...props}
  >
    <rect width={6} height={5} x={1} y={1} stroke="#D4D4D4" rx={1} />
    <rect width={6} height={5} x={1} y={8} stroke="#D4D4D4" rx={1} />
    <rect width={6} height={5} x={9} y={1} stroke="#D4D4D4" rx={1} />
    <rect width={6} height={5} x={9} y={8} stroke="#D4D4D4" rx={1} />
  </svg>
);
export default SvgGalleryIcon;
