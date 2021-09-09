import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CleanObjectNull } from "utils";

export const useUrlQueryParams = <T extends string>(keys: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(() => {
      return CleanObjectNull(
        keys.reduce((pre, key: string) => {
          return { ...pre, [key]: searchParams.get(key) };
        }, {})
      ) as { [key in T]: string };
    }, [searchParams, keys]),
    setSearchParams,
  ] as const;
};
