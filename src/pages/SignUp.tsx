import React from "react";
import { Block, Text } from "../components/styles/UI";
import SocialLogin from "../components/SocialLogin";

export default function SignUp() {
    return (
        <>
            <Block.FlexBox direction="column" justifyContent="center">
                <SocialLogin />

                <Text.Body2>Name</Text.Body2>

                <Text.Body2>Email</Text.Body2>

                <Text.Body2>Password</Text.Body2>

                <Block.ButtonBox width="320px" height="35px" isEnabled={false} pointer>
                    <Text.Body1 color="white">Sign up</Text.Body1>
                </Block.ButtonBox>
            </Block.FlexBox>
        </>
    );
}
