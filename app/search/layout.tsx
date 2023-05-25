"use client";

import Error from "../result/error";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "react-error-boundary";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default SearchLayout;
