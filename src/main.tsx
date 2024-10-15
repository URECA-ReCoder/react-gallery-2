import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { Global, ThemeProvider } from "@emotion/react";
import React from "react";
import { router } from "./router";
import theme from "./components/styles/theme";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
