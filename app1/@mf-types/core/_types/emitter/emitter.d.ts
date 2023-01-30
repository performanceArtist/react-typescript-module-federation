export type Emitter<D> = {
    on: (callback: (data: D) => void) => () => void;
    off: (callback: (data: D) => void) => void;
    emit: (data: D) => void;
    get: () => D;
};
declare function combineT<A, B>(a: Emitter<A>, b: Emitter<B>): Emitter<[A, B]>;
declare function combineT<A, B, C>(a: Emitter<A>, b: Emitter<B>, c: Emitter<C>): Emitter<[A, B, C]>;
declare function combineT<A, B, C, D>(a: Emitter<A>, b: Emitter<B>, c: Emitter<C>, d: Emitter<D>): Emitter<[A, B, C, D]>;
declare function combineT<A, B, C, D, F>(a: Emitter<A>, b: Emitter<B>, c: Emitter<C>, d: Emitter<D>, f: Emitter<F>): Emitter<[A, B, C, D, F]>;
declare function combineT<A, B, C, D, F, G>(a: Emitter<A>, b: Emitter<B>, c: Emitter<C>, d: Emitter<D>, f: Emitter<F>, g: Emitter<G>): Emitter<[A, B, C, D, F, G]>;
export declare const emitter: {
    of: <D>(initialValue: D) => {
        on: (callback: (data: D) => void) => () => void;
        off: (callback: (data: D) => void) => void;
        emit: (data: D) => void;
        get: () => D;
    };
    map: <A, B>(f: (a: A) => B) => (e: Emitter<A>) => Emitter<B>;
    combineT: typeof combineT;
    chain: <A_1, B_1>(f: (value: A_1) => Emitter<B_1>) => (fa: Emitter<A_1>) => Emitter<B_1>;
};
export {};
