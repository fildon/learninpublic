# TypeScript style

## Ground rules

Strict compilation _MUST_ be enabled. [strict flag docs](https://www.typescriptlang.org/tsconfig#strict)

`ts-ignore` should _NEVER_ be used.

`any` should be avoided.

## Function types

TL;DR: prefer inferred types, unless you need a broader or narrower type, for which you can provide an explicit type.

// TODO The type of a function is the type of its arguments and its return type

// TODO inferred vs explicit

// TODO structural vs nominative

## Object orientation vs pure functions

TL;DR: Avoid the `class` keyword. Prefer modules of pure functional named exports. If you require shared mutable state, prefer function closures.

// TODO function closure example.

// TODO note that even in the stateful example, only functions exist at root-level, i.e. nothing is created as a sideeffect of importing.

```ts
const createCacheService = <Key, Value>(cache = new Map<Key, Value>()) => {
  // read
  const has = (key: Key) => cache.has(key);
  const get = (key: Key) => cache.get(key);

  // write
  const set = (key: Key, value: Value) =>
    createCacheService(cache.set(key, value));

  return {
    has,
    get,
    set,
  };
};
```

## Enums

TL;DR: Avoid the `enum` keyword. Prefer string unions, or const objects.

[TypeScript's enum docs](https://www.typescriptlang.org/docs/handbook/enums.html)

JavaScript does not natively support enums. At time of writing there is a stage-0 TC39 proposal to add enums to ECMAScript, however there has been no progress on it for four years, so we should not expect JS enums any time soon.

TypeScript enums are therefore a kludge built on top of enum-less JavaScript. Consider this example:

```ts
enum eDirection {
  Up,
  Down,
  Left,
  Right,
}
```

We have defined an enum with four values. Since JavaScript does not have an `enum` keyword, this must be compiled to something which does not use the `enum` keyword:

```js
var eDirection;
(function (eDirection) {
  eDirection[(eDirection["Up"] = 0)] = "Up";
  eDirection[(eDirection["Down"] = 1)] = "Down";
  eDirection[(eDirection["Left"] = 2)] = "Left";
  eDirection[(eDirection["Right"] = 3)] = "Right";
})(eDirection || (eDirection = {}));
```

There are some interesting tricks going on in this compiled code, but I'll focus on just one part. The nested index assignment acts as a bidirectional key-value assignment. i.e. it creates key-value pairs mapping from enum names to numbers _and also_ numbers to names.

The resulting object at runtime has the following key-value pairs:

```js
{
  0: "Up",
  1: "Down",
  2: "Left",
  3: "Right",
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
}
```

// TODO const enums

// TODO string union use

// TODO const object use
