# The History of JavaScript

## Before JavaScript

### 1990s

HTML, CSS and JS are all born in the 90s.

HTML and CSS provide the basis for static documents.

Both HTML and CSS continue to evolve over time, but that's not the focus of this talk.

At this point the only form of user interaction is via full server-round trips.
There is a demand however for user interaction within a page.
_JavaScript_ is not the first client-side scripting language.
A number of competitors existed side-by-side for a while.
This leads to browser wars. In which different browsers offer different scripting languages.

This is hell for developers,
because if they want their website to be compatible with all browsers they have to write interactivity in multiple different scripting languages.
This is almost impossible to maintain and keep consistent across all browsers.
In practice most websites pick one language and ask visitors to use the "correct" browser.

> Best viewed in Netscape Navigator

By some crazy dumb luck browsers start to converge on JavaScript. Not because it is the best choice (definitely not!) but because it is _relatively_ easy for browsers to support, and not so hard for website creators to write with.

## Baby JavaScript

Initially JavaScript is created in 10 or 11 days (depending on who you ask).

It has variables, which can be declared with `var`:

```js
// Declare:
var x;

// And then assign:
x = 12;

// Or declare and initialise right away
var y = 12;
```

But you can also just assign to a variable name without explicitly declaring it:

```js
y = 13;
```

And functions:

```js
function myFunction(input) {
  return input + 1;
}
```

// TODO loops

// TODO conditions

// TODO complete lack of import between files, and the proliferation of hacks that emerge to simulate this

## JavaScript Evolves

ES6 and the future

// TODO compatibility, babel, transpilation

// TODO const and let

// TODO better loops

// TODO classes

// TODO import!

// TODO the distinctions between JS engines, especially with the emergence of Node

[JS to know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)
