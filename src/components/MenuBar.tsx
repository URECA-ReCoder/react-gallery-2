import React from "react";
import styled from "@emotion/styled";
import { HomeIcon, SearchIcon } from "../assets/svg";
import { Text } from "./styles/UI";

export default function MenuBar(){
  const weeks = ["VANILLA_TODO", "REACT_TODO", "REACT_SNS"];

  return (
    <Wrapper>
      <TopContainer>
        <Archive>
          <Text.MenuTitle>🗂️</Text.MenuTitle>
          <Text.MenuTitle>Archive</Text.MenuTitle>
        </Archive>
        <Home>
          <HomeIcon width="14" height="13" color="#8B8A8B"/>
          <Text.Body3>Home</Text.Body3>
        </Home>
        <Search>
          <SearchIcon width="14" height="15" color="#8B8A8B"/>
          <Text.Body3>Search</Text.Body3>
        </Search>
      </TopContainer>
      <FilterContainer>
        <Text.Body4>Filter</Text.Body4>
        <FilterList>
          {weeks.map((week)=>(
            <FilterContent key={week}>
              <Text.Body3>📁</Text.Body3>
              <span>{week}</span>
            </FilterContent>
          ))}
        </FilterList>
      </FilterContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 226px;
  height: 100vh;
  background-color: #202020;
  border-right: 1px solid #2b2b2b;
  padding: 24px;
  box-sizing: border-box;
`;

const TopContainer = styled.div`
  
`;

const Archive = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 3px;
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  margin-top: 14px;

  &:hover{
    cursor: pointer;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;

  &:hover{
    cursor: pointer;
  }
`;

const FilterContainer = styled.div`
  margin-top: 24px;
`;

const FilterList = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;  
`;

const FilterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 0 6px 0;
  color: #9A9A9A;
  font-size: 15px;
  font-weight: bold;

  &:hover{
    cursor: pointer;
    color: #ffffff;
  }
`;