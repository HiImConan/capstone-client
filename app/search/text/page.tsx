"use client";

import {
  useForm,
  FormProvider,
  Controller,
  FieldValues,
} from "react-hook-form";
import RadioBox from "./RadioBox";
import {
  LineType,
  PillType,
  ShapeType,
  ColorType,
  ISearchResult,
} from "./Options";
import { useState } from "react";
import ResultCard from "./ResultCard";

const TextPage = () => {
  const [searchResult, setSearchResult] = useState<ISearchResult[] | []>([]);
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
    const res = await fetch("https://find-my-pills.shop/search/text", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    setSearchResult(result);
  };

  return (
    <>
      <FormProvider {...methods}>
        <div className="relative shadow-md sm:rounded-lg w-3/5">
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-full p-5"
          >
            <div className="w-full flex flex-col justify-center items-center">
              <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white min-w-full">
                알약 직접 검색하기
                <p className="mt-1 text-sm font-normal text-gray-400">
                  찾고 싶은 알약의 각인, 색상, 모양, 제형 그리고 분할선 정보를
                  입력하세요. 하나의 정보만 입력해도 검색이 되지만, 여러 개를
                  입력할 수록 정확한 결과를 얻을 수 있습니다.
                </p>
              </div>
              <div className="w-full">
                <div className="flex justify-start items-center gap-1 h-16">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase bg-gray-50 font-semibold rounded-t-lg">
                    각인
                  </div>
                  <div className="flex justify-start items-center gap-4 w-full">
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
                <div className="flex justify-start items-center gap-1 h-32">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase bg-gray-50 font-semibold">
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
                <div className="flex justify-start items-center gap-1 h-32">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase bg-gray-50 font-semibold">
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
                <div className="flex justify-start items-center gap-1 h-16">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase bg-gray-50 font-semibold">
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
                <div className="flex justify-start items-center gap-1 h-16">
                  <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase bg-gray-50 font-semibold rounded-b-lg">
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
              <button
                type="submit"
                className="text-white disabled:bg-gray-300 disabled:cursor-not-allowed bg-blue-400 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mt-6"
              >
                검색하기
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
      <ResultCard searchResult={searchResult} />
    </>
  );
};

export default TextPage;
