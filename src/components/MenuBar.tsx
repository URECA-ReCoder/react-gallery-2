import React from "react";
import styled from "@emotion/styled";
import { HomeIcon, SearchIcon } from "../assets/svg";
import { Text } from "./styles/UI";
import { useSetRecoilState } from "recoil";
import { filteredListState } from "../recoil/atoms";

export default function MenuBar(){
  const types = ["VANILLA_TODO", "REACT_TODO", "REACT_SNS"];
  const setFilteredListState = useSetRecoilState(filteredListState); // 필터링된 리스트 상태 업데이트

  return (
    <Wrapper>
      <TopContainer>
        <Archive>
          <Text.MenuTitle>🗂️</Text.MenuTitle>
          <Text.MenuTitle>Archive</Text.MenuTitle>
        </Archive>
        <FilterSelected>
          <Home onClick={()=>setFilteredListState("Home")}>
            <HomeIcon width="14" height="13" color="#8B8A8B"/>
            <Text.Body3>Home</Text.Body3>
          </Home>
        </FilterSelected>
        <FilterSelected>
          <Search>
            <SearchIcon width="14" height="15" color="#8B8A8B"/>
            <Text.Body3>Search</Text.Body3>
          </Search>
        </FilterSelected>
      </TopContainer>
      <FilterContainer>
        <Text.Body4 style={{paddingLeft:"24px"}}>Filter</Text.Body4>
        <FilterList>
          {types.map((type)=>(
            <FilterSelected>
              <FilterContent key={type} onClick={()=> setFilteredListState(type)}>
                <Text.Body3>📁</Text.Body3>
                <Text.Body3>{type}</Text.Body3>
              </FilterContent>
            </FilterSelected>
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
  padding: 24px 0;
  box-sizing: border-box;
`;

const TopContainer = styled.div`
  
`;

const Archive = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0px 0px 3px 24px;
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

const FilterSelected = styled.div`
  width: 226px;
  padding-left: 24px;
  box-sizing: border-box;

  &:hover{
    cursor: pointer;
    background-color: #2C2C2C;
  }
`;

const FilterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 0 6px 0;
  color: #9A9A9A;
  font-size: 15px;
  font-weight: bold;
`;