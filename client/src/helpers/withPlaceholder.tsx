import React, { Suspense } from "react";

import { Spinner } from "../components/Spinner";

export function withPlaceholder<T>(
  Component: React.ComponentType<T>,
  Placeholder: React.ComponentType<any> = Spinner
) {
  return (props: T) => {
    return (
      <Suspense fallback={<Placeholder />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
