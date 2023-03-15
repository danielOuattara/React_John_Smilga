import { useState } from "react";

export default function useToggle(defaultArg) {
  const [show, setShow] = useState(defaultArg);

  function toggleState() {
    setShow(!show);
  }

  return {
    show,
    toggleState,
  };
}
