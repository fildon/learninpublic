# Classless

Object Orientation is great! But JavaScript's "class" and "this" keywords are not!

## Problems with native JS classes

- Problems with the prototype chain

  - prototypes are mutable

- Problems with 'class'

  - Only one constructor (artificial limitation)
    - by default constructor will return new 'this' reference to the new object
    - ...but! other objects can be returned... unless you try to return a non-object, in which case the 'this' reference is used instead.
  - Are implemented as functions under the hood
  - Derived classes have no 'this', until after their first 'super' call

- Problems with 'this'

  - The length of this page should be a bad sign [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

  - Outside a function 'this' refers to the global object (the 'window' in browser... something a little different in NodeJS)
  - In a function _it depends on how the function was called_

    - .call
    - .apply
    - .bind
      - cannot overwrite a prior bind
    - non-strict mode coercion of null and undefined to the global object!?

  - arrow functions inherit `this` from enclosing lexical scope

  - Historically not all browsers have followed spec on this
  - prototype binding and mutability
  - difference in behaviour in strict mode or not

  - Event handlers implicitly bind 'this' to the element which is the target of the event

    - This is not consistent across all browsers

  - 'this' bound by method calls depends on the calling context. Default behaviour doesn't guarantee consistent internal 'this' reference.

'get' permits side-effects

'extends' / 'setPrototypeOf'
'species' !?

## Examples

The pure functional vision

- State is created _but never modified or destroyed_
- "Mutation" doesn't exist... but is replaced by creating "different" objects
- This makes TypeScript very happy!
- Easy to test
- Easy to reason about
- Computed results are never out of date

### With external functions (transformers)

```ts
interface Product {
  id: string;
  name: string;
  quantity: number;
}

interface Cart {
  [id: Product["id"]]: Product;
}

// Constructor
const createCart = (): Cart => ({}); // This specific example is kind of redundant (see structural types)

// 'Getters' - NO SIDE EFFECTS!
const getPrettyString = (cart: Cart): string =>
  Object.values(cart)
    .map(({ name, quantity }) => `${quantity} x ${name}`)
    .join("\n");
const getTotalQuantity = (cart: Cart): number =>
  Object.values(cart)
    .map(({ quantity }) => quantity)
    .reduce((acc, curr) => acc + curr, 0);

// 'Setters' - New Cart every time
const addProduct = (cart: Cart, newProduct: Product): Cart => {
  if (!cart[newProduct.id]) return { ...cart, [newProduct.id]: newProduct };

  return Object.fromEntries(
    Object.entries(cart).map(([productId, product]) => {
      if (productId === newProduct.id) {
        return [
          productId,
          { ...product, quantity: product.quantity + newProduct.quantity },
        ];
      }
      return [productId, product];
    })
  );
};

const removeProduct = (cart: Cart, idToRemove: string): Cart => {
  if (!cart[idToRemove]) return cart;
  return Object.fromEntries(
    Object.entries(cart).filter(([id]) => id !== idToRemove)
  );
};

// TESTING AREA
const myCart = addProduct(
  addProduct(
    addProduct(createCart(), { id: "1", name: "shoes", quantity: 1 }),
    { id: "2", name: "hoodies", quantity: 4 }
  ),
  { id: "1", name: "shoes", quantity: 7 }
);

console.log(getPrettyString(myCart));
console.log(getTotalQuantity(myCart));

console.log(getPrettyString(removeProduct(myCart, "2")));
```

### With internal methods (chainable!)

[playground](https://www.typescriptlang.org/play?target=6#code/JYOwLgpgTgZghgYwgAgApQPYBMCuCzIDeAUMssFgFzIDOYUoA5gNynIhwC2E1dDILNgEccccMDABPaiBycARtFYBfYsVCRYiFAGE4UAiTIAHTLnw1qhZAG0K1dNjxgbAIgquAup4dnnyZVYyRggwdFCpAGV6JmoACgBKZABeAD5aGIEg5BCwABUMMDgAGwBFUXEpeKS09jlFKGy4LCxHczB4kAgAdzbnXyd8GvS9A2yoCE4MADcIPvx4igKAJUmZngz+RmHkUbAVNQB6Q92MED5nDChiBDO6ZAQJuEg9lOQ400GwSyJbezQ-Pg3B5vAN2gEEtRXrU4kZkJ92jQADRsY7IADiEWgNGQAFp2BhaBQUBAYDAIBYAIRsXLhMBRTKMaopVJsMgAeXkACsKWAAHTTEo4CA0D6A74JNlkZB8zhwYxxWHsLgQJHIERiMASSQQlnIAAGABJCBrKpJlMgAB7IY0cbjKfWS6XSvlcjCgOKuAA6IFcCRRwVCBSKZQqWqq72GUs5PPwAqFIrFXxoTudMrlCqVpvDOuUO2z2tTzr5E3MEEViAQaoQOCgUB2leQAGoHrWoGqAAz+1EnHQACzEIRxoAyzwgbGarXFnR68w6AK+kN2+gItThZGAMHelIRzhoNi6vXFfIoniL0omYFrIAeTxeK6VfKfu4saoPs+Pp5kH6+ENYUsva9bwgMc9jiKUOW5Xk+RgTBOAAUXABhEwg6UY2giAkOARMXwlWV5UVGxcIASSwNVcLPPV1zTDctyTdpSJSZJknYH92hPLAkmomiyEAqAbxsVCePhcVSIDYS02sJ8+VwtUCwjXC+XknUW0POclLDbUAnEiTkE8bJhNUXS+IEkiyJEr59KEiFUPPBJsmUcSJimWY50WLAVjWWZeEZJdoXSajN23XD9yWDBVhciBKJM4DQIfEL7IA0IgMeED7wMcCaPQuNYIwBCsJQ4Tsv5TCYhw8UUxg4Bik0QjTx2ChkEpZjyA88KvIgc8yDshyUTzf80TyeDIjyYiADl0WQABBZZ4Kmm47gIThJGhWL0rAWE8zYPlJznJV-lcABGVw1TtDZXBoPsMBFE71U0iNDpssgdpaPbrAOgAmW6zuoVwruwbCaFu5TqAAFiemVdvFfaqGQI7vpVX7LuuoG5Pu6RkAAdj-NRbnODBiggPligwRg4mWvY+VpS8GS2RJErxmgCaJkmyYplcqaDQoSnKTVtXp-9GeZ4nSfJlaOec9Y9tcL6Ek5sIackaI6YSeygA)

```ts
interface Product {
  id: string;
  name: string;
  quantity: number;
}

interface Cart {
  products: { [id: Product["id"]]: Product };
  getPrettyString: () => string;
  getTotalQuantity: () => number;
  addProduct: (newProduct: Product) => Cart;
  removeProduct: (idToRemove: string) => Cart;
}

// Constructor
const createCart = (products: { [id: Product["id"]]: Product }): Cart => ({
  products,
  // Getters - no side effects!
  getPrettyString: () =>
    Object.values(products)
      .map(({ name, quantity }) => `${quantity} x ${name}`)
      .join("\n"),
  getTotalQuantity: () =>
    Object.values(products)
      .map(({ quantity }) => quantity)
      .reduce((acc, curr) => acc + curr, 0),
  // Changes in state
  addProduct: (newProduct: Product): Cart => {
    if (!products[newProduct.id])
      return createCart({ ...products, [newProduct.id]: newProduct });

    return createCart(
      Object.fromEntries(
        Object.entries(products).map(([productId, product]) => {
          if (productId === newProduct.id) {
            return [
              productId,
              { ...product, quantity: product.quantity + newProduct.quantity },
            ];
          }
          return [productId, product];
        })
      )
    );
  },
  removeProduct: (idToRemove: string): Cart => {
    if (!products[idToRemove]) return createCart(products);
    return createCart(
      Object.fromEntries(
        Object.entries(products).filter(([id]) => id !== idToRemove)
      )
    );
  },
});

// TESTING AREA
const myCart = createCart({})
  .addProduct({ id: "1", name: "shoes", quantity: 1 })
  .addProduct({ id: "2", name: "hoodies", quantity: 4 })
  .addProduct({ id: "1", name: "shoes", quantity: 7 });

console.log(myCart.getPrettyString());
console.log(myCart.getTotalQuantity());

console.log(myCart.removeProduct("2").getPrettyString());
```

Class pros:

- Easy to consume
- Discoverable methods
- Chaining is neat!

Pure function pros:

- Implementations can easily be moved
- Testing can be totally isolated _per function_

Remember TypeScript is a _structural_ typing system, not a nominative one. Functions can (and should!) be only loosely coupled with the data they operate on.
It is quick and easy to add or remove functions that operate on a data type _in a way that doesn't have to live inside a class definition_.
In effect each section of our project might want different ways to view/modify our piece of state... but the data type definition itself doesn't need to get bloated by that.

## Talk

MOTIVATION: OO without 'class'

Start with x-y vector

interface vs type? No one cares

getLength

scaleBy

normalize

_Notice the pure functional style._

## QUESTIONS

Want:

```ts
testV.scaleBy(2).normalize().getLength();
```

But then why is `class` and `this` bad?

## QUESTIONS?

Pure functional means never mutate. Means we can rely on our data never getting messed up :-D

Start fake class

- replicate the three methods

How to private method (scaleBy as a private method)

How to computed field (length as a computed property)

Tradeoffs:

- separated functions can be moved around more easily
  - easily to isolate individual functions for testing
- object+methods "chunkier" definition, but nice to consume
  - discoverability of 'methods'

## TO BE CONTINUED

[where we got to last time](https://www.typescriptlang.org/play?target=6&jsx=0&ssl=47&ssc=1&pln=48&pc=1#code/JYOwLgpgTgZghgYwgAgGoQWA9lZBvAKGWOQA8AuZEAVwFsAjaIkgT0poaYF8CCEsQAZzDIA5hDAAZCCFFgAFsgC8yABQA3Sukw4AlOzqNcSgHzIAsnAUA6QQEcoYDddLIAVG+QAmZAGpk6tYs7p5eurz8QiKCCHAANhAAQsEqGloY2FAANMgx8RAGnFD6aBk4ymaEJMhQEtRQIPjM1cQUAS7uubEJWc0tbO3Bnnk9fTw8fALCVDi08cAAXiipmqU6xenrFU3VtWD1jSNJLBo5AIzIAPRiEtKyChq64ROX15HTkMLamZuZyvhkSgAZhyAwALMgXm8plgEtY4lhRKpxFIZHJ5KoQLN5ktVEdkqpPmBvjgcmEnuECK9kESSVAqddiLZusdVGEGSRrFioHM4osIKpwtSmSi7ujBbxQJBYIgUABhLCwuk7EhtDhGPoDdVMaqitEKSiC7ba+nVfEDPEswpGXTbBVKsqmkjc3n8w220zIe1xOkECbvEQIWpWCDe5WpNWGaCg63QEphx3bQh9AM3VH3RSpD1mSw2eyOVSkDw+fwsYvhaqp83-S35WPFbZBiAhhPrQudI6gjssiskVMunHLNTZrr5AkXa56jOCym7OoNFUtMi9JfEFgr1dT9EbpfmnctAd8pb78a8SZRGkQL6JlRNluKn2O1Qg5BgynvWEQeGIwlX4mO5kxxOMJAISAkgV0awtweJ5eEuDwiE8AAxcoQAgUgRDAYBaAKRDkAAWmQAARCBaCmMAoBDGl5CsajgEEZB6NyLC4jiZAAAd6hQGBqBATBgAEeI8MIuU4EaAB3FBBGw6g4io9ioGAdQqJwhQsAAE0EAB+YSvTE5BJNyGS5MgZB+FoTjIHUjioCwdjoCwq8dM6QiAHUaJEOBamolA4HU5TwDgcQGKwGA6IY4QWASZzPDcjzkC8lAFBQdT6L8gKwCCq9kFC8LmKiiAYsuAggA)
