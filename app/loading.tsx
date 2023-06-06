"use client";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-2">
      <div className="text-3xl tracking-tight font-extrabold text-primary-600">
        잠시만 기다려주세요.
      </div>
      <Oval
        color="#2590EB"
        secondaryColor="#93c5fd"
        height={50}
        width={50}
        visible={true}
        strokeWidth={5}
      />
    </div>
  );
};
export default Loading;
