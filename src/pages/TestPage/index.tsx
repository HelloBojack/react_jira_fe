import { useCallback, useMemo, useState } from "react";
import ChildComp from "./ChildComp";

export const TestPage = () => {
  const [name, setname] = useState("bojack");
  const person = useMemo(() => ({ name }), [name]);
  const [cnt, setcnt] = useState(0);
  const toChild = useCallback(() => {
    console.log(123);
    setname("k");
  }, []);
  return (
    <>
      <button
        onClick={() => {
          setcnt(cnt + 1);
        }}
      >
        button
      </button>
      <div>{cnt}</div>
      <ChildComp person={person} toChild={toChild}></ChildComp>
    </>
  );
};
