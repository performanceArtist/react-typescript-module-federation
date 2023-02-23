/// <reference types="react" />
import { Emitter } from "core/_types";
export declare const makeClickService: () => {
    count: {
        on: (callback: (data: number) => void) => () => void;
        onCurrent: (callback: (data: number) => void) => () => void;
        off: (callback: (data: number) => void) => void;
        emit: (data: number) => void;
        modify: (f: (data: number) => number) => void;
        get: () => number;
    };
    click: {
        on: (callback: (data: void) => void) => () => void;
        onCurrent: (callback: (data: void) => void) => () => void;
        off: (callback: (data: void) => void) => void;
        emit: (data: void) => void;
        modify: (f: (data: void) => void) => void;
        get: () => void;
    };
};
export declare type ClickService = {
    count: Emitter<number>;
    click: Emitter<void>;
};
export declare const clickServiceContext: import("react").Context<ClickService>;
