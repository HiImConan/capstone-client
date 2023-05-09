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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("text", { required: true })} type="text" />
        <input {...register("text2", { required: true })} type="text" />

        {SplitType.map((type: ISplitType, idx: number) => (
          <>
            <label htmlFor={type.name} key={idx}>
              {typeof type.img == "string" ? (
                <Image
                  src={`/img/line/${type.img}.jpg`}
                  alt={type.value}
                  width={50}
                  height={50}
                />
              ) : (
                "기타"
              )}
            </label>
            <input
              {...register("split-type", { required: true })}
              type="radio"
              id={type.name}
            />
          </>
        ))}

        <input {...register("formulation", { required: true })} type="radio" />
        <input {...register("shape", { required: true })} type="radio" />
        <input {...register("color", { required: true })} type="checkbox" />
        <input type="submit" />
      </form>
    </>
  );
};

export default TextPage;
