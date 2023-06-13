export interface IPillTypeInfo {
  img: string;
  name: string;
  value: string;
}

export interface INewPillInfo extends IPillTypeInfo {
  default: string;
  selected_img: string;
}

export const NewFormType: INewPillInfo[] = [
  {
    img: "/img/form/images/PID_form_01.png",
    selected_img: "/img/form/images/PID_form_selected_01.png",
    name: "form-tablet",
    default: "pill_type",
    value: "정제",
  },
  {
    img: "/img/form/images/PID_form_02.png",
    selected_img: "/img/form/images/PID_form_selected_02.png",
    name: "form-hard",
    default: "pill_type",
    value: "경질캡슐제",
  },
  {
    img: "/img/form/images/PID_form_03.png",
    selected_img: "/img/form/images/PID_form_selected_03.png",
    name: "form-soft",
    default: "pill_type",
    value: "연질캡슐제",
  },
  {
    img: "/img/form/images/PID_form_04.png",
    selected_img: "/img/form/images/PID_form_selected_04.png",
    name: "form-other",
    default: "pill_type",
    value: "기타",
  },
];
export const NewScoringType: INewPillInfo[] = [
  {
    img: "/img/scoring/images/PID_scoring_01.png",
    selected_img: "/img/scoring/images/PID_scoring_selected_01.png",
    name: "scoring-none",
    default: "line",
    value: "-",
  },
  {
    img: "/img/scoring/images/PID_scoring_04.png",
    selected_img: "/img/scoring/images/PID_scoring_selected_04.png",
    name: "scoring-plus",
    default: "line",
    value: "십자분할선",
  },
  {
    img: "/img/scoring/images/PID_scoring_02.png",
    selected_img: "/img/scoring/images/PID_scoring_selected_02.png",
    name: "scoring-minus",
    default: "line",
    value: "분할선",
  },
  {
    img: "/img/scoring/images/PID_scoring_03.png",
    selected_img: "/img/scoring/images/PID_scoring_selected_03.png",
    name: "scoring-other",
    default: "line",
    value: "기타",
  },
];
export const NewShapeType: INewPillInfo[] = [
  {
    img: "/img/shape/images/PID_shape_01.png",
    selected_img: "/img/shape/images/PID_shape_selected_01.png",
    name: "shape-circle",
    default: "shape",
    value: "원형",
  },
  {
    img: "/img/shape/images/PID_shape_03.png",
    selected_img: "/img/shape/images/PID_shape_selected_03.png",
    name: "shape-ellipse",
    default: "shape",
    value: "타원형",
  },
  {
    img: "/img/shape/images/PID_shape_04.png",
    selected_img: "/img/shape/images/PID_shape_selected_04.png",
    name: "shape-triangle",
    default: "shape",
    value: "삼각형",
  },
  {
    img: "/img/shape/images/PID_shape_05.png",
    selected_img: "/img/shape/images/PID_shape_selected_05.png",
    name: "shape-rectangle",
    default: "shape",
    value: "사각형",
  },
  {
    img: "/img/shape/images/PID_shape_07.png",
    selected_img: "/img/shape/images/PID_shape_selected_07.png",
    name: "shape-diamond",
    default: "shape",
    value: "마름모형",
  },
  {
    img: "/img/shape/images/PID_shape_02.png",
    selected_img: "/img/shape/images/PID_shape_selected_02.png",
    name: "shape-long",
    default: "shape",
    value: "장방형",
  },
  {
    img: "/img/shape/images/PID_shape_09.png",
    selected_img: "/img/shape/images/PID_shape_selected_09.png",
    name: "shape-hexagon",
    default: "shape",
    value: "육각형",
  },
  {
    img: "/img/shape/images/PID_shape_10.png",
    selected_img: "/img/shape/images/PID_shape_selected_10.png",
    name: "shape-other",
    default: "shape",
    value: "기타",
  },
];
export const NewColorType: INewPillInfo[] = [
  {
    img: "/img/color/images/PID_color_01.png",
    selected_img: "/img/color/images/PID_color_selected_01.png",
    name: "white",
    default: "color",
    value: "하양",
  },
  {
    img: "/img/color/images/PID_color_12.png",
    selected_img: "/img/color/images/PID_color_selected_12.png",
    name: "yellow",
    default: "color",
    value: "노랑",
  },
  {
    img: "/img/color/images/PID_color_10.png",
    selected_img: "/img/color/images/PID_color_selected_10.png",
    name: "orange",
    default: "color",
    value: "주황",
  },
  {
    img: "/img/color/images/PID_color_09.png",
    selected_img: "/img/color/images/PID_color_selected_09.png",
    name: "pink",
    default: "color",
    value: "분홍",
  },
  {
    img: "/img/color/images/PID_color_08.png",
    selected_img: "/img/color/images/PID_color_selected_08.png",
    name: "red",
    default: "color",
    value: "빨강",
  },
  {
    img: "/img/color/images/PID_color_07.png",
    selected_img: "/img/color/images/PID_color_selected_07.png",
    name: "brown",
    default: "color",
    value: "갈색",
  },
  {
    img: "/img/color/images/PID_color_16.png",
    selected_img: "/img/color/images/PID_color_selected_16.png",
    name: "lightgreen",
    default: "color",
    value: "연두",
  },
  {
    img: "/img/color/images/PID_color_13.png",
    selected_img: "/img/color/images/PID_color_selected_13.png",
    name: "green",
    default: "color",
    value: "초록",
  },
  {
    img: "/img/color/images/PID_color_18.png",
    selected_img: "/img/color/images/PID_color_selected_18.png",
    name: "turquoise",
    default: "color",
    value: "청록",
  },
  {
    img: "/img/color/images/PID_color_14.png",
    selected_img: "/img/color/images/PID_color_selected_14.png",
    name: "blue",
    default: "color",
    value: "파랑",
  },
  {
    img: "/img/color/images/PID_color_19.png",
    selected_img: "/img/color/images/PID_color_selected_19.png",
    name: "navy",
    default: "color",
    value: "남색",
  },
  {
    img: "/img/color/images/PID_color_20.png",
    selected_img: "/img/color/images/PID_color_selected_20.png",
    name: "wine",
    default: "color",
    value: "자주",
  },
  {
    img: "/img/color/images/PID_color_21.png",
    selected_img: "/img/color/images/PID_color_selected_21.png",
    name: "purple",
    default: "color",
    value: "보라",
  },
  {
    img: "/img/color/images/PID_color_04.png",
    selected_img: "/img/color/images/PID_color_selected_04.png",
    name: "gray",
    default: "color",
    value: "회색",
  },
  {
    img: "/img/color/images/PID_color_05.png",
    selected_img: "/img/color/images/PID_color_selected_05.png",
    name: "black",
    default: "color",
    value: "검정",
  },
  {
    img: "/img/color/images/PID_color_03.png",
    selected_img: "/img/color/images/PID_color_selected_03.png",
    name: "transparent",
    default: "color",
    value: "투명",
  },
];
export const NewMenuType: INewPillInfo[] = [
  {
    img: "/img/menu/images/PID_default_01.png",
    selected_img: "/img/menu/images/PID_default_selected_01.png",
    name: "imprint",
    default: "char_front",
    value: "각인",
  },
  {
    img: "/img/menu/images/PID_default_02.png",
    selected_img: "/img/menu/images/PID_default_selected_02.png",
    name: "shape",
    default: "shape",
    value: "모양",
  },
  {
    img: "/img/menu/images/PID_default_03.png",
    selected_img: "/img/menu/images/PID_default_selected_03.png",
    name: "color",
    default: "color",
    value: "색상",
  },
  {
    img: "/img/menu/images/PID_default_04.png",
    selected_img: "/img/menu/images/PID_default_selected_04.png",
    name: "form",
    default: "pill_type",
    value: "제형",
  },
  {
    img: "/img/menu/images/PID_default_05.png",
    selected_img: "/img/menu/images/PID_default_selected_05.png",
    name: "scoring",
    default: "line",
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
