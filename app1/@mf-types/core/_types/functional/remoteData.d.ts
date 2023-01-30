export type Pending = {
    type: 'pending';
};
export type Initial = {
    type: 'initial';
};
export type RemoteDataError<E> = {
    type: 'error';
    error: E;
};
export type Success<T> = {
    type: 'success';
    data: T;
};
export type RemoteData<E, T> = Success<T> | RemoteDataError<E> | Pending | Initial;
declare function combineT<E, A, B>(a: RemoteData<E, A>, b: RemoteData<E, B>): RemoteData<E, [A, B]>;
declare function combineT<E, A, B, C>(a: RemoteData<E, A>, b: RemoteData<E, B>, c: RemoteData<E, C>): RemoteData<E, [A, B, C]>;
declare function combineT<E, A, B, C, D>(a: RemoteData<E, A>, b: RemoteData<E, B>, c: RemoteData<E, C>, d: RemoteData<E, D>): RemoteData<E, [A, B, C, D]>;
declare function combineT<E, A, B, C, D, F>(a: RemoteData<E, A>, b: RemoteData<E, B>, c: RemoteData<E, C>, d: RemoteData<E, D>, f: RemoteData<E, F>): RemoteData<E, [A, B, C, D, F]>;
declare function combineT<E, A, B, C, D, F, G>(a: RemoteData<E, A>, b: RemoteData<E, B>, c: RemoteData<E, C>, d: RemoteData<E, D>, f: RemoteData<E, F>, g: RemoteData<E, G>): RemoteData<E, [A, B, C, D, F, G]>;
export declare const remoteData: {
    initial: Initial;
    pending: Pending;
    makeError: <E>(error: E) => RemoteDataError<E>;
    makeSuccess: <T>(data: T) => Success<T>;
    map: <A, B>(f: (a: A) => B) => <E_1>(d: RemoteData<E_1, A>) => RemoteData<E_1, B>;
    mapLeft: <E_2, B_1>(f: (a: E_2) => B_1) => <T_1>(d: RemoteData<E_2, T_1>) => RemoteData<B_1, T_1>;
    combineT: typeof combineT;
    chain: <A_1, B_2, NE>(f: (a: A_1) => RemoteData<NE, B_2>) => <E_3>(d: RemoteData<E_3, A_1>) => RemoteData<NE | E_3, B_2>;
    fromPromise: <E_4>(toError: (input: unknown) => E_4) => <A_2>(p: Promise<A_2>) => Promise<RemoteData<E_4, A_2>>;
    fromLazyPromise: <E_5>(toError: (input: unknown) => E_5) => <A_3, I>(p: (input: I) => Promise<A_3>) => (input: I) => Promise<RemoteData<E_5, A_3>>;
    chainPromise: <E_6, A_4, B_3>(f: (a: A_4) => Promise<RemoteData<E_6, B_3>>) => (p: Promise<RemoteData<E_6, A_4>>) => Promise<RemoteData<E_6, B_3>>;
    fold: <E_7, T_2, A_5>(onInitial: () => A_5, onPending: () => A_5, onError: (e: E_7) => A_5, onSuccess: (data: T_2) => A_5) => (rd: RemoteData<E_7, T_2>) => A_5;
    getOrElse: <A_6>(def: A_6) => <E_8>(rd: RemoteData<E_8, A_6>) => A_6;
    exists: <A_7>(predicate: (value: A_7) => boolean) => <E_9>(rd: RemoteData<E_9, A_7>) => boolean;
};
export {};
