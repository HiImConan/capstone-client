"use client";
import { IPillTypeInfo } from "../types/Options";
import Image from "next/image";

const DropdownModal = ({
  OptionType,
  onChange,
  value,
}: {
  OptionType: IPillTypeInfo[];
  onChange: (...event: any[]) => void;
  value: string;
}) => {
  return (
    <div className="flex w-full p-4 gap-2 border-2 border-gray-300 rounded-lg bg-white">
      {OptionType.map((type: IPillTypeInfo) => (
        <div key={type.name} className="rounded-lg bg-gray-200 w-20 h-20">
          <input
            type="radio"
            id={type.name}
            className="hidden"
            value={type.value}
          />
          <label
            htmlFor={type.name}
            className="flex flex-col justify-center items-center"
          >
            <Image src={type.img} width={60} height={60} alt={type.value} />
            <div className="flex text-center text-sm text-gray-500">
              {type.value}
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default DropdownModal;
