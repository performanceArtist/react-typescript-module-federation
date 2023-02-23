export type Emitter<D> = {
  on: (callback: (data: D) => void) => () => void;
  onCurrent: (callback: (data: D) => void) => () => void;
  off: (callback: (data: D) => void) => void;
  emit: (data: D) => void;
  modify: (f: (data: D) => D) => void;
  get: () => D;
};

const of = <D>(initialValue: D) => {
  let lastValue = initialValue;
  let subscribers = [] as ((data: D) => void)[];

  const on: Emitter<D>["on"] = (callback) => {
    subscribers.push(callback);
    return () => off(callback);
  };

  const onCurrent: Emitter<D>["onCurrent"] = (callback) => {
    callback(lastValue);
    return on(callback);
  };

  const off: Emitter<D>["off"] = (callback) => {
    subscribers = subscribers.filter((cb) => cb !== callback);
  };

  const emit: Emitter<D>["emit"] = (data) => {
    lastValue = data;
    subscribers.forEach((subscriber) => subscriber(data));
  };

  const modify: Emitter<D>["modify"] = (f) => emit(f(lastValue));

  return {
    on,
    onCurrent,
    off,
    emit,
    modify,
    get: () => lastValue,
  };
};

const map =
  <A, B>(f: (a: A) => B) =>
  (e: Emitter<A>): Emitter<B> => {
    const b = of(f(e.get()));
    e.on((a) => b.emit(f(a)));

    return b;
  };

export type EmitterValue<T> = T extends Emitter<infer V> ? V : never;

const combine = <T extends Emitter<any>[] | readonly Emitter<any>[]>(
  ...es: T
) => {
  const combined = emitter.of(es.map((e) => e.get()));
  es.forEach((e) => e.on(() => combined.emit(es.map((e) => e.get()))));

  return combined as any as Emitter<{ [key in keyof T]: EmitterValue<T[key]> }>;
};

const chain =
  <A, B>(f: (value: A) => Emitter<B>) =>
  (fa: Emitter<A>) => {
    const finalb = f(fa.get());

    fa.on((a) => {
      const newb = f(a);
      newb.on((b) => finalb.emit(b));
    });

    return finalb;
  };

export const emitter = {
  of,
  map,
  combine,
  chain,
};
