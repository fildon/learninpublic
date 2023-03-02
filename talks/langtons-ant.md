# Langton's Ant

Deterministic algorithm

- "Ant" in infinite grid
- Has location and direction
  - Turn (depending on colour)
  - Flip colour
  - Move forward

Outcomes:

- A lot of symmetry for the first few hundred steps
- Chaos for many thousands of steps
- "Highway" emerges after about 10,000 steps

The "Highway" is an infinite loop of 104 steps

Emergent "highway" after about 10,000 steps

If we treat the starting state as input: Does the Ant create a highway for every possible input?

We don't know!

## Deciding System Properties

What does it mean for us to know things about a system?

Is this true? A complete and consistent answer would violate the Halting Problem.

Rice's Theorem: all non-trivial semantic properties of programs are undecidable.

## Testing

Let's not throw the baby out with the bath water

Empiricism vs Rationalism
