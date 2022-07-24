import { atom } from "recoil";
export const jwtToken = atom({
    key: "jwtToken", // 해당 atom의 고유 key
    default: "", // 기본값
});