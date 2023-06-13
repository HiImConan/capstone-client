"use client";
import React, { Suspense, useRef } from "react";
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
import { Button, Modal } from "flowbite-react";

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
      // setImgSearchResult(response);
      router.push("/result");
      setLoading(false);
    } else {
      console.log(res.status);
      throw new InternalServerError();
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Modal
            show={openModal === true}
            onClose={() => setOpenModal(false)}
            className="w-screen h-screen absolute inset-0"
          >
            <Modal.Header>사진 업로드 시 유의사항</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(false)}>I accept</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
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
