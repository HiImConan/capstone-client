export interface IDrugInfo {
  entpName?: string;
  itemName?: string;
  itemImage?: string;
  itemSeq?: number;
  efcyQesitm?: string;
  useMethodQesitm?: string;
  atpnWarnQesitm?: string;
  atpnQesitm?: string;
  intrcQesitm?: string;
  seQesitm?: string;
  depositMethodQesitm?: string;
  openDe?: string;
  updateDe?: string;
}

export const DRUG_INFO_LIST = [
  {
    key: "entpName",
    value: "업체명",
  },
  {
    key: "itemName",
    value: "제품명",
  },
  {
    key: "itemSeq",
    value: "품목기준코드",
  },
  {
    key: "efcyQesitm",
    value: "약의 효능",
  },
  {
    key: "useMethodQesitm",
    value: "사용방법",
  },
  {
    key: "atpnWarnQesitm",
    value: "약을 사용하기 전에 반드시 알아야 할 내용",
  },
  {
    key: "atpnQesitm",
    value: "사용상 주의사항",
  },
  {
    key: "intrcQesitm",
    value: "이 약을 사용하는 동안 주의해야 할 약 또는 음식",
  },
  {
    key: "seQesitm",
    value: "약을 사용할 때 나타날 수 있는 이상반응",
  },
  {
    key: "depositMethodQesitm",
    value: "보관방법",
  },
  {
    key: "openDe",
    value: "공개일자",
  },
  {
    key: "updateDe",
    value: "수정일자",
  },
];
