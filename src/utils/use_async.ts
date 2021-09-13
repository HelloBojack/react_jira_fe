import { useCallback, useEffect, useReducer } from "react";
import { useMountedRef } from "./hooks";

enum StatusType {
  idle = "idle",
  pending = "pending",
  success = "success",
  error = "error",
}

interface IState<T> {
  status: StatusType;
  value: T | null;
  error: Error | null;
  loading: boolean;
}

const initialState = {
  status: StatusType.idle,
  value: null,
  error: null,
  loading: false,
};

export const useAsync = <T>(
  asyncFn: (params?: any) => Promise<T>,
  immediate = false
) => {
  const [state, dispatch] = useReducer(
    (state: IState<T>, action: Partial<IState<T>>) => ({ ...state, ...action }),
    initialState
  );
  const { status, value, error, loading } = state;

  const mountedRef = useMountedRef();

  const setError = useCallback((error) => {
    dispatch({ status: StatusType.error, error, loading: false });
  }, []);

  const setValue = useCallback((value) => {
    dispatch({ status: StatusType.success, value, loading: false });
  }, []);
  const setInit = useCallback(
    () => dispatch({ status: StatusType.pending, loading: true }),
    []
  );

  const execute = useCallback(
    (params?) => {
      setInit();
      return asyncFn(params)
        .then((response: any) => {
          if (mountedRef.current) {
            setValue(response);
          }
        })
        .catch((error: any) => {
          setError(error);
        });
    },
    [asyncFn, mountedRef, setInit, setValue, setError]
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
