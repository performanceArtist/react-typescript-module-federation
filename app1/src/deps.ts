import { Emitter, emitter } from "core/_types";

export type AppDeps = {
  app2Count: Emitter<number>;
  app2Click: Emitter<void>;
};

export const mockDeps: AppDeps = {
  app2Count: emitter.of(0),
  app2Click: emitter.of<void>(undefined),
};
