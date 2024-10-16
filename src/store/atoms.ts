import { atom } from "recoil";

export type UserType = {
    id: string;
    username: string;
};

export const userState = atom<UserType[]>({
    key: "userState",
    default: [],
});
