"use client";
import { useState, useEffect, useRef } from "react";

export const useModalVisible = () => {
  const [index, setIndex] = useState<number>(0);
  const [isImprintCol, setIsImprintCol] = useState<boolean>(false);
  const [isShapeCol, setIsShapeCol] = useState<boolean>(false);
  const [isColorCol, setIsColorCol] = useState<boolean>(false);
  const [isFormCol, setIsFormCol] = useState<boolean>(false);
  const [isScoringCol, setIsScoringCol] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement[] | HTMLFormElement[] | null[]>(
    []
  );
  const collapseState = [
    isImprintCol,
    isShapeCol,
    isColorCol,
    isFormCol,
    isScoringCol,
  ];

  const handleModalCollapse = (category: string) => {
    switch (category) {
      case "imprint":
        setIsImprintCol(true);
        setIsShapeCol(false);
        setIsColorCol(false);
        setIsFormCol(false);
        setIsScoringCol(false);
        setIndex(0);
        break;
      case "shape":
        setIsImprintCol(false);
        setIsShapeCol(true);
        setIsColorCol(false);
        setIsFormCol(false);
        setIsScoringCol(false);
        setIndex(1);
        break;
      case "color":
        setIsImprintCol(false);
        setIsShapeCol(false);
        setIsColorCol(true);
        setIsFormCol(false);
        setIsScoringCol(false);
        setIndex(2);
        break;
      case "form":
        setIsImprintCol(false);
        setIsShapeCol(false);
        setIsColorCol(false);
        setIsFormCol(true);
        setIsScoringCol(false);
        setIndex(3);
        break;
      case "scoring":
        setIsImprintCol(false);
        setIsShapeCol(false);
        setIsColorCol(false);
        setIsFormCol(false);
        setIsScoringCol(true);
        setIndex(4);
        break;
      default:
        setIsImprintCol(false);
        setIsShapeCol(false);
        setIsColorCol(false);
        setIsFormCol(false);
        setIsScoringCol(false);
        setIndex(0);
        break;
    }
  };

  const handleClickOutside = (e: Event) => {
    const current = componentRef.current[index];

    // 모달 창이 열려있고 이벤트 발생 지점이 form의 요소가 아닐 때만 모달을 꺼주도록 함
    if (current && !current.contains(e.target as Node)) {
      console.log(current);
      console.log(e.target);
      handleModalCollapse("");
    }
  };

  useEffect(() => {
    // 검색창 내외부 감지 함수
    // 여기서 formRef가 아닌 document에 이벤트리스너를 달아준 것은 외부 영역이 form의 여집합이기 때문
    window.addEventListener("click", handleClickOutside);
    return () => {
      // mousedown 이벤트리스너를 제거해줌으로서 메모리 누수 차단
      window.removeEventListener("click", handleClickOutside);
    };
  }, [index]);

  return {
    componentRef,
    collapseState,
    handleModalCollapse,
  };
};
