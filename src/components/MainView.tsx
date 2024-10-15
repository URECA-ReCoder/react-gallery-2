import React from "react";
import styled from "@emotion/styled";
import { Text } from "./styles/UI";
import { BookmarkIcon, HomeIcon, PageIcon } from "../assets/svg";

export default function MainView(){
  const items = [
    { name: "고윤정", bookmarked: false},
    { name: "고주희", bookmarked: true},
    { name: "김윤일", bookmarked: false},
    { name: "심여은", bookmarked: false},
    { name: "이지수", bookmarked: false},
    { name: "이효린", bookmarked: true},
    { name: "임시언", bookmarked: false},
    { name: "임시언", bookmarked: false},
    { name: "임시언", bookmarked: false},
    { name: "임시언", bookmarked: false},
    { name: "임시언", bookmarked: false},
  ];

  return (
    <MainWrapper>
      <Title>
        <span style={{fontSize:"64px"}}>👋</span>
        <Text.MainViewTitle>Hello, yoonjeong ko</Text.MainViewTitle>
      </Title>
      <Content>
        <Menu>
          <HomeIcon width="14" height="13" color="#d4d4d4"/>
          <Text.Body5>Home</Text.Body5>
        </Menu>
        <ScrollBox>
          <BoxList>
            {items.map((item, index)=>(
              <Box key={index}>
                <TitleBox>
                  <TitleText>
                    <PageIcon width="12" height="15"/>
                    <Text.Body1>{item.name}</Text.Body1>
                  </TitleText>
                  <Bookmark>
                    <BookmarkIcon width="19" height="25" color="#3f3f3f"/>
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  padding: 30px 0;
  border-bottom: 1px solid #2F2F2F;
  width: 707px;
  margin-top: 30px;
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
  background-color: #D9D9D9;
  position: relative;
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
`;