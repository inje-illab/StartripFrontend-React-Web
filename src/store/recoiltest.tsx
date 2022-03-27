import { atom } from 'recoil';
export const countState = atom({
    key: 'countState', // 해당 atom의 고유 key
    default: 0, // 기본값
});