import { useCallback, useState } from "react";

export const useAsync = <T>(asyncFn: () => Promise<T>) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState<null>();
  const [error, setError] = useState<null>();
  const [loading, setLoading] = useState(false);
  const execute = useCallback(() => {
    setStatus("pending");
    setLoading(true);
    setValue(null);
    setError(null);
    return asyncFn()
      .then((response: any) => {
        setValue(response);
        setLoading(false);
        console.log(response);
        setStatus("success");
      })
      .catch((error: any) => {
        setError(error);
        setLoading(false);
        setStatus("error");
      });
  }, [asyncFn]);

  return {
    execute,
    status,
    value,
    loading,
    error,
  };
};
