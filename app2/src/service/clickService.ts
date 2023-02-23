import { Emitter, emitter } from "core/_types";
import { createContext } from "react";

export const makeClickService = () => ({
  count: emitter.of(0),
  click: emitter.of<void>(undefined),
});

export type ClickService = {
  count: Emitter<number>;
  click: Emitter<void>;
};

export const clickServiceContext = createContext(null as any as ClickService);
