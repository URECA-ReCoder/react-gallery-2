import React from "react";
import { Block, Input, Text } from "../components/styles/UI";
import SocialLogin from "../components/SocialLogin";

export default function SignUp() {
    return (
        <>
            <Block.FlexBox direction="column" justifyContent="center">
                <SocialLogin />

                <Text.Body2>Name</Text.Body2>
                <Input.InfoInput placeholder="이름을 입력해주세요." isEnabled={false} />

                <Text.Body2>Email</Text.Body2>
                <Input.InfoInput placeholder="이메일을 입력해주세요." isEnabled={false} />

                <Text.Body2>Password</Text.Body2>
                <Input.InfoInput placeholder="이메일을 입력해주세요." isEnabled={false} />

                <Block.ButtonBox isEnabled={false}>
                    <Text.Body1 color="white">Sign up</Text.Body1>
                </Block.ButtonBox>
            </Block.FlexBox>
        </>
    );
}
