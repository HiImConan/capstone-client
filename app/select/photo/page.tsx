"use client";
import React, { useMemo, useRef } from "react";
import Image from "next/image";
import { useState } from "react";

const PhotoPage = () => {
  const [front, setFront] = useState<string>("");
  const [back, setBack] = useState<string>("");
  const frontInput = useRef<HTMLInputElement>(null);
  const backInput = useRef<HTMLInputElement>(null);

  // 이미지 앞뒷면 세터
  const handleFrontImage = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFront(url);
  };
  const handleBackImage = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setBack(url);
  };

  // 이미지 앞뒷면 미리보기
  const uploadFiles = async (file: string) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    console.log(res);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <Image
            src={front.length > 0 ? front : "/favicon.ico"}
            width={150}
            height={150}
            alt="유저 입력"
            onClick={() => frontInput.current?.click()}
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
          <label htmlFor="frontImg" className="flex justify-center">
            앞면
          </label>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src={back.length > 0 ? back : "/favicon.ico"}
            width={150}
            height={150}
            alt="유저 입력"
            onClick={() => frontInput.current?.click()}
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
          <label htmlFor="backImg" className="flex justify-center">
            뒷면
          </label>
        </div>
      </div>

      <span>알고 싶은 약의 앞뒷면을 각각 업로드해주세요.</span>

      <button>사진 업로드하기</button>
    </div>
  );
};

export default PhotoPage;
