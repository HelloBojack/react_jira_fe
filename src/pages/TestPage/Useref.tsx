// import { Button, Input } from "antd";
import { useEffect, useRef, useState } from "react";

export const Useref = () => {
  const [count, setCount] = useState(0);

  const reRender = useReRender();
  if (reRender) {
    console.log("后续渲染");
  } else {
    console.log("首次渲染");
  }

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

function useReRender() {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = true;
  });
  return ref.current;
}
