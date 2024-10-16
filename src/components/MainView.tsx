import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Text } from "./styles/UI";
import { BookmarkIcon, HomeIcon, PageIcon } from "../assets/svg";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredListState, itemsState } from "../recoil/atoms";
import { useNavigate } from "react-router-dom";

export default function MainView() {
    const setItems = useSetRecoilState(itemsState); // API 데이터 가져온 후 상태 업데이트
    const items = useRecoilValue(itemsState); // Recoil에 저장된 items 가져오기
    const filteredList = useRecoilValue(filteredListState);

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const apiUrl = "https://vicarious-arlyn-recoder-cb1ffac8.koyeb.app"; // API 요청 주소
        const endpoint = "/missions"; // API 엔드포인트

        axios
            .get(apiUrl + endpoint)
            .then(res => {
                setItems(res.data); // 데이터를 Recoil에 저장
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    }, [setItems]);

    const filteredListItems =
        filteredList == "" || filteredList == "Home" ? items : items.filter(item => item.type === filteredList);

    console.log(filteredList);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [navigate]);

    function handleLoginClick(){
      navigate('/login');
    }

    return (
        <MainWrapper>
            {isLoggedIn 
            ? (
            <LoginTitle>
              <span style={{ fontSize: "64px" }}>👋</span>
              <Text.MainViewTitle>Hello, yoonjeong ko</Text.MainViewTitle>
            </LoginTitle>)
            : (
            <NotLoginTitle>
              <Text.MainViewTitle>Please, Log in</Text.MainViewTitle>
              <LoginButton onClick={handleLoginClick}>
                <span>Log in</span>
                <Arrow>›</Arrow>  
              </LoginButton>
            </NotLoginTitle>
            )}
            
            
            <Content>
                <Menu>
                    {filteredList == "" || filteredList == "Home" ? (
                        <>
                            <HomeIcon width="14" height="13" color="#d4d4d4" />
                            <Text.Body5>Home</Text.Body5>
                        </>
                    ) : (
                        <>
                            <div style={{ fontSize: "12px", lineHeight: "1" }}>📁</div>
                            <Text.Body5>{filteredList}</Text.Body5>
                        </>
                    )}
                </Menu>
                <ScrollBox>
                    <BoxList>
                        {filteredListItems.map(item => (
                            <Box key={item.id}>
                                <Tag type={item.type}>
                                    <Text.Body6>{item.type}</Text.Body6>
                                </Tag>
                                <TitleBox>
                                    <TitleText>
                                        <PageIcon width="12" height="15" />
                                        <Text.Body1>{item.creator}</Text.Body1>
                                    </TitleText>
                                    <Bookmark>
                                        <BookmarkIcon width="19" height="25" color="#3f3f3f" />
                                        <BookmarkCount>29</BookmarkCount>
                                    </Bookmark>
                                </TitleBox>
                            </Box>
                        ))}
                    </BoxList>
                </ScrollBox>
            </Content>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    width: calc(100vw - 226px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

const LoginTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    padding: 30px 0;
    border-bottom: 1px solid #2f2f2f;
    width: 707px;
    margin-top: 30px;
`;

const NotLoginTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    border-bottom: 1px solid #2f2f2f;
    width: 707px;
    margin-top: 30px;
    position: relative;
`;

const LoginButton = styled.div`
  width: 109px;
  height: 33px;
  border-radius: 5px;
  background-color: rgba(16, 136, 255, 0.2);
  border: 1px solid #1088FF;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 8px 13px 8px 13px;
  box-sizing: border-box;
  line-height: 1;
  position: absolute;
  right: 1px;

  &:hover{
    cursor: pointer;
  }
`;

const Arrow = styled.div`
  width: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
    width: 707px;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 17px 9px 12px 9px;
`;

const ScrollBox = styled.div`
    width: 100%;
    height: 567px;
    box-sizing: border-box;
`;

const BoxList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px 15px;
    padding-bottom: 40px;
`;

const Box = styled.div`
    width: 225px;
    height: 143px;
    border-radius: 6px;
    background-color: #d9d9d9;
    position: relative;
`;

const Tag = styled.div<{ type: string }>`
    width: fit-content;
    height: 22px;
    border-radius: 11px;
    background-color: ${({ type }) =>
        type === "VANILLA_TODO"
            ? "#B38938"
            : type === "REACT_TODO"
            ? "#29456C"
            : type === "REACT_SNS"
            ? "#2C593F"
            : "#5A5A5A"};
    opacity: 0.6;
    padding: 0px 13px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 6px;
    position: absolute;
    top: 8px;
    right: 8px;
`;

const TitleBox = styled.div`
    width: 225px;
    height: 43px;
    border-radius: 0 0 5px 5px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    background-color: #262626;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
`;

const TitleText = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 13px;
`;

const Bookmark = styled.div`
    position: absolute;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BookmarkCount = styled.div`
    font-size: 10px;
    color: #838383;
`;
