"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface ISplitType {
  img: string | null;
  name: string;
  value: string;
}

const SplitType: ISplitType[] = [
  {
    img: "line01",
    name: "line-none",
    value: "none",
  },
  {
    img: "line02",
    name: "line-plus",
    value: "plus",
  },
  {
    img: "line03",
    name: "line-minus",
    value: "minus",
  },
  {
    img: "",
    name: "line-other",
    value: "other",
  },
];

const TextPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));
  // data type 정해야 함

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center flex-col"
      >
        <input {...register("char_front", { required: true })} type="text" />
        <input {...register("char_back", { required: true })} type="text" />

        <div className="flex justify-between">
          {SplitType.map((type: ISplitType, idx: number) => (
            <label htmlFor={type.name} key={idx}>
              {typeof type.img == "string" ? (
                <Image
                  src={`/img/line/${type.img}.jpg`}
                  alt={type.value}
                  width={50}
                  height={50}
                />
              ) : (
                <span>기타</span>
              )}
              <input
                {...register("split-type", { required: true })}
                type="radio"
                id={type.name}
                style={{ display: "none" }}
              />
            </label>
          ))}
        </div>

        <input {...register("pill_type", { required: true })} type="radio" />
        <input {...register("shape", { required: true })} type="radio" />
        <input {...register("color", { required: true })} type="checkbox" />
        <input type="submit" />
      </form>
    </>
  );
};

export default TextPage;
