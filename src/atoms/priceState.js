import { atom } from "recoil";

export const priceState = atom({
  key: "priceState",
  default: [0,50000],
});
