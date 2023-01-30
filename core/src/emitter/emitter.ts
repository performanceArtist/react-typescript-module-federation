export type Emitter<D> = {
  on: (callback: (data: D) => void) => () => void;
  off: (callback: (data: D) => void) => void;
  emit: (data: D) => void;
  get: () => D;
};

const of = <D>(initialValue: D) => {
  let lastValue = initialValue;
  let subscribers = [] as ((data: D) => void)[];

  const on: Emitter<D>['on'] = (callback) => {
    subscribers.push(callback);
    return () => off(callback);
  };

  const off: Emitter<D>['off'] = (callback) => {
    subscribers = subscribers.filter((cb) => cb !== callback);
  };

  const emit: Emitter<D>['emit'] = (data) => {
    lastValue = data;
    subscribers.forEach((subscriber) => subscriber(data));
  };

  return {
    on,
    off,
    emit,
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

function combineT<A, B>(a: Emitter<A>, b: Emitter<B>): Emitter<[A, B]>;
function combineT<A, B, C>(
  a: Emitter<A>,
  b: Emitter<B>,
  c: Emitter<C>,
): Emitter<[A, B, C]>;
function combineT<A, B, C, D>(
  a: Emitter<A>,
  b: Emitter<B>,
  c: Emitter<C>,
  d: Emitter<D>,
): Emitter<[A, B, C, D]>;
function combineT<A, B, C, D, F>(
  a: Emitter<A>,
  b: Emitter<B>,
  c: Emitter<C>,
  d: Emitter<D>,
  f: Emitter<F>,
): Emitter<[A, B, C, D, F]>;
function combineT<A, B, C, D, F, G>(
  a: Emitter<A>,
  b: Emitter<B>,
  c: Emitter<C>,
  d: Emitter<D>,
  f: Emitter<F>,
  g: Emitter<G>,
): Emitter<[A, B, C, D, F, G]>;
function combineT(...bs: Emitter<unknown>[]): any {
  const combined = emitter.of(bs.map((b) => b.get()));
  bs.forEach((b) => b.on(() => combined.emit(bs.map((b) => b.get()))));

  return combined;
}

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
  combineT,
  chain,
};
