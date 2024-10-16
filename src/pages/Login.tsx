import React, { useState } from "react";
import { Block, Input, Text } from "../components/styles/UI";
import SocialLogin from "../components/SocialLogin";
import { IAuth } from "../interfaces/account";
import { LoginApi } from "../components/api/loginApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

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

    const handleLoginSubmit = async () => {
        const loginInfo: IAuth = {
            email: userInfo.email,
            password: userInfo.password,
        };

        try {
            await LoginApi.login(loginInfo);
            console.log("로그인성공");
            navigate("/products");
        } catch (e) {
            console.log("웩웩");
        }
    };

    const handleSignupButtonClick = () => {
        navigate("/signup");
    };

    return (
        <>
            <Block.FlexBox width="100vw" height="100vh" direction="column" justifyContent="center" alignItems="center">
                <SocialLogin />

                <div>
                    <Text.Body2>Email</Text.Body2>
                    <Input.InfoInput
                        name="email"
                        value={userInfo.email}
                        placeholder="이메일을 입력해주세요."
                        onChange={handleInputChange}
                    />

                    <Text.Body2>Password</Text.Body2>
                    <Input.InfoInput
                        type="password"
                        name="password"
                        value={userInfo.password}
                        placeholder="비밀번호를 입력해주세요."
                        onChange={handleInputChange}
                    />

                    <Block.ButtonBox
                        justifyContent="center"
                        alignItems="center"
                        isEnabled={false}
                        pointer
                        onClick={handleLoginSubmit}
                    >
                        <Text.Body1 color="white">Log in</Text.Body1>
                    </Block.ButtonBox>

                    <Text.Body1 color="gray300">
                        아직 계정이 없으신가요 ?{" "}
                        <Text.Body1
                            style={{ borderBottom: "1px solid gray", color: "gray", cursor: "pointer" }}
                            onClick={handleSignupButtonClick}
                        >
                            회원가입
                        </Text.Body1>
                    </Text.Body1>
                </div>
            </Block.FlexBox>
        </>
    );
}
