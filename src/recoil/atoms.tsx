import { atom } from "recoil";

interface Like{
  id: string,
  missionId: string,
  userId: string,
  username: string,
  createdAt: string, 
}

interface Item {
  id: string,
  type: string,
  creator: string,
  url: string,
  likes: Like[],
}

export const itemsState = atom<Item[]>({
  key: "itemsState",
  default: [], // 초기값 빈 배열
});

