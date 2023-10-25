import { useState } from "react";

export function useIncrement({ base = 0, max = Infinity }) {
  const [state, setState] = useState(base);
  return {
    count: state,
    increment: () => setState((number) => (number < max ? number + 1 : number)),
    decrement: () => setState((number) => (number < max ? number - 1 : number)),
  };
}
