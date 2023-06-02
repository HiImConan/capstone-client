"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>서버와의 통신에 오류가 생겼습니다.</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.back()
        }
      >
        다시 시도해주세요.
      </button>
    </div>
  );
}
