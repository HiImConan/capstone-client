"use client";

import {
  useForm,
  FormProvider,
  Controller,
  FieldValues,
} from "react-hook-form";
import RadioBox from "@/app/search/text/components/RadioBox";
import {
  LineType,
  PillType,
  ShapeType,
  ColorType,
  NewScoringType,
  NewFormType,
  NewShapeType,
  NewColorType,
  NewMenuType,
  ISearchResult,
} from "./types/Options";
import { RefObject, useState } from "react";
import ResultCard from "@/app/search/text/components/ResultCard";
import Loading from "@/app/loading";
import DropdownModal from "./components/DropdownModal";
import Image from "next/image";
import { useComponentVisible } from "./hooks/useComponentVisible";

const TextPage = () => {
  const [searchResult, setSearchResult] = useState<ISearchResult[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const {
    componentRef: modalRef,
    isImprintCol,
    isShapeCol,
    isColorCol,
    isFormCol,
    isScoringCol,
    handleModalCollapse,
  } = useComponentVisible();

  const methods = useForm({
    defaultValues: {
      char_front: "",
      char_back: "",
      color: "전체",
      shape: "전체",
      pill_type: "전체",
      line: "전체",
    },
  });
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    setLoading(true);
    setIsCollapsed(true);
    const res = await fetch("https://find-my-pills.shop/search/text", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    setSearchResult(result);
    setLoading(false);
  };

  return (
    <div className="w-3/5 mt-4">
      {/* <FormProvider {...methods}>
        <div
          className={
            isCollapsed
              ? "relative border border-gray-200 rounded-lg mb-4 bg-gray-100"
              : "relative border border-gray-200 shadow-md rounded-lg mb-4"
          }
        >
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-11/12 p-5 mx-auto"
          >
            <div className="w-full flex flex-col justify-center items-center select-none">
              <div
                className={
                  isCollapsed
                    ? "p-5 text-2xl tracking-tight font-semibold text-left text-gray-900 mb-4"
                    : "p-5 text-2xl tracking-tight font-semibold text-left text-gray-900"
                }
              >
                알약 직접 검색하기
                <div className="flex justify-between items-center gap-12 sm:gap-8">
                  <p className="mt-1 text-lg font-normal text-gray-400">
                    찾고 싶은 알약의 각인, 색상, 모양, 제형 그리고 분할선 정보를
                    입력하세요. 하나의 정보만 입력해도 검색이 되지만, 여러 개를
                    입력할수록 정확한 결과를 얻을 수 있습니다.
                  </p>
                  <svg
                    data-accordion-icon
                    className={
                      isCollapsed
                        ? "w-6 h-6 shrink-0"
                        : "w-6 h-6 rotate-180 shrink-0"
                    }
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setIsCollapsed((prev) => !prev);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                className={
                  isCollapsed
                    ? "hidden"
                    : "w-full rounded-lg border border-gray-100 p-4"
                }
              >
                <div className="flex justify-start items-center gap-1 my-1">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase font-semibold rounded-t-lg">
                    각인
                  </div>
                  <div className="flex justify-start items-center gap-2 w-full">
                    <input
                      {...methods.register("char_front")}
                      type="text"
                      placeholder="앞면 각인 글자"
                      className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-400 focus:border-blue-400 block w-full p-3"
                    />
                    <input
                      {...methods.register("char_back")}
                      type="text"
                      placeholder="뒷면 각인 글자"
                      className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-400 focus:border-blue-400 block w-full p-3"
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center gap-1 my-1">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase  font-semibold">
                    색상
                  </div>
                  <Controller
                    name="color"
                    control={methods.control}
                    render={({ field: { onChange, value } }) => (
                      <RadioBox
                        OptionType={ColorType}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start items-center gap-1 my-1">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase  font-semibold">
                    모양
                  </div>
                  <Controller
                    name="shape"
                    control={methods.control}
                    render={({ field: { onChange, value } }) => (
                      <RadioBox
                        OptionType={ShapeType}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start items-center gap-1 my-1">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase  font-semibold">
                    제형
                  </div>
                  <Controller
                    name="pill_type"
                    control={methods.control}
                    render={({ field: { onChange, value } }) => (
                      <RadioBox
                        OptionType={PillType}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </div>
                <div className="flex justify-start items-center gap-1 my-1">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase  font-semibold rounded-b-lg">
                    분할선
                  </div>
                  <Controller
                    name="line"
                    control={methods.control}
                    render={({ field: { onChange, value } }) => (
                      <RadioBox
                        OptionType={LineType}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </form>

          <button
            type="submit"
            className={
              isCollapsed
                ? "hidden"
                : "text-white disabled:bg-gray-300 disabled:cursor-not-allowed bg-blue-400 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mt-6"
            }
          >
            검색하기
          </button>
        </div>
      </FormProvider> */}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-11/12 p-5 mx-auto"
        >
          <div className="w-full flex gap-2 justify-center items-center select-none text-black bg-gray-300 relative">
            {NewMenuType.map((menu, i) => (
              <div
                key={menu.value}
                className="flex flex-col justify-center items-center w-24 h-24 p-4 border-2 border-gray-300 rounded-lg bg-gray-500/75 text-white text-sm hover:bg-gray-400"
                onClick={() => handleModalCollapse(menu.name)}
                ref={(element) => (modalRef!.current[i] = element)}
              >
                <Image src={menu.img} height={80} width={80} alt={menu.value} />
                <div>{menu.value}</div>
              </div>
            ))}
            <div
              className={
                isImprintCol
                  ? "flex justify-center items-center text-center text-black bg-gray-300 aboslute "
                  : "hidden"
              }
            >
              <div>
                <input
                  {...methods.register("char_front")}
                  type="text"
                  placeholder="앞면 각인 글자"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-400 focus:border-blue-400 block w-full p-3"
                />
              </div>
              <div>
                <input
                  {...methods.register("char_back")}
                  type="text"
                  placeholder="뒷면 각인 글자"
                  className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-400 focus:border-blue-400 block w-full p-3"
                />
              </div>
            </div>

            <div className={isShapeCol ? "absolute" : "hidden"}>
              <div>
                <Controller
                  name="shape"
                  control={methods.control}
                  render={({ field: { onChange, value } }) => (
                    <DropdownModal
                      OptionType={NewShapeType}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <div className={isColorCol ? "absolute" : "hidden"}>
              <div>
                <Controller
                  name="color"
                  control={methods.control}
                  render={({ field: { onChange, value } }) => (
                    <DropdownModal
                      OptionType={NewColorType}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <div className={isFormCol ? "absolute" : "hidden"}>
              <div>
                <Controller
                  name="pill_type"
                  control={methods.control}
                  render={({ field: { onChange, value } }) => (
                    <DropdownModal
                      OptionType={NewFormType}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <div className={isScoringCol ? "absolute" : "hidden"}>
              <div>
                <Controller
                  name="line"
                  control={methods.control}
                  render={({ field: { onChange, value } }) => (
                    <DropdownModal
                      OptionType={NewScoringType}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
      {loading ? (
        <section
          className={
            isCollapsed
              ? "h-3/5 border border-gray-300 shadow-md rounded-lg"
              : "h-3/5 border border-gray-200 rounded-lg"
          }
        >
          <Loading />
        </section>
      ) : (
        <ResultCard searchResult={searchResult} />
      )}
    </div>
  );
};

export default TextPage;
