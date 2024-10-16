import React, { useEffect, useState } from "react";
import { Block, Input, Text } from "../components/styles/UI";
import SocialLogin from "../components/SocialLogin";
import { IAuth } from "../interfaces/account";
import { LoginApi } from "../components/api/loginApi";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../share/validate";

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

            const isFilled =
                updatedUserInfo.username !== "" && updatedUserInfo.email !== "" && updatedUserInfo.password !== "";
            setIsEnabled(isFilled && isEmailValid && isPasswordValid);
            return updatedUserInfo;
        });
    };

    const handleSignupSubmit = async () => {
        if (isEnabled) {
            const signupInfo: IAuth = {
                username: userInfo.username,
                email: userInfo.email,
                password: userInfo.password,
            };

            try {
                await LoginApi.signUp(signupInfo);
                alert("성공적으로 회원가입되었습니다.");
                navigate("/login");
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
    };

    const handleLoginButtonClick = () => {
        navigate("/login");
    };

    const isEmailValid = validateEmail(userInfo.email);
    const isPasswordValid = validatePassword(userInfo.password);

    return (
        <>
            <Block.FlexBox width="100vw" height="100vh" direction="column" justifyContent="center" alignItems="center">
                <div>
                    <SocialLogin />
                    <Block.FlexBox direction="column" style={{ margin: "36px 0" }} gap="25px">
                        <Block.FlexBox direction="column" gap="11px">
                            <Text.Body2>Name</Text.Body2>
                            <Input.InfoInput
                                name="username"
                                placeholder="이름을 입력해주세요."
                                value={userInfo.username}
                                onChange={handleInputChange}
                                required
                            />
                        </Block.FlexBox>

                        <Block.FlexBox direction="column" gap="11px">
                            <Block.FlexBox width="190px" alignItems="center" justifyContent="space-between">
                                <Text.Body2>Email</Text.Body2>
                                {!isEmailValid && userInfo.email !== "" && (
                                    <Text.Warning>이메일 주소를 정확히 입력해주세요. </Text.Warning>
                                )}
                            </Block.FlexBox>
                            <Input.InfoInput
                                type="email"
                                name="email"
                                placeholder="이메일을 입력해주세요."
                                value={userInfo.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Block.FlexBox>

                        <Block.FlexBox direction="column" gap="11px">
                            <Block.FlexBox width="260px" alignItems="center" justifyContent="space-between">
                                <Text.Body2>Password</Text.Body2>
                                {!isPasswordValid && userInfo.password !== "" && (
                                    <Text.Warning>영문, 숫자를 조합해서 입력해주세요. (8-16자)</Text.Warning>
                                )}
                            </Block.FlexBox>
                            <Input.InfoInput
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                value={userInfo.password}
                                onChange={handleInputChange}
                                required
                            />
                        </Block.FlexBox>
                        <Block.ButtonBox isEnabled={isEnabled} onClick={handleSignupSubmit}>
                            <Text.Body1 color="white">Sign up</Text.Body1>
                        </Block.ButtonBox>
                    </Block.FlexBox>
                </div>
                <Text.Body1 color="gray300">
                    이미 계정이 있으신가요 ?{" "}
                    <Text.Body1
                        style={{ borderBottom: "1px solid gray", color: "gray", cursor: "pointer" }}
                        onClick={handleLoginButtonClick}
                    >
                        로그인
                    </Text.Body1>
                </Text.Body1>
            </Block.FlexBox>
        </>
    );
}
