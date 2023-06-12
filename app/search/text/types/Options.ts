export interface IPillTypeInfo {
  img: string;
  name: string;
  value: string;
}

export const LineType: IPillTypeInfo[] = [
  {
    img: "line/line01",
    name: "line-none",
    value: "-",
  },
  {
    img: "line/line02",
    name: "line-plus",
    value: "십자분할선",
  },
  {
    img: "line/line03",
    name: "line-minus",
    value: "분할선",
  },
  {
    img: "",
    name: "line-other",
    value: "기타",
  },
  {
    img: "",
    name: "line-all",
    value: "전체",
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
  {
    img: "",
    name: "type-all",
    value: "전체",
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
  {
    img: "",
    name: "shape-all",
    value: "전체",
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
  { img: "", name: "color-other", value: "기타" },
  { img: "", name: "color-all", value: "전체" },
];

export const NewFormType: IPillTypeInfo[] = [
  {
    img: "/img/form/images/PID_form_01.png",
    name: "form-tablet",
    value: "정제",
  },
  {
    img: "/img/form/images/PID_form_02.png",
    name: "form-hard",
    value: "경질캡슐제",
  },
  {
    img: "/img/form/images/PID_form_03.png",
    name: "form-soft",
    value: "연질캡슐제",
  },
  {
    img: "/img/form/images/PID_form_04.png",
    name: "form-other",
    value: "기타",
  },
];
export const NewScoringType: IPillTypeInfo[] = [
  {
    img: "/img/scoring/images/PID_scoring_01.png",
    name: "scoring-none",
    value: "-",
  },
  {
    img: "/img/scoring/images/PID_scoring_04.png",
    name: "scoring-plus",
    value: "십자분할선",
  },
  {
    img: "/img/scoring/images/PID_scoring_02.png",
    name: "scoring-minus",
    value: "분할선",
  },
  {
    img: "/img/scoring/images/PID_scoring_03.png",
    name: "scoring-other",
    value: "기타",
  },
];
export const NewShapeType: IPillTypeInfo[] = [
  {
    img: "/img/shape/images/PID_shape_01.png",
    name: "shape-circle",
    value: "원형",
  },
  {
    img: "/img/shape/images/PID_shape_03.png",
    name: "shape-ellipse",
    value: "타원형",
  },
  {
    img: "/img/shape/images/PID_shape_04.png",
    name: "shape-triangle",
    value: "삼각형",
  },
  {
    img: "/img/shape/images/PID_shape_05.png",
    name: "shape-rectangle",
    value: "사각형",
  },
  {
    img: "/img/shape/images/PID_shape_07.png",
    name: "shape-diamond",
    value: "마름모형",
  },
  {
    img: "/img/shape/images/PID_shape_02.png",
    name: "shape-long",
    value: "장방형",
  },
  {
    img: "/img/shape/images/PID_shape_09.png",
    name: "shape-hexagon",
    value: "육각형",
  },
  {
    img: "/img/shape/images/PID_shape_10.png",
    name: "shape-other",
    value: "기타",
  },
];
export const NewColorType: IPillTypeInfo[] = [
  { img: "/img/color/images/PID_color_01.png", name: "white", value: "하양" },
  { img: "/img/color/images/PID_color_12.png", name: "yellow", value: "노랑" },
  { img: "/img/color/images/PID_color_10.png", name: "orange", value: "주황" },
  { img: "/img/color/images/PID_color_09.png", name: "pink", value: "분홍" },
  { img: "/img/color/images/PID_color_08.png", name: "red", value: "빨강" },
  { img: "/img/color/images/PID_color_07.png", name: "brown", value: "갈색" },
  {
    img: "/img/color/images/PID_color_16.png",
    name: "lightgreen",
    value: "연두",
  },
  { img: "/img/color/images/PID_color_13.png", name: "green", value: "초록" },
  {
    img: "/img/color/images/PID_color_18.png",
    name: "turquoise",
    value: "청록",
  },
  { img: "/img/color/images/PID_color_14.png", name: "blue", value: "파랑" },
  { img: "/img/color/images/PID_color_19.png", name: "navy", value: "남색" },
  { img: "/img/color/images/PID_color_20.png", name: "wine", value: "자주" },
  { img: "/img/color/images/PID_color_21.png", name: "purple", value: "보라" },
  { img: "/img/color/images/PID_color_04.png", name: "gray", value: "회색" },
  { img: "/img/color/images/PID_color_05.png", name: "black", value: "검정" },
  {
    img: "/img/color/images/PID_color_03.png",
    name: "transparent",
    value: "투명",
  },
];
export const NewMenuType: IPillTypeInfo[] = [
  {
    img: "/img/menu/images/PID_default_01.png",
    name: "imprint",
    value: "각인",
  },
  {
    img: "/img/menu/images/PID_default_02.png",
    name: "shape",
    value: "모양",
  },
  {
    img: "/img/menu/images/PID_default_03.png",
    name: "color",
    value: "색상",
  },
  {
    img: "/img/menu/images/PID_default_04.png",
    name: "form",
    value: "제형",
  },
  {
    img: "/img/menu/images/PID_default_05.png",
    name: "scoring",
    value: "분할선",
  },
];

export interface ISearchResult {
  buy_class: string;
  char_back: string;
  char_front: string;
  color_back: string;
  color_front: string;
  company: string;
  id: number;
  line_back: string;
  line_front: string;
  name: string;
  pill_effect: string;
  pill_img: string;
  pill_type: string;
  shape: string;
}
