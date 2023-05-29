import { IPillTypeInfo } from "../types/Options";
import Image from "next/image";

const RadioBox = ({
  OptionType,
  onChange,
  value,
}: {
  OptionType: IPillTypeInfo[];
  onChange: (...event: any[]) => void;
  value: string;
}) => {
  return (
    <div className="flex justify-start flex-wrap w-full text-sm">
      {OptionType.map((type: IPillTypeInfo) =>
        OptionType.length !== 18 ? (
          <div className="flex" key={type.name}>
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
              className="flex justify-center items-center p-1 cursor-pointer rounded-sm border border-gray-200 peer-checked:border-blue-500 peer-checked:border-2 hover:text-gray-600 hover:bg-gray-100"
            >
              <div className="w-12 h-12">
                {type.img.length > 0 ? (
                  <Image
                    src={`/img/${type.img}.jpg`}
                    alt={type.value}
                    width={48}
                    height={48}
                  />
                ) : (
                  <span className="w-12 h-12 flex justify-center items-center">
                    {type.value}
                  </span>
                )}
              </div>
            </label>
          </div>
        ) : (
          <div className="flex" key={type.name}>
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
              className={
                "flex justify-center items-center p-1 cursor-pointer rounded-sm border border-gray-200 peer-checked:border-blue-500 peer-checked:border-2"
              }
            >
              <div className="w-12 h-12">
                <div
                  className={type.name && `bg-${type.name}-400` + " h-3/5"}
                />
                <div className="flex justify-center items-center">
                  {type.value}
                </div>
              </div>
            </label>
          </div>
        )
      )}
    </div>
  );
};
export default RadioBox;
