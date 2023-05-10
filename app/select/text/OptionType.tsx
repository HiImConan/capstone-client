import { IPillTypeInfo } from "./page.jsx";
import { useFormContext } from "react-hook-form";
import Image from "next/image";

const OptionType = ({ OptionType }: { OptionType: IPillTypeInfo[] }) => {
  const { register } = useFormContext();
  return (
    <div className="flex justify-between">
      {OptionType.map((type: IPillTypeInfo) => (
        <>
          <input
            {...register("split-type", {
              required: true,
              value: type.value,
            })}
            type="radio"
            id={type.name}
            className="hidden"
          />
          <label
            htmlFor={type.name}
            key={type.name}
            className="flex justify-center items-center p-1 cursor-pointer rounded-sm border border-gray-200 checked:border-blue-500 hover:text-gray-600 hover:bg-gray-100"
          >
            {type.img.length > 0 ? (
              <Image
                src={`/img/${type.img}.jpg`}
                alt={type.value}
                width={50}
                height={50}
              />
            ) : (
              <span>기타</span>
            )}
          </label>
        </>
      ))}
    </div>
  );
};
export default OptionType;
