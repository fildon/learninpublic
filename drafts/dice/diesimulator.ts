/**
 * Given `n`, simulate rolling a `dn` once.
 *
 * The possible outcomes are the set of naturals from 1 to n inclusive.
 */
const d = (n: number) => Math.floor(n * Math.random()) + 1;

const produceOneResult = (n: number, repeatCount: number) => {
  const rollResults = new Array(repeatCount).fill(0).map(() => d(n));

  // This reads the results as a single number in base `n`
  const result = rollResults
    .map((roll, i) => (roll - 1) * n ** (repeatCount - i - 1))
    .reduce((a, b) => a + b, 0);

  return result;
};

/**
 * Given a `dn`, simulate the outcomes of a `dm`
 */
const simulateMwithN = (m: number, n: number) => {
  /**
   * `repeatCount` is the number of times we will need to roll the smaller die.
   */
  const repeatCount = Math.ceil(Math.log(m) / Math.log(n));
  /**
   * The maximum valid result is the largest multiple of n that is
   * less than or equal to the size of our target space
   */
  const maxValidResult = Math.floor(n ** repeatCount / m) * m - 1;

  let result: number;
  do {
    result = produceOneResult(n, repeatCount);
  } while (result > maxValidResult);

  return (result % m) + 1;
};

simulateMwithN(6, 4);
