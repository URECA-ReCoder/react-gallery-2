import React from "react";
import styled from "@emotion/styled";
import MenuBar from "../components/MenuBar";
import MainView from "../components/MainView";

export default function ProductList() {
    return (
        <Wrapper>
            <MenuBar/>
            <MainView/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    
`;