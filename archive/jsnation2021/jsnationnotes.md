# JSNation

## Evan You | Vite: Rethinking Frontend

Evan You
Vite
Bundler -> RollUp with a bunch preconfig
Duplicated Configurations in WebPack projects ... these become conventions
Pulling out a convention like this will not always suit every use case
Vite aims for "The 90% Happy Path"
Vite is built on top of Rollup and Vite
Vite is inspired by: Snowpack / WMR / Parcel / @web/dev-server
Vite does not support Jest straight out of the box, because Jest does not yet support async module resolution
Repl.it just switched from CRA to Vite
Next.js is deeply coupled with WebPack

## Mael Nison | Yarn in Depth: Why & How

Lead maintainer for Yarn

Yarn is more than just a package manager, it's a _project manager_
Recently moved from Webpack to esbuild
Yarn uses itself
Yarn cache | can config project to never need to yarn install by including the yarn cache in the commited repo

- No yarn install between branch checkouts
- Much faster CI build times (the deps are already there!)
  Constraints | can enforce constraints across all workspaces e.g. "no two versions of a same package in two different workspaces"

Modular architecture

- features are separated with workspaces
- bundled at build time

## Open Source Awards

withfig/autocomplete
Fig | autocomplete for any terminal

ts-migrate by airbnb
Takes JS or partial TS project and outputs a compiling TS project

[WMR](https://github.com/preactjs/wmr)

## Lightning Talks

## Productive by default

Jason Lengstorf - Netlify

"Optimize for deletion"
Primary goal: ship value to customers
Teams want to ship
What stops them?
Barriers in build process: Frustring / Fragile / Slow
Complexity is a code smell
Complex systems slow down developers
Complex systems silo knowledge in teams. Ups pager duty. Blocks holiday time.
A key cause of complexity is beauraucry
Complexity creates slowness which makes things worse

Solutions:
Frontend is decoupled
Abstract devops, build, deploy, servers to other services teams
Frontend devs can just focus on dev and ship

## How to build boring internal tools 10x faster

Chris Smith - Retool

Retool shill

## Building a Custom Component Library fast

TJ Vantoll - Progress | jQueryUI | KendoUI

Every company should have its own standard ui library

- Common look and feel
- Answer technical standards decisions
- DRY cross-cutting concerns like accessibility

But companies shouldn't build the harder bits for themselves

- datepickers
- data grids

Set up a development environment _outside your apps_ just for developing components

Wrap all third-party components in your library

## Simplifying the Complexity of Node.js with InfluxDB

Marian Villa - NodeSource

NodeSource shill

## The Visual Future of State Management

David Khourshid - Microsoft

State charts are visually exact diagram tools that work well to communicate complex concepts between humans
"Visual formalisms"
"Visual syntax and semantics"
Codebase directories rarely convey such convenient meaning
Ad-hoc logic is often scattered around without a strong sense of location meaning

Reducers enforce explictly named events (transitions) between states
Reducer implementations can become lengthy and complex however
(Think long switch statements and chunky case blocks)
Does not indicate clearly impossible states

State machines are like reducers, but are much easier to analyze
Permitted states are explicitly listed
Events explicitly belong only to some states and not others
Impossible states are impossible!
Impossible transitions are impossible
State machines lend themselves well to visualization
But with too many states and events, this can become combinatorially large

State charts offer a hierarchical way to nest state machines to prevent combinatorial growth

xstate.js.org
pure functional state machine and state chart library
state-first
In React offers useMachine hook

@xstate/inspect
Visualize state machines in real time

xstate-catelogue.com

stately.ai

- questions

Testing is easy!
In a unit test you can fire some sequence of events/transitions and assert that you have correctly arrived at some expected state

## Service Workers - How to run a man-in-the-middle attack on your own website

Chris Ferdinandi

JavaScript is a fragile house of cards
Bandwidth is not evenly distributed

What is a service worker
Sits between the client and network
navigator.serviceWorker.register('your file')
Intercepts all requests and all responses
Can add event listeners to fetch events
Built in storage!
Way more than localStorage or cookies
Can therefore cache everything on the client's browser!
SSL is required

Network-first

- check the network first
- if good, use it, maybe cache it too
- if bad, try to fetch from cache
  Best used for frequently updated assets

Offline-first

- Check for cache first
- Fallback to network only if cache miss
  Best for static assets that rarely change (main HTML, CSS, fonts)

Fallbacks

- if both network and cache fail... can fallback to a default placeholder

Show critical information when a site goes offline

Show previously cached pages when site is down

- here's articles you've already read

Cache core assets for performance

- CSS
- JS
- Images
- Fonts
  Helps for low data plans
  Speed on subsequent visits

Fully offline:

- Apps
- Games

Replace SPAs with MPAs
With SPA the whole app succeeds or fails together
Service workers give us power of SPAs for free!
At lot of SPAs have to intercept and break default anchor tag behaviour
Service workers make this more declarative!
idea: provide announcements to visually impaired users

Pairs well with SSR/SSG and CDNs

Service Worker cache has configurable expiration date

## Thursday

## Lin Clark | Making JavaScript on WebAssembly fast

Motivation run JS on non-browser environments
Browsers have a JS engine built in.
In the absence of a browser engine, you need to provide an engine along with your code.
Chrome: V8
Firefox: Spider Monkey
WASM doesn't support JIT... only JS interpreters
iOS devices / smart TV / gaming devices: security concerns prohibit JIT

## Hemanth HM | ES?.next()

This-Binding Syntax [Stage - 0]

- obj::func => obj.func.bind(obj)
- ::obj.func => obj.func.call(obj)

Partial Application [Stage-1]

- const sum = (x, y) => x + y;
- const addThree = add(3, ?);
- const addFive = add(?, 5);

Pattern Matching [Stage-1]

```ts
match(res) {
  when({ status: 200, headers: {} }) {

  }
  when ({status: 404 }) {

  }
}
```

Do Expression [Stage-1]

- `do { /* code */ }`
- Auto returns the last expression
- async do

Operator Overloading [Stage-1]

- Decimal(1) + Decimal(2) // Decimal(3)

String.dedent [Stage-1]

- more flexible string templating with indentation?

The Pipeline Operator [Stage-1]

- double(increment(double(double(5))))

```js
5 |> double |> double |> increment |> double;
```

Object.hasOwn() [Stage-2]

- alias for 'hasOwnProperty'?

Map.prototype.emplace [Stage-2]

```js
map
  .emplace(key, {
    insert: () => value,
  })
  .doThing();
```

- Only insert value if it isn't already there. Return the value either way

Records & Tuples [Stage-2]

- Support for deeply immutable objects and lists

findLast and findLastIndex [Stage-2]

- find... but matches the last one :-)

throw expressions [Stage-2]

- lets you throw in right-hand side assignment, ternaries, || fallback

at() on built-in indexables [Stage-3]

- index accessing, with support for negative indexing

Error Cause [Stage-3]

- throw new Error('message', { cause: err })
- catch(e) { console.log(e.cause) }

Top Level Await [TLA] [Stage-3]

-

## Brandon Bayer | Build Fullstack Apps in Record Time with Blitz.js

Built on top of Next.js
Prisma - ORM for node and TypeScript

Magic imports

- Frontend can import backend function which talks to the DB
- Blitz gracefully handles the API layer for you at compile time
  Auto-setup for user login/logout/password-reset

## Scott Gerlach

StackHawk shill

## Matt McClure

Video Sprites

Paint video straight to canvas

- Request animation frame - snip video quadrants
  [demo](https://video-sprites.mux.dev/)
  [repo](https://github.com/MuxLabs/video-sprites)
  [blog](https://mux.com/blog/canvas-adding-filters-and-more-to-video-using-just-a-browser/)

## Fabrizio Picca

CommerceLayer shill

## Joe Karlsson | MongoDB

An Introduction to IoT (Internet of Toilets)

## Friday

## John Papa

VS Code Can Do That!

Zen Mode

CTRL+SHIFT+C: Open terminal externally in the current folder

Chrome debugger extension

CTRL+D: multiple cursor

Snippets

Lightbulb = CTRL+.

Pull Request extension!

Dev Containers?

- Docker Desktop
- Remote Containers Extension
  Add development container

Clone directly into dev container

## Matteo Collina

Multithreaded Logging with Pino

Pino is a light weight logging framework

## Ujjwal Sharma

How to Outsmart Time
Temporal

Instant - absolute time point in time
Plain\* - wall-clock time and calendar date
Calendars - "human calendars" (Gregorian/Buddhist/Hebrew etc.)
TimeZones - refer to an offset or a human time zone
ZonedDateTime - Instant + TimeZone
All arithmetic operations are done using date ranges

ISO-8601 based

## Jecelyn Yeen

Debugging with Chrome DevTools

CTRL+Shift+P: Command panel

Emulate focus command

Memory inspector

Network filter:
`-status-code:200` show only requests that _weren't_ 200

`$$`: get all selector
`$0`: get currently selected

Local Overrides
Enable local overrides in the sources panel

- Show Changes

You can use DevTools to inspect DevTools!?

## Colby Fayock

Fundamentals of web development

Learn fundamentals not frameworks
Fundamentals are timeless

## Mohammad Shahbaz Alam

Node API security
Decentralized Identity Token

Shill

## Vasilika Klimova

WebXR

## Jason Mayes

Machine Learning in the browser

TensorFlow.js
pretrained models

COCO-SSD - object recognition
Face Mesh - Recognize 468 facial landmarks
Body Segmentation - Distinguish 24 body areas

Transfer Learning
Teachable Machine

## Liad Yosef

Duda

React.Lazy (Not available for SSR)

## Chen Hui Jing

CSS Can Do That Too

Responsive Typography
`font-size: clamp(1.5em, 4vw, 2.5em);`

Scroll Snap
`scroll-snap-type` mandatory or proximity
`scroll-snap-align: start`

Sticky Elements
`position: sticky`
`top: 1em`

Masonry Layout
Only available in Firefox
`grid-template-columns: masonry`

## Sam Thorogood

Web Components, Lit and Santa

`slot="title"`

Must have a dash in the name

```html
class SantaCardElement extends HTMLElement { connectedCallback() { // }
disconnectedCallabck() { // } }
```

Shadow root scopes style tags

`<slot></slot>` - is basically React children?
Slots can be named

Lit is Google's WebComponent library

$$
$$
