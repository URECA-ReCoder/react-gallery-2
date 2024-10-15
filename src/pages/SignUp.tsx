import React, { useEffect, useState } from "react";
import { Block, Input, Text } from "../components/styles/UI";
import SocialLogin from "../components/SocialLogin";

export default function SignUp() {
    const [userInfo, setUserInfo] = useState({
        username: "",
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
        console.log("username :::: ", userInfo.username);
        console.log("email :::: ", userInfo.email);
        console.log("password :::: ", userInfo.password);
    }, [userInfo]);

    return (
        <>
            <Block.FlexBox direction="column" justifyContent="center">
                <SocialLogin />

                <Text.Body2>Name</Text.Body2>
                <Input.InfoInput
                    name="username"
                    placeholder="이름을 입력해주세요."
                    value={userInfo.username}
                    onChange={handleInputChange}
                />

                <Text.Body2>Email</Text.Body2>
                <Input.InfoInput
                    name="email"
                    placeholder="이메일을 입력해주세요."
                    value={userInfo.email}
                    onChange={handleInputChange}
                />

                <Text.Body2>Password</Text.Body2>
                <Input.InfoInput
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    value={userInfo.password}
                    onChange={handleInputChange}
                />

                <Block.ButtonBox isEnabled={true}>
                    <Text.Body1 color="white">Sign up</Text.Body1>
                </Block.ButtonBox>
            </Block.FlexBox>
        </>
    );
}
