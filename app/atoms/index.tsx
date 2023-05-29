"use client";

import { atom } from "recoil";

export interface ISearchResult {
  success: boolean;
  name: string;
  pill_img: string;
}

export const imgSearchResultState = atom<ISearchResult>({
  key: "imgSearchResultState",
  default: {
    success: false,
    name: "",
    pill_img: "",
  },
});
