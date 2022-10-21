# Ideas

Prefer 'unknown' to 'any'

## Tools

[carbon](https://carbon.now.sh/)
[ray](https://ray.so/)

## Advanced Generics

- generics with multiple types
- type constraints

## Jest setup files

Why to do it
How to configure them

## Parallax

[example animation](https://upload.wikimedia.org/wikipedia/commons/d/d7/Parallax_scroll.gif)
[framer motion?](https://www.framer.com/examples/parallax-scroll/)

## Stuff

Undo/redo/history on Beads?

The following clever pattern generates a union type
[Clever type pattern with Otto](https://www.typescriptlang.org/play?ssl=13&ssc=1&pln=14&pc=1#code/JYOwLgpgTgZghgYwgAgIIGECSBRAtsMSKAWTgAczQBzZAbwChllgAlCMAVyhFQDkPcAI2gAuZCAHCoAbkbM2nbqgDKYKNTEBnNdVlMA9iAA2+uABMxAN33AzsgL716YAJ5kUeAkQDiEENDgwfSgAHjkAFQARQLhkCAAPSBAzTTpkAG0Aay0dECoAXTE4EBdkRyYAPmQAXjSs5hBkTIgXfRhkKJjC5AAKSzgjDggxTIAaZAA6KbgoKk0ikvT8gEoaqs6wOCz8sqyWto7ozfynV3c0LE9CaBrkK58-AKDQjBx8a5JySjyKp3oEQzaZCQbToAZGQSITK3HoQd5EMSve7QVbVKq0RzOCCg8GQhCZHqwyx+MC8OC4YbIADkrHYXB4qnUeSpqKqVJg+n0LKxOKMEKhhIgxPAZIpYiphhM5hZazo9mW9CAA)

## jest hoisting

... and setup up mocks in order

## voronoi upgrade

see <https://georgefrancis.dev/writing/crafting-organic-patterns-with-voronoi-tessellations/>

## Barnsley Fern

<https://en.wikipedia.org/wiki/Barnsley_fern>

```html
<canvas id="canvas" height="700" width="700"> </canvas>

<script>
  let canvas;
  let canvasContext;

  let x = 0,
    y = 0;

  window.onload = function () {
    canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");

    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    setInterval(() => {
      // Update 20 times every frame
      for (let i = 0; i < 20; i++) update();
    }, 1000 / 250); // 250 frames per second
  };

  function update() {
    let nextX, nextY;
    let r = Math.random();
    if (r < 0.01) {
      nextX = 0;
      nextY = 0.16 * y;
    } else if (r < 0.86) {
      nextX = 0.85 * x + 0.04 * y;
      nextY = -0.04 * x + 0.85 * y + 1.6;
    } else if (r < 0.93) {
      nextX = 0.2 * x - 0.26 * y;
      nextY = 0.23 * x + 0.22 * y + 1.6;
    } else {
      nextX = -0.15 * x + 0.28 * y;
      nextY = 0.26 * x + 0.24 * y + 0.44;
    }

    // Scaling and positioning
    let plotX = (canvas.width * (x + 3)) / 6;
    let plotY = canvas.height - canvas.height * ((y + 2) / 14);

    drawFilledCircle(plotX, plotY, 1, "green");

    x = nextX;
    y = nextY;
  }
  const drawFilledCircle = (centerX, centerY, radius, color) => {
    canvasContext.beginPath();
    canvasContext.fillStyle = color;
    canvasContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
    canvasContext.fill();
  };
</script>
```

## Generative Art

[TodaysArt](https://todaysart.org/)

[Rewire](https://www.rewirefestival.nl/)

## train ride with dunes?

Parameterize sine functions?

## Hashnode social preview

Currently displays the same text multiple times

Also think about social preview image

Currently the share preview in Discord is:

- Rupert McKay's Blog
- Rupert McKay's Blog
- Rupert McKay's Blog
- Big picture (of Rupert McKay's Blog)

## Generic narrowed returns

```ts
// dummy simulation of third party lib
const sanitizer = (foo: string): string => foo.toUpperCase();

const isObject = (obj: any): obj is { [key: PropertyKey]: unknown } =>
  typeof obj === "object" && obj !== null;

type SanitizeData = {
  <T extends string>(data: T): string;
  <T>(data: T): T;
};

const sanitizeData: SanitizeData = <T extends unknown>(data: T) => {
  if (typeof data === "string") return sanitizer(data);
  if (Array.isArray(data)) return data.map((element) => sanitizeData(element));
  if (isObject(data))
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, sanitizeData(value)])
    );
  return data;
};

const foo = sanitizeData("foo");
const bar = sanitizeData(["bar", { buzz: "bang", blah: [] }]);
```

## fildon.me

Double check and improve upon current sharing preview text and images for fildon.me

## User agent thingy from user-scan

In the user-scan project I started making my own type defs for an external lib. I should publish it back to definitely typed

The library is `clientjs`

## Why can't we divide by zero?

Division is rearrangement of multiplication:

`a * b = c`

`c / b = a`

What is 1 / 0?

`x = 1 / 0`

`0 * x = 1`

But any number times 0 is 0... so no answer can exist!

## Unfiled

- Model-Dependent Realism and the Relativity of Wrongness
  - What does it mean to "know" something?
  - What does it mean for something to be "true"?
  - And what can this tell us about celebrating curiosity and learning?
- Why are arrays zero-indexed?
  - A short history of pointers
- A story about a book store: A lesson in data structures
  - An intuitive guide to arrays vs objects vs sets
  - And a little bit on constant/linear/quadratic lookup times
- What if Array.map/filter/reduce didn't exist?
  - Could we recreate them from scratch?
  - Let's code them live!
- Given only boolean logic gates AND/OR/NOT, how do we add two numbers?
  - A brief introduction to how computation works at the chip level

"Computers aren't smarter than us, they just do dumb stuff faster"

Writing your own `.d.ts` files for imported JS functions

Branch strategies. A case for merge-no-ff
