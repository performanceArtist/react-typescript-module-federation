import { Emitter } from "core/_types";
export declare type AppDeps = {
    app2Count: Emitter<number>;
    app2Click: Emitter<void>;
};
export declare const mockDeps: AppDeps;
