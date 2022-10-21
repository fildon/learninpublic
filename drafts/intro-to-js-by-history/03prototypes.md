# Prototypes

_You should know only enough to know to avoid this stuff._

Object-orientation, but not like you are used to...

```js
function Square(size) {
  this.size = size;
}

const square1 = new Square(12);
const square2 = new Square(13);
```

No safety on updating the behaviour of all reference types in the current process:

- Array and Object manipulation by libraries
  - Name collisions and chaos!
