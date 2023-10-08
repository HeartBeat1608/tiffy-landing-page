import { useState } from "react";

const useMergeState = <T extends object>(initial: T) => {
  const [state, setState] = useState(initial);

  const mergeState = (patch: Partial<T>) => {
    setState((prevState) => ({
      ...prevState,
      ...patch,
    }));
  };

  return [state, mergeState] as const;
};

export default useMergeState;
