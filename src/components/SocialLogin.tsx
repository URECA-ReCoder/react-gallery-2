import React from "react";
import { Block, Text } from "./styles/UI";
import { useLocation } from "react-router-dom";

export default function SocialLogin() {
    const location = useLocation();

    const isLoginPage = location.pathname === "/login";
    const message = isLoginPage ? "Log in to your Account" : "Create your Account";
    return (
        <>
            <Block.FlexBox width="100vw" direction="column" justifyContent="center" alignItems="center">
                <Text.MainTitle>Think it. Make it.</Text.MainTitle>
                <Text.Title>{message}</Text.Title>
                <Block.ButtonBox isEnabled={false}>
                    <Text.Body1 color="white">Continue with Kakao</Text.Body1>
                </Block.ButtonBox>
            </Block.FlexBox>
        </>
    );
}
