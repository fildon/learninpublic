# JavaScript Surprises

## What's up with addition?

With strings and numbers

Addition with numbers works as expected for arithmetic

> 1 + 1 // 2

Addition with strings works as "concatenation"

> 'a' + 'b' // 'ab'

What if we mix the two?

> 1 + 'a' // '1a'

We can also use addition as a unary operator to coerce to a number

+"1" // 1
+"1e2" // 100
+"I am not a number though" // NaN
+undefined // NaN

### What about booleans?

> +true // 1
> +false // 0
> true + 1 // 2
> false + 1 // 1

### Arrays?

Empty array is zero

+[] // 0

Single item array:

+[2] // 2

+["3"] // 3

PUZZLE: What about this one: remember that `+undefined` is `NaN`

+[undefined] // 0

Longer array:

+[1,2] // NaN

PUZZLE: So if `+[]` is `0` then what about `[]+[]`?

[]+[] // ""

### Objects?

+{} // NaN
{}+{} // NaN

{}+[] // 0 **SEE ALSO DIFFERENCE IN NODE** => "[object Object]"

PUZZLE: And as we all know addition is commutative so...

[]+{} // "[object Object]"

## Typeof

typeof NaN // "number"
typeof {} // "object"
typeof [] // "object"
typeof (() => {}) // "function"

## Weird arrays

let myArray = []
myArray.length // 0
myArray.length = 10
myArray // [<10 empty slots>]
myArray.toString() // ",,,,,,,,,,"

Other ways to create arrays:

new Array(10) // empty slots
Array.from({ length: 10 }) // undefined members

TODO difference in mapping over undefineds vs empty slots

Array.from("hello") // ["h", "e", ...etc.]

Array.from("🤯") // ["🤯"]
Array.from("🧜‍♀️") // ZWJ shenanigans

## Weird functions

Functions aren't objects so we can't add keys to them right?

Add keys to function

Circular references

## Bonus stuff

Extracting string values from errors

> 1/0+[]
> (1/(1>>1)+[])[1>>1]
