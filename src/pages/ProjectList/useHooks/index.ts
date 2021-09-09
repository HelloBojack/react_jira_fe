import { useHttp } from "utils/http";
import { useAsync } from "utils/use_async";

export const useEditProject = () => {
  const { patch } = useHttp();
  const { execute, ...restResults } = useAsync((item) =>
    patch(`projects/${item.id}`, item)
  );
  return { execute, ...restResults };
};
