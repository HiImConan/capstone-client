export interface IPillTypeInfo {
  img: string;
  name: string;
  value: string;
}

export const LineType: IPillTypeInfo[] = [
  {
    img: "line/line01",
    name: "line-none",
    value: "none",
  },
  {
    img: "line/line02",
    name: "line-plus",
    value: "plus",
  },
  {
    img: "line/line03",
    name: "line-minus",
    value: "minus",
  },
  {
    img: "",
    name: "line-other",
    value: "other",
  },
];

export const PillType: IPillTypeInfo[] = [
  {
    img: "pill-type/type01",
    name: "type-tablet",
    value: "tablet",
  },
  {
    img: "pill-type/type02",
    name: "type-hard",
    value: "hard",
  },
  {
    img: "pill-type/type03",
    name: "type-soft",
    value: "soft",
  },
  {
    img: "",
    name: "type-other",
    value: "other",
  },
];
export const ShapeType: IPillTypeInfo[] = [
  {
    img: "shape/shape01",
    name: "shape-circle",
    value: "circle",
  },
  {
    img: "shape/shape02",
    name: "shape-ellipse",
    value: "ellipse",
  },
  {
    img: "shape/shape03",
    name: "shape-half-circle",
    value: "half-circle",
  },
  {
    img: "shape/shape04",
    name: "shape-triangle",
    value: "triangle",
  },
  {
    img: "shape/shape05",
    name: "shape-rectangle",
    value: "rectangle",
  },
  {
    img: "shape/shape06",
    name: "shape-diamond",
    value: "diamond",
  },
  {
    img: "shape/shape07",
    name: "shape-long",
    value: "long",
  },
  {
    img: "shape/shape08",
    name: "shape-hexagon",
    value: "hexagon",
  },
  {
    img: "shape/shape09",
    name: "shape-octagon",
    value: "octagon",
  },
  {
    img: "",
    name: "shape-other",
    value: "other",
  },
];

interface IColor {
  name: string;
}

export const ColorType: IColor[] = [
  {
    name: "white",
  },
  {
    name: "yellow",
  },
  {
    name: "orange",
  },
  {
    name: "pink",
  },
  {
    name: "red",
  },
  {
    name: "brown",
  },
  {
    name: "lightgreen",
  },
  {
    name: "green",
  },
  {
    name: "turquoise",
  },
  {
    name: "blue",
  },
  {
    name: "navy",
  },
  {
    name: "wine",
  },
  {
    name: "purple",
  },
  {
    name: "gray",
  },
  {
    name: "black",
  },
  {
    name: "transparent",
  },
  {
    name: "",
  },
];
