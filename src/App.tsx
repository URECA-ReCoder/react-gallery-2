/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const userExists = localStorage.getItem("userExists");

        navigate(accessToken ? "/productList" : userExists ? "/login" : "/signup");
    }, [navigate]);
    return (
        <>
            <Outlet />
        </>
    );
}
