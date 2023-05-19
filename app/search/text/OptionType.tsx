import { IPillTypeInfo } from "./Options";
import { Field, useFormContext } from "react-hook-form";
import Image from "next/image";

const OptionType = ({
  OptionType,
  onChange,
  value,
}: {
  OptionType: IPillTypeInfo[];
  onChange: (...event: any[]) => void;
  value: string;
}) => {
  const { register } = useFormContext();
  return (
    <div className="flex justify-between">
      {OptionType.map((type: IPillTypeInfo) => (
        <div className="flex">
          <input
            type="radio"
            id={type.name}
            className="hidden peer"
            value={type.value}
            checked={value == type.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <label
            htmlFor={type.name}
            key={type.name}
            className="flex justify-center items-center p-1 cursor-pointer rounded-sm border border-gray-200 peer-checked:border-blue-500 hover:text-gray-600 hover:bg-gray-100"
          >
            {type.img.length > 0 ? (
              <Image
                src={`/img/${type.img}.jpg`}
                alt={type.value}
                width={48}
                height={48}
              />
            ) : (
              <span className="w-12 h-12 flex justify-center items-center">
                기타
              </span>
            )}
          </label>
        </div>
      ))}
    </div>
  );
};
export default OptionType;
