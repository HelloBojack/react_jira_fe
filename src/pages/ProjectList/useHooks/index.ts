import { useHttp } from "utils/http";
import { useAsync } from "utils/use_async";
import { useCallback } from "react";

export const useEditProject = () => {
  const { patch } = useHttp();
  const { execute, ...restResults } = useAsync(
    useCallback((item) => patch(`projects/${item.id}`, item), [patch])
  );
  return { execute, ...restResults };
};
