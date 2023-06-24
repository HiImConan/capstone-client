"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FILE_SIZE_MAX_LIMIT,
  ALLOW_FILE_EXTENSION,
  fileExtensionValid,
} from "./utils/FileValidationCheck";
import Loading from "@/app/loading";
import { InternalServerError } from "@/app/lib/exceptions";

const MOCK_DATA = [
  {
    success: true,
    name: "타이레놀8시간이알서방정(아세트아미노펜)",
    id: "202200407",
    pill_img: "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1OKRXo9l4DN",
  },
  {
    success: true,
    name: "타이레놀8시간이알서방정(아세트아미노펜)",
    id: "202200407",
    pill_img: "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1OKRXo9l4DN",
  },
  {
    success: true,
    name: "타이레놀8시간이알서방정(아세트아미노펜)",
    id: "202200407",
    pill_img: "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1OKRXo9l4DN",
  },
  {
    success: true,
    name: "타이레놀8시간이알서방정(아세트아미노펜)",
    id: "202200407",
    pill_img: "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1OKRXo9l4DN",
  },
  {
    success: true,
    name: "타이레놀8시간이알서방정(아세트아미노펜)",
    id: "202200407",
    pill_img: "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1OKRXo9l4DN",
  },
];

const PhotoPage = () => {
  const [front, setFront] = useState<string>("");
  const [back, setBack] = useState<string>("");
  const [frontFile, setFrontFile] = useState<File>();
  const [backFile, setBackFile] = useState<File>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [openModal, setOpenModal] = useState<Boolean>(true);

  const frontInput = useRef<HTMLInputElement>(null);
  const backInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // 이미지 앞뒷면 세터
  const handleFrontImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];

    if (!file) return;
    if (!fileExtensionValid(file)) {
      e.target.value = "";
      alert(
        `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`
      );
      return;
    }
    if (file.name == backFile?.name) {
      e.target.value = "";
      alert(`같은 사진은 중복해서 업로드할 수 없습니다.`);
      return;
    }
    if (file.size > FILE_SIZE_MAX_LIMIT) {
      e.target.value = "";
      alert("업로드 가능한 최대 용량은 5MB입니다. ");
      return;
    }
    const url = URL.createObjectURL(file);

    setFront(url);
    setFrontFile(file);
  };
  const handleBackImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];

    if (!file) return;
    if (!fileExtensionValid(file)) {
      e.target.value = "";
      alert(
        `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`
      );
      return;
    }
    if (file.name == frontFile?.name) {
      e.target.value = "";
      alert(`같은 사진은 중복해서 업로드할 수 없습니다.`);
      return;
    }
    if (file.size > FILE_SIZE_MAX_LIMIT) {
      e.target.value = "";
      alert("업로드 가능한 최대 용량은 5MB입니다. ");
      return;
    }
    const url = URL.createObjectURL(file);

    setBack(url);
    setBackFile(file);
  };

  const uploadFiles = async () => {
    const formData = new FormData();
    {
      frontFile && formData.append("img", frontFile);
    }
    {
      backFile && formData.append("img", backFile);
    }
    console.log(formData.getAll("img"));

    setLoading(true);

    const res = await fetch("https://find-my-pills.shop/upload", {
      method: "POST",
      body: formData, // header > content-type을 설정하면 전송이 제대로 이뤄지지 않음.
    });

    const response = await res.json();
    if (res.status === 200) {
      console.log(response);
      window.URL.revokeObjectURL(front); // 메모리 누수 방지
      window.URL.revokeObjectURL(back);
      const resObj = JSON.stringify(response);
      window.localStorage.setItem("res", resObj);
      router.push("/result");
    } else {
      console.log(res.status);
      // throw new InternalServerError();
      // display mock data if server ends
      window.localStorage.setItem("res", JSON.stringify(MOCK_DATA));
      router.push("/result");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {openModal && (
            <div className="w-screen h-screen fixed top-0 bg-black/[0.5] z-10">
              <div className="z-20 w-full h-full p-24 relative flex justify-center items-center">
                <div className="relative w-full max-w-2xl max-h-full rounded-lg bg-white">
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      💡사진 업로드 시 유의사항
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setOpenModal(false)}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div>
                    <div className="gap-4 flex justify-center items-center text-center">
                      <div className="flex flex-col justify-center items-center gap-4">
                        <p className="text-base leading-relaxed text-black font-semibold dark:text-gray-400">
                          충분한 조명이 있는 깨끗한 배경에서 초점에 맞게 촬영해
                          주세요.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span className="leading-relaxed text-black font-semibold">
                            정방향(1:1)
                          </span>
                          에 맞추어 촬영해 주세요.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          알약이{" "}
                          <span className="leading-relaxed text-black font-semibold">
                            격자 가운데
                          </span>
                          에 위치하도록 촬영해 주세요.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          사진에{" "}
                          <span className="leading-relaxed text-black font-semibold">
                            그림자가 지지 않도록
                          </span>{" "}
                          주의해 주세요.
                        </p>
                      </div>
                      <Image
                        src="/img/assets/guideline.png"
                        width={180}
                        height={500}
                        alt="guideline"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4 border-t">
                    <button
                      onClick={() => setOpenModal(false)}
                      className="text-white bg-pink-400 cursor-pointer hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-lg px-5 py-2.5 text-center"
                    >
                      이해했습니다.
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center items-center h-full text-1xl">
            <div className="flex justify-center pb-12">
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
                  <label
                    htmlFor="frontImg"
                    className="flex flex-col items-center"
                  >
                    <div className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 relative">
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
                  <label
                    htmlFor="backImg"
                    className="flex flex-col items-center"
                  >
                    <div className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 relative">
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

            <div className="flex flex-col justify-center items-center p-3 px-4 bg-gray-200  border-2 border-gray-300 rounded-lg">
              <span className="text-sm text-gray-800 pb-2">
                알고 싶은 약의 앞/뒷면을
                <span className="font-semibold text-lg">
                  {" "}
                  정방향으로 정렬하여{" "}
                </span>
                촬영한 뒤 사진을 업로드해주세요.
              </span>

              <span className="text-sm text-gray-800">
                첨부 가능한 사진의 용량은 최대
                <span className="font-semibold text-lg"> 5MB </span>
                입니다.
              </span>
            </div>

            <button
              type="button"
              className="text-white disabled:bg-gray-300 disabled:cursor-not-allowed bg-blue-400 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mt-6"
              disabled={front.length < 1 || back.length < 1}
              onClick={uploadFiles}
            >
              사진 업로드하기
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PhotoPage;
