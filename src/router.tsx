import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "products",
                element: <ProductList />,
            },
            {
                path: "product/:productId",
                element: <ProductDetail />,
            },
        ],
    },
]);
