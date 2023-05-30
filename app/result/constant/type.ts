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
    value: "이 약의 효능은 무엇입니까?",
  },
  {
    key: "useMethodQesitm",
    value: "이 약은 어떻게 사용합니까?",
  },
  {
    key: "atpnWarnQesitm",
    value: "이 약을 사용하기 전에 반드시 알아야 할 내용은 무엇입니까?",
  },
  {
    key: "atpnQesitm",
    value: "이 약의 사용상 주의사항은 무엇입니까?",
  },
  {
    key: "intrcQesitm",
    value: "이 약을 사용하는 동안 주의해야 할 약 또는 음식은 무엇입니까?",
  },
  {
    key: "seQesitm",
    value: "이 약은 어떤 이상반응이 나타날 수 있습니까?",
  },
  {
    key: "depositMethodQesitm",
    value: "이 약은 어떻게 보관해야 합니까?",
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
