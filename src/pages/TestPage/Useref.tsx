import { Button, Input } from "antd";
import { useEffect, useRef, useState } from "react";

export const Useref = () => {
  const [cnt, setCnt] = useState(0);
  const IntRef = useRef<Input>(null);
  useEffect(() => {
    console.log();
  }, [cnt]);
  return (
    <>
      <div>{cnt}</div>
      <Input ref={IntRef}></Input>
      <Button
        onClick={() => {
          setCnt(cnt + 1);
          IntRef.current?.focus();
        }}
      >
        add
      </Button>
    </>
  );
};
