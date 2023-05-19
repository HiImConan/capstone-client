"use client";
import { useForm, FormProvider, Controller } from "react-hook-form";
import OptionType from "./OptionType";
import { LineType, PillType, ShapeType } from "./Options";

const TextPage = () => {
  const methods = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));
  // data type 정해야 함

  return (
    <FormProvider {...methods}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/5">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full p-5">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white min-w-full">
              알약 직접 검색하기
              <p className="mt-1 text-sm font-normal text-gray-500">
                찾고 싶은 알약의 각인, 색상, 모양, 제형 그리고 분할선 정보를
                입력하세요. 하나의 정보만 입력해도 검색이 되지만, 여러 개를
                입력할 수록 정확한 결과를 얻을 수 있습니다.
              </p>
            </div>
            <div>
              <div className="flex justify-start items-center gap-1 h-16">
                <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase bg-gray-50 font-semibold rounded-t-lg">
                  각인
                </div>
                <div className="flex justify-start items-center">
                  <input
                    {...methods.register("char_front", {
                      min: 1,
                    })}
                    type="text"
                    placeholder="앞면 각인 글자"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div className="flex justify-start items-center">
                  <input
                    {...methods.register("char_back", {
                      min: 1,
                    })}
                    type="text"
                    placeholder="뒷면 각인 글자"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>
              <div className="flex justify-start items-center gap-1 h-16">
                <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase bg-gray-50 font-semibold ">
                  색상
                </div>
              </div>
              <div className="flex justify-start items-center gap-1 h-16">
                <div className="h-full w-24 flex justify-center items-center text-center text-gray-700 uppercase bg-gray-50 font-semibold">
                  모양
                </div>
                <Controller
                  name="shape"
                  control={methods.control}
                  render={({ field: { onChange, value } }) => (
                    <OptionType
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
                    <OptionType
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
                    <OptionType
                      OptionType={LineType}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            <button type="submit" onClick={onSubmit}>
              검색하기
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default TextPage;
