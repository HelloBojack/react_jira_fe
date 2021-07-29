import { useState, useEffect } from "react";

export const CleanObjectNull = (obj: object) => {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
};

export const useDebounce = (value: any, delay: number) => {
  const [decounceValue, setDecounceValue] = useState(value);
  useEffect(() => {
    let timer = setTimeout(() => setDecounceValue(value), delay);
    // useEffect 中的 return ，在上一个useEffect 运行完之后运行
    return () => clearTimeout(timer);
  }, [value, delay]);
  return decounceValue;
};
