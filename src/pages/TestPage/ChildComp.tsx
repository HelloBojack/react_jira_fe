import { memo } from "react";

export default memo(
  ({ person, toChild }: { person: { name: string }; toChild: () => void }) => {
    console.log("children init");
    return (
      <>
        <button onClick={() => toChild()}>toChild</button>
        <div>{person.name}</div>
      </>
    );
  }
);
