# Old Syntax

## Data types

The 7 primitive types:

- string
- number (floats!)
- bigint (Not until ES2020)
- boolean
- undefined
- null
- symbol

_Note this is not the same as "all datatypes"._
There is also `object` but it is a _reference_ type.

_Discuss `undefined` vs `null`_

_Demo `typeof` with examples._
Note especially `typeof []`

## Variable Declaration

- `var` is block scoped!
- `let` (Not until ES6)
- `const` (Not until ES6)

_Demo scoping example._

```js
function test(arg) {
  var varNum = 1;
  let letNum = 2;
  console.log(`Before the if: ${varNum} ${letNum}`)
  if (true) {
    var varNum = 3;
    let letNum = 4;
    console.log(`Inside the if: ${varNum} ${letNum}`)
  }
  console.log(`Outside the if: ${varNum} ${letNum}`)
} 
```

_GOT UP TO THIS POINT BY END OF FIRST SESSION._

## Basic Operators

- Arithmetic
  - Beware `+`: Concatenation vs addition
  - Note presence of `Infinity` and `NaN`
- String concatenation
- Comparisons
  - Beware `==` vs `===`

## Functions

- `function` keyword
  - named vs unnamed
- arrow functions (Not until ES6)

_Demo function properties._

## Conditionals

Truthy vs Falsey

_Demo `||` and `&&` and their pitfalls_

## Loops

- `while`
- `for`
- `for...in` (WARNING! Doesn't do what you think!)
- `do-while`
- `for...of` (Not until ES6)
