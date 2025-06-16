import { useState } from "react";

export default function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const open = () => setState(true);
  const close = () => setState(false);
  const toggle = () => setState((prev) => !prev);
  return { state, open, close, toggle };
}
