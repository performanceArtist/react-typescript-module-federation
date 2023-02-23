import React, { useEffect, useState } from "react";
import { Emitter } from "./emitter";

export const useEmitter = <A>(b: Emitter<A>) => {
  const [value, setValue] = useState(b.get());

  useEffect(() => b.on((value) => setValue(value)), [b]);

  return value;
};
