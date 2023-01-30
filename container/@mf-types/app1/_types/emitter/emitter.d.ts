export declare type Emitter<D> = {
    on: (callback: (data: D) => void) => () => void;
    off: (callback: (data: D) => void) => void;
    emit: (data: D) => void;
    get: () => D;
};
export declare const makeEmitter: <D>(initialValue: D) => {
    on: (callback: (data: D) => void) => () => void;
    off: (callback: (data: D) => void) => void;
    emit: (data: D) => void;
    get: () => D;
};
