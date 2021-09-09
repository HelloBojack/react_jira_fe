import { useCallback, useEffect, useState } from "react";
import { useMountedRef } from "./hooks";

export const useAsync = <T>(
  asyncFn: (params?: any) => Promise<T>,
  immediate = false
) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState<null>();
  const [error, setError] = useState<null>();
  const [loading, setLoading] = useState(false);

  const mountedRef = useMountedRef();
  const execute = useCallback(
    (params?) => {
      setStatus("pending");
      setLoading(true);
      setValue(null);
      setError(null);
      return asyncFn(params)
        .then((response: any) => {
          if (mountedRef.current) {
            setValue(response);
            setLoading(false);
            setStatus("success");
          }
        })
        .catch((error: any) => {
          setError(error);
          setLoading(false);
          setStatus("error");
        });
    },
    [asyncFn, mountedRef]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    execute,
    status,
    value,
    loading,
    error,
  };
};
