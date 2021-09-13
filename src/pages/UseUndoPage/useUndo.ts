import { useCallback, useReducer } from "react";

enum IActionAype {
  Undo = "UNDO",
  Set = "SET",
  ReSet = "RESET",
  ReUndo = "REUNDO",
}

interface IAction<T> {
  type: IActionAype;
  newPresent?: T;
}
interface IState<T> {
  past: T[];
  present: T;
  future: T[];
}
const iniState = {
  past: [],
  present: null,
  future: [],
};
const reducer = <T>(state: IState<T>, action: IAction<T>) => {
  const { past, present, future } = state;
  switch (action.type) {
    case IActionAype.Set:
      return {
        past: [...past, present],
        present: action.newPresent,
        future,
      };
    case IActionAype.ReSet:
      return {
        past: [],
        present: action.newPresent,
        future: [],
      };
    case IActionAype.Undo:
      return {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [...future, present],
      };
    case IActionAype.ReUndo:
      return {
        past: [...past, present],
        present: future[future.length - 1],
        future: future.slice(0, future.length - 1),
      };
  }
};

const useUndo = <T>(initPresent: T) => {
  const [state, dispatch] = useReducer(reducer, {
    ...iniState,
    present: initPresent,
  }) as [IState<T>, React.Dispatch<IAction<T>>];

  const set = useCallback(
    (newPresent) => dispatch({ type: IActionAype.Set, newPresent }),
    []
  );
  const reset = useCallback(
    (newPresent) => dispatch({ type: IActionAype.ReSet, newPresent }),
    []
  );
  const undo = useCallback(() => dispatch({ type: IActionAype.Undo }), []);
  const canUndo = state.past.length === 0;
  const Reundo = useCallback(() => dispatch({ type: IActionAype.ReUndo }), []);
  const canReUndo = state.future.length === 0;
  return { state, set, reset, undo, canUndo, Reundo, canReUndo };
};

export default useUndo;
