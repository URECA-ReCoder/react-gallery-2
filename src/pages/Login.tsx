import React, { useEffect, useState } from "react";
import { Block, Input, Text } from "../components/styles/UI";
import SocialLogin from "../components/SocialLogin";

export default function Login() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUserInfo(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        console.log("email :::: ", userInfo.email);
        console.log("password :::: ", userInfo.password);
    }, [userInfo]);

    return (
        <>
            <Block.FlexBox direction="column" justifyContent="center">
                <SocialLogin />

                <Text.Body2>Email</Text.Body2>
                <Input.InfoInput
                    name="email"
                    value={userInfo.email}
                    placeholder="이메일을 입력해주세요."
                    onChange={handleInputChange}
                />

                <Text.Body2>Password</Text.Body2>
                <Input.InfoInput
                    name="password"
                    value={userInfo.password}
                    placeholder="비밀번호를 입력해주세요."
                    onChange={handleInputChange}
                />

                <Block.ButtonBox justifyContent="center" alignItems="center" isEnabled={false} pointer>
                    <Text.Body1 color="white">Sign up</Text.Body1>
                </Block.ButtonBox>
            </Block.FlexBox>
        </>
    );
}
