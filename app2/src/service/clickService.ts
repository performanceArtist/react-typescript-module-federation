import { Emitter, emitter } from "core/_types";

export const clickService = {
  count: emitter.of(0),
  click: emitter.of<void>(undefined),
};

export type ClickService = {
  count: Emitter<number>;
  click: Emitter<void>;
};
