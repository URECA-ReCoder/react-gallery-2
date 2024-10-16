import React from "react";
import { Block, Margin, Text } from "./styles/UI";
import { useLocation } from "react-router-dom";

export default function SocialLogin() {
    const location = useLocation();

    const isLoginPage = location.pathname === "/login";
    const message = isLoginPage ? "Log in to your Account" : "Create your Account";
    return (
        <>
            <Block.FlexBox direction="column">
                <Text.MainTitle>Think it. Make it.</Text.MainTitle>

                <Text.Title>{message}</Text.Title>

                <div style={{ borderBottom: "1px solid #2F2F2F" }}>
                    <Block.ButtonBox isEnabled={false} margin="26px 0">
                        <Text.Body1 color="white">Continue with Kakao</Text.Body1>
                    </Block.ButtonBox>
                </div>
            </Block.FlexBox>
        </>
    );
}
