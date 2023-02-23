export type Emitter<D> = {
    on: (callback: (data: D) => void) => () => void;
    onCurrent: (callback: (data: D) => void) => () => void;
    off: (callback: (data: D) => void) => void;
    emit: (data: D) => void;
    modify: (f: (data: D) => D) => void;
    get: () => D;
};
export type EmitterValue<T> = T extends Emitter<infer V> ? V : never;
export declare const emitter: {
    of: <D>(initialValue: D) => {
        on: (callback: (data: D) => void) => () => void;
        onCurrent: (callback: (data: D) => void) => () => void;
        off: (callback: (data: D) => void) => void;
        emit: (data: D) => void;
        modify: (f: (data: D) => D) => void;
        get: () => D;
    };
    map: <A, B>(f: (a: A) => B) => (e: Emitter<A>) => Emitter<B>;
    combine: <T extends Emitter<any>[] | readonly Emitter<any>[]>(...es: T) => Emitter<{ [key in keyof T]: EmitterValue<T[key]>; }>;
    chain: <A_1, B_1>(f: (value: A_1) => Emitter<B_1>) => (fa: Emitter<A_1>) => Emitter<B_1>;
};
