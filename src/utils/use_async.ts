import { useCallback, useState } from "react";

export const useAsync = <T>(asyncFn: () => Promise<T>) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState<null>();
  const [error, setError] = useState<null>();
  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);
    return asyncFn()
      .then((response: any) => {
        setValue(response);
        console.log(response);
        setStatus("success");
      })
      .catch((error: any) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFn]);

  return {
    execute,
    status,
    value,
    error,
  };
};
