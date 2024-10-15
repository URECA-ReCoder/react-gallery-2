import React from "react";
import { Block, Input, Text } from "../components/styles/UI";
import SocialLogin from "../components/SocialLogin";

export default function Login() {
    return (
        <>
            <Block.FlexBox direction="column" justifyContent="center">
                <SocialLogin />

                <Text.Body2>Email</Text.Body2>
                <Input.InfoInput placeholder="이메일을 입력해주세요." isEnabled={false} />

                <Text.Body2>Password</Text.Body2>
                <Input.InfoInput placeholder="비밀번호를 입력해주세요." isEnabled={false} />

                <Block.ButtonBox justifyContent="center" alignItems="center" isEnabled={false} pointer>
                    <Text.Body1 color="white">Sign up</Text.Body1>
                </Block.ButtonBox>
            </Block.FlexBox>
        </>
    );
}
