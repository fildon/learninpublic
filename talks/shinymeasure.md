# Presentation of [Shiny-Measure](https://fildon.me/shiny-measure/)

## Tools used

- TypeScript
- React
- Jest
- esbuild
- eslint
- luxon
- recharts

## Build process

Separate TS/JS and static file builds, which combine to produce a single dist directory ready to be served.

## Key Features

- Accessibility (semantic HTML)
  - I tried, and then ripped out Chakra for being inaccessible
- Zero network cost after page load
- Context provider and custom hook for modals anywhere

## Highlights

- 100% TS
  - Even the Jest config is TS, thanks to `ts-jest`
- CUBECSS
- Automated build/test/deploy via github actions

## Pure Functional

> Functional core, imperative shell

- Dependency injection of localstorage (see both `storage.ts` and `weightform.tsx`)
  - Only `index.tsx` ever refers to global window, everywhere else is pure functional

## Room for improvement

Remember that the target audience is already happy with this product 🙂

No transferrability of state _not even between different browsers on the same device_

No way to filter displayed information
