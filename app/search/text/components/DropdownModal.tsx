"use client";
import Image from "next/image";
import { useFormContext, useForm } from "react-hook-form";
import {
  NewShapeType,
  NewColorType,
  NewFormType,
  NewScoringType,
  INewPillInfo,
} from "../types/Options";

const DropdownModal = ({ index }: { index: number }) => {
  const { register, getValues } = useFormContext();
  const CategoryList = [
    NewShapeType,
    NewColorType,
    NewFormType,
    NewScoringType,
  ];
  const CategoryIndex = ["shape", "color", "pill_type", "line"];
  return (
    <div
      className={
        index == 0
          ? "flex w-[280px] p-2 gap-2 border-2 border-gray-300 rounded-lg bg-white absolute bottom-[-66px] z-10"
          : index < 3
          ? "inline-grid grid-cols-8 p-2 gap-2 border-2 border-gray-300 rounded-lg bg-white absolute bottom-[-106px] z-10 min-w-max"
          : "inline-grid grid-cols-4 p-2 gap-2 border-2 border-gray-300 rounded-lg bg-white absolute bottom-[-106px] z-10 min-w-max"
      }
    >
      {index !== 0 ? (
        CategoryList[index - 1].map((type: INewPillInfo) => (
          <div
            // type="submit"
            key={type.name}
            className={
              getValues(type.default) == type.value
                ? "rounded-lg bg-gray-300 w-20 h-20"
                : "rounded-lg bg-gray-200 w-20 h-20"
            }
          >
            <input
              {...register(CategoryIndex[index - 1])}
              type="radio"
              className="hidden peer"
              value={type.value}
              // checked={getValues(CategoryIndex[index - 1]) == type.value}
              id={type.name}
            />
            <label
              htmlFor={type.name}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              {getValues(type.default) == type.value ? (
                <>
                  <Image
                    src={type.selected_img}
                    width={60}
                    height={60}
                    alt={type.value}
                  />
                  <div className="flex text-center text-sm text-blue-900 font-semibold pb-2">
                    {type.value == "-" ? "없음" : type.value}
                  </div>
                </>
              ) : (
                <>
                  <Image
                    src={type.img}
                    width={60}
                    height={60}
                    alt={type.value}
                  />
                  <div className="flex text-center text-sm text-gray-500 pb-2">
                    {type.value == "-" ? "없음" : type.value}
                  </div>
                </>
              )}
            </label>
          </div>
        ))
      ) : (
        <div className="flex justify-between items-center text-center w-full gap-2">
          <input
            {...register("char_front")}
            type="text"
            placeholder="앞면 각인 글자"
            className="border border-gray-300 bg-gray-100 text-gray-900 focus:ring-slate-400 focus:border-gray-400 p-2 w-5/6 rounded-lg"
          />
          <button
            type="submit"
            className="flex justify-center items-center text-gray-900 border-1 bg-gray-300 rounded-lg cursor-pointer h-full w-20 border-gray-400"
          >
            검색
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownModal;
