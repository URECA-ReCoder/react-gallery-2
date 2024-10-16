/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
    return (
        <>
            <Outlet />
        </>
    );
}
