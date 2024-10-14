import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./componets/styles/GlobalStyles";
import { Global } from "@emotion/react";
import React from "react";
import { router } from "./router";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Global styles={GlobalStyles} />
        <RouterProvider router={router} />
    </StrictMode>
);
