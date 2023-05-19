export interface IPillTypeInfo {
  img: string;
  name: string;
  value: string;
}

export const LineType: IPillTypeInfo[] = [
  {
    img: "line/line01",
    name: "line-none",
    value: "",
  },
  {
    img: "line/line02",
    name: "line-plus",
    value: "+",
  },
  {
    img: "line/line03",
    name: "line-minus",
    value: "-",
  },
  {
    img: "",
    name: "line-other",
    value: "기타",
  },
];

export const PillType: IPillTypeInfo[] = [
  {
    img: "pill-type/type01",
    name: "type-tablet",
    value: "정제",
  },
  {
    img: "pill-type/type02",
    name: "type-hard",
    value: "경질캡슐제",
  },
  {
    img: "pill-type/type03",
    name: "type-soft",
    value: "연질캡슐제",
  },
  {
    img: "",
    name: "type-other",
    value: "기타",
  },
];
export const ShapeType: IPillTypeInfo[] = [
  {
    img: "shape/shape01",
    name: "shape-circle",
    value: "원형",
  },
  {
    img: "shape/shape02",
    name: "shape-ellipse",
    value: "타원형",
  },
  {
    img: "shape/shape03",
    name: "shape-half-circle",
    value: "반원형",
  },
  {
    img: "shape/shape04",
    name: "shape-triangle",
    value: "삼각형",
  },
  {
    img: "shape/shape05",
    name: "shape-rectangle",
    value: "사각형",
  },
  {
    img: "shape/shape06",
    name: "shape-diamond",
    value: "마름모형",
  },
  {
    img: "shape/shape07",
    name: "shape-long",
    value: "장방형",
  },
  {
    img: "shape/shape08",
    name: "shape-hexagon",
    value: "육각형",
  },
  {
    img: "shape/shape09",
    name: "shape-octagon",
    value: "팔각형",
  },
  {
    img: "",
    name: "shape-other",
    value: "기타",
  },
];

export const ColorType: IPillTypeInfo[] = [
  { img: "", name: "white", value: "하양" },
  { img: "", name: "yellow", value: "노랑" },
  { img: "", name: "orange", value: "주황" },
  { img: "", name: "pink", value: "분홍" },
  { img: "", name: "red", value: "빨강" },
  { img: "", name: "brown", value: "갈색" },
  { img: "", name: "lightgreen", value: "연두" },
  { img: "", name: "green", value: "초록" },
  { img: "", name: "turquoise", value: "청록" },
  { img: "", name: "blue", value: "파랑" },
  { img: "", name: "navy", value: "남색" },
  { img: "", name: "wine", value: "자주" },
  { img: "", name: "purple", value: "보라" },
  { img: "", name: "gray", value: "회색" },
  { img: "", name: "black", value: "검정" },
  { img: "", name: "transparent", value: "투명" },
  { img: "", name: "기타", value: "" },
];
