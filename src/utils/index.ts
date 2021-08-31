import { useState, useEffect, useRef } from "react";

export const CleanObjectNull = (obj: object) => {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
};

export const useDebounce = <T>(value: T, delay: number) => {
  const [decounceValue, setDecounceValue] = useState(value);
  useEffect(() => {
    let timer = setTimeout(() => setDecounceValue(value), delay);
    // useEffect 中的 return ，在上一个useEffect 运行完之后运行
    return () => clearTimeout(timer);
  }, [value, delay]);
  return decounceValue;
};

export const useArray = <T>(array: T[]) => {
  const [newArray, setnewArray] = useState(array);
  return {
    newArray,
    setnewArray,
    addItem: (item: T) => setnewArray([...newArray, item]),
    deleteItem: (index: number) => {
      let tempArray = [...newArray];
      tempArray.splice(index, 1);
      setnewArray(tempArray);
    },
    clearItem: () => setnewArray([]),
  };
};

export const useTitle = (title: string) => {
  const preTitle = useRef(document.title);
  useEffect(() => {
    document.title = title;
    let tempTitle = preTitle.current;

    return () => {
      document.title = tempTitle;
    };
    // eslint-disable-next-line
  }, [title]);
};
