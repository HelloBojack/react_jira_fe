import { Button, Row } from "antd";
import useUndo from "./useUndo";

const UseUndoPage = () => {
  const { state, set, reset, undo, canUndo, Reundo, canReUndo } = useUndo(0);
  const { present: count } = state;
  return (
    <>
      <div>{count}</div>
      <Row>
        <Button onClick={() => set(count + 1)}>Add</Button>
        <Button onClick={() => set(count - 1)}>Sub</Button>
        <Button onClick={() => undo()} disabled={canUndo}>
          Undo
        </Button>
        <Button onClick={() => Reundo()} disabled={canReUndo}>
          Redo
        </Button>
        <Button onClick={() => reset(0)}>Reset</Button>
      </Row>
    </>
  );
};

export default UseUndoPage;
