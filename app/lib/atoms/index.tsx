"use client";

import { atom } from "recoil";

export interface ISearchResult {
  success: boolean;
  name: string;
  id: string;
  pill_img: string;
}

export const imgSearchResultState = atom<ISearchResult>({
  key: "imgSearchResultState",
  default: {
    success: true,
    name: "타이레놀8시간이알서방정(아세트아미노펜)",
    id: "2022004077",
    pill_img: "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1OKRXo9l4DN",
  },
});
