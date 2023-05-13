"use client";
import React, { useMemo, useRef } from "react";
import Image from "next/image";
import { useState } from "react";

const PhotoPage = () => {
  const [front, setFront] = useState<string>("");
  const [back, setBack] = useState<string>("");
  const [frontFile, setFrontFile] = useState<File>();
  const [backFile, setBackFile] = useState<File>();
  const frontInput = useRef<HTMLInputElement>(null);
  const backInput = useRef<HTMLInputElement>(null);

  // 이미지 앞뒷면 세터
  const handleFrontImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const file = (e.target.files as FileList)[0];
    console.log(file);
    if (!file) return;
    const url = URL.createObjectURL(file);
    console.log(url);
    setFront(url);
    setFrontFile(file);
    console.log(frontFile);
  };
  const handleBackImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    console.log(file);
    if (!file) return;
    const url = URL.createObjectURL(file);
    console.log(url);
    setBack(url);
    setBackFile(file);
    console.log(backFile);
  };

  // 이미지 앞뒷면 미리보기
  const uploadFiles = async () => {
    const formData = new FormData();
    {
      frontFile && formData.append("file", frontFile);
    }
    {
      backFile && formData.append("file", backFile);
    }
    console.log(formData.getAll("file"));

    const res = await fetch("http://3.37.14.192:3001/upload", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });
    console.log(res);
    window.URL.revokeObjectURL(front); // 메모리 누수 방지
    window.URL.revokeObjectURL(back);
  };

  return (
    <div className="flex flex-col justify-center items-center text-1xl">
      <div className="flex justify-center py-12">
        <div className="flex justify-center mr-5 relative w-64 h-64">
          {front.length > 0 ? (
            <div>
              <Image
                src={front}
                fill
                alt="유저 입력"
                onClick={() => frontInput.current?.click()}
                className="border-2 border-gray-300 rounded-lg cursor-pointer object-cover"
              />
              <input
                type="file"
                name="image_URL"
                id="frontImg"
                accept="image/*"
                style={{ display: "none" }}
                ref={frontInput}
                onChange={handleFrontImage}
              />
            </div>
          ) : (
            <label htmlFor="frontImg" className="flex flex-col items-center">
              <div className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5">
                  <Image
                    src="/img/assets/capsule.png"
                    width={150}
                    height={150}
                    alt="가이드라인"
                  />
                  <p className="mt-5 mb-2 text-sm text-gray-500">
                    <span className="font-semibold">알약 앞면</span>을
                    올려주세요.
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG</p>
                </div>
              </div>
              <input
                type="file"
                name="image_URL"
                id="frontImg"
                accept="image/*"
                style={{ display: "none" }}
                ref={frontInput}
                onChange={handleFrontImage}
              />
            </label>
          )}
        </div>
        <div className="flex justify-center ml-5 relative w-64 h-64">
          {back.length > 0 ? (
            <div>
              <Image
                src={back}
                fill
                alt="유저 입력"
                onClick={() => backInput.current?.click()}
                className="border-2 border-gray-300 rounded-lg cursor-pointer object-cover"
              />
              <input
                type="file"
                name="image_URL"
                id="backImg"
                accept="image/*"
                style={{ display: "none" }}
                ref={backInput}
                onChange={handleBackImage}
              />
            </div>
          ) : (
            <label htmlFor="backImg" className="flex flex-col items-center">
              <div className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5">
                  <Image
                    src="/img/assets/capsule.png"
                    width={150}
                    height={150}
                    alt="가이드라인"
                  />
                  <p className="mt-5 mb-2 text-sm text-gray-500">
                    <span className="font-semibold">알약 뒷면</span>을
                    올려주세요.
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG</p>
                </div>
              </div>
              <input
                type="file"
                name="image_URL"
                id="backImg"
                accept="image/*"
                style={{ display: "none" }}
                ref={backInput}
                onChange={handleBackImage}
              />
            </label>
          )}
        </div>
      </div>

      <span className="text-sm text-gray-800 pb-7">
        알고 싶은 약의 앞/뒷면을
        <span className="font-semibold text-lg"> 정방향으로 정렬하여 </span>
        촬영한 뒤 사진을 업로드해주세요.
      </span>

      <button
        type="button"
        className="text-white disabled:bg-gray-300 disabled:cursor-not-allowed bg-blue-400 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center"
        disabled={front.length < 1 || back.length < 1}
        onClick={uploadFiles}
      >
        사진 업로드하기
      </button>
    </div>
  );
};

export default PhotoPage;
