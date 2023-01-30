export type MaybeRecord<T> = {
    [key in keyof T]: T[key] | null;
};
export declare const record: {
    reduce: <Acc, A, K extends PropertyKey>(initial: Acc, f: (acc: Acc, cur: A, key: K) => Acc) => (r: Record<K, A>) => Acc;
    map: <A_1, B, K_1 extends PropertyKey>(f: (a: A_1, key: K_1) => B) => (r: Record<K_1, A_1>) => Record<K_1, B>;
    toPartial: <T extends MaybeRecord<any>>(r: T) => Partial<{ [key in keyof T]: Exclude<T[key], null>; }>;
};
