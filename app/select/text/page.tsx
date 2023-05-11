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
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex justify-center items-center flex-col"
      >
        <input
          {...methods.register("char_front", { required: true, min: 1 })}
          type="text"
          placeholder="알약 앞면 각인 글자"
        />
        <input
          {...methods.register("char_back", { required: true, min: 1 })}
          type="text"
          placeholder="알약 뒷면 각인 글자"
        />

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

        <button type="submit" disabled={methods.formState.isSubmitting}>
          검색하기
        </button>
      </form>
    </FormProvider>
  );
};

export default TextPage;
