import React from "react";
import MenuBar from "../components/MenuBar";
import MainView from "../components/MainView";
import { Block } from "../components/styles/UI";

export default function ProductList() {
    return (
        <>
            <Block.FlexBox>
                <MenuBar />
                <MainView />
            </Block.FlexBox>
        </>
    );
}
