import React, { useEffect, useState } from "react";
import { Block, Input, Text } from "../components/styles/UI";
import SocialLogin from "../components/SocialLogin";
import { IAuth } from "../interfaces/account";
import { LoginApi } from "../components/api/loginApi";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [isEnabled, setIsEnabled] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUserInfo(prev => {
            const updatedUserInfo = {
                ...prev,
                [name]: value,
            };

            const isAllInputFilled =
                updatedUserInfo.username !== "" && updatedUserInfo.email !== "" && updatedUserInfo.password !== "";
            setIsEnabled(isAllInputFilled);
            return updatedUserInfo;
        });

        setUserInfo(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignupSubmit = async () => {
        console.log("제출할게요", userInfo);

        const signupInfo: IAuth = {
            username: userInfo.username,
            email: userInfo.email,
            password: userInfo.password,
        };

        try {
            await LoginApi.signUp(signupInfo);
            console.log("회원가입 성공");
            navigate("/login");
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    const handleLoginButtonClick = () => {
        navigate("/login");
    };

    return (
        <>
            <Block.FlexBox width="100vw" height="100vh" direction="column" justifyContent="center" alignItems="center">
                <SocialLogin />
                <div>
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

                    <Block.ButtonBox isEnabled={isEnabled} onClick={handleSignupSubmit}>
                        <Text.Body1 color="white">Sign up</Text.Body1>
                    </Block.ButtonBox>

                    <Text.Body1 color="gray300">
                        이미 계정이 있으신가요 ?{" "}
                        <Text.Body1
                            style={{ borderBottom: "1px solid gray", color: "gray", cursor: "pointer" }}
                            onClick={handleLoginButtonClick}
                        >
                            로그인
                        </Text.Body1>
                    </Text.Body1>
                </div>
            </Block.FlexBox>
        </>
    );
}
