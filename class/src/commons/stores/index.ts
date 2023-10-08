import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // 이게 변수명
  default: true,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});
