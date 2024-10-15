import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 13"
    {...props}
  >
    <g clipPath="url(#home-icon_svg__a)">
      <path
        fill="#8B8A8B"
        d="M12.106 13h-2.58a1.887 1.887 0 0 1-1.894-1.876V8.048c0-.2-.164-.363-.367-.363h-.904a.365.365 0 0 0-.367.363v3.076A1.887 1.887 0 0 1 4.1 13H1.894A1.887 1.887 0 0 1 0 11.124V5.267c0-.617.305-1.192.817-1.544L5.753.337a1.905 1.905 0 0 1 2.112-.03l5.272 3.409c.538.348.86.934.86 1.57v5.838A1.887 1.887 0 0 1 12.101 13zM6.361 6.172h.904c1.043 0 1.894.84 1.894 1.877v3.076c0 .2.164.363.366.363h2.581a.365.365 0 0 0 .367-.363V5.286a.36.36 0 0 0-.164-.303L7.032 1.574a.365.365 0 0 0-.408.008l-4.94 3.386a.36.36 0 0 0-.157.299v5.857c0 .2.164.363.367.363h2.21a.365.365 0 0 0 .367-.363V8.048c0-1.033.847-1.877 1.893-1.877z"
      />
    </g>
    <defs>
      <clipPath id="home-icon_svg__a">
        <path fill="#fff" d="M0 0h14v13H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeIcon;
