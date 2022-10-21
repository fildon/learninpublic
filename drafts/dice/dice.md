# Simulating Dice

https://math.stackexchange.com/questions/2506174/simulate-a-n-dice

In this post I will demonstrate two approaches for simulating rolls of a die of a given size, using only rolls of a die of a different size.

The first approach I will call 'base number conversion'.

The second approach I will call 'recursive unit interval segmentation'.

Throughout this post I will use `dn` terminology to refer to a die of size `n`. For example a `d6` refers to the classic six-sided die.

## Using base number conversion

Given an input die of size `n` and a target die of size `m`, this approach works by expanding the output space of the `dn` by rolling it repeated times, and interpreting the rolls in base `n` mod `m`. Some rolls however must be discarded to prevent bias in the outcomes.

To present this approach, I will start with some small examples before building up to a fully generalized algorithm.

### Simulating a d6 using repeated coin flips

Given a coin, we can flip it as many times as necessary for the number of outcomes to exceed the target number.

For a d6, we would need to flip the coin at least 3 times to produce more than 6 outcomes. If we only flipped 2 times, we could only output 4 outcomes. At 3 flips we can output 8 outcomes. Given that we have 8 outcomes, we need to discard 2.

Here is one scheme for doing that:

|     |         |
| --- | ------- |
| HHH | 1       |
| HHT | 2       |
| HTH | 3       |
| HTT | 4       |
| THH | 5       |
| THT | 6       |
| TTH | DISCARD |
| TTT | DISCARD |

Note that the ordering here is arbitrary, but I have used binary ordering, treating `H` as `0` and `T` as `1`. Although arbitrary, this ordering will prove convenient for generalization to other die sizes.

Additionally notice that in this case both of the discarded results start with `TT`, so we can restart after only the second flip if we have seen `TT` so far.

We can combine the above two notes to produce a method of arriving at results without needing a lookup table:

- Flip a coin twice
- If the flips were `TT`, discard and restart
- Otherwise flip a third time
- Treating `H` as `0` and `T` as `1`, read the flip outcomes as a binary number and add 1.

### Simulating a d6 with a d4

The above method of using a coin is equivalent to repeated use of a d2. _A coin is a d2_. We can extend this method to any other die size.

With a d4, we need two rolls to produce a large enough outcome space to simulate at least 6 results. The outcome space is much larger than we need though, having 16 outcomes.

But we can map a given target result to multiple rows in our table, like so:

| First roll | Second Roll | Result  |
| ---------- | ----------- | ------- |
| 1          | 1           | 1       |
| 1          | 2           | 2       |
| 1          | 3           | 3       |
| 1          | 4           | 4       |
| 2          | 1           | 5       |
| 2          | 2           | 6       |
| 2          | 3           | 1       |
| 2          | 4           | 2       |
| 3          | 1           | 3       |
| 3          | 2           | 4       |
| 3          | 3           | 5       |
| 3          | 4           | 6       |
| 4          | 1           | DISCARD |
| 4          | 2           | DISCARD |
| 4          | 3           | DISCARD |
| 4          | 4           | DISCARD |

Note as before that we have an opportunity to terminate early. In this case when the first roll is a `4`.

In order to produce a result without a lookup table we can use the same approach as before, but instead of interpreting `d2` rolls in binary, we instead interpret `d4` rolls in base 4, but also needing to take care to adjust for out by one errors caused by our base number system starting at 0, but the numbers on our dice conventionally starting at 1.

Precisely, one must follow these steps:

- Roll a d4.
- If the outcome was `4`, discard and restart.
- Roll the d4 a second time.
- Subtract one from both outcomes.
- Concatenate the two results and read as a base-4 number.
- The computed value at this point will be between `0` and `11`.
- Add 1 to this value and then apply `mod 6`.

We can now extract from this a pattern to this process, in which any die can simulate any other die.

Given some pair of naturals `n` and `m`, We can simulate a `dm` using a `dn` as follows:

- Find the smallest natural `k` such that `n^k >= m`.
- Roll the `dn` repeatedly, `k` times.
- Read the rolls as digits of a base `n` number.
- Discard values greater than the largest multiple of `n` that is less than or equal to `m`.
- Mod the result by `m` and add 1.

[Code](https://www.typescriptlang.org/play?ssl=30&ssc=9&pln=30&pc=23#code/PQKhCgAIUhxBLAbgUwHaQAaowGkgZ3gFsBXAGwEMAXZSAJwHsyz5UBzSCzAE20gdQBjZADooEaJAAqAC1oAHBvkIAjMrQYkqghkWT5OdWlTkFkVfgDNIqaiToUyBy4yKQAjJCoMbkVoLISQhQxaGBwHVR8C25IAF5IAApUAC4bEiIVZDoASniAPkgAWWoZEUsyBgY6ZMkSkxEHVG5dRJy8gGoPAG5wCIFoyHlGbhJhAHlUZAAlfXILBOS01AysujwjeWRqAGFNVCpl1ey8uMKAbyhISMHGZln8eYMEqYB3SABBOgcAT0TN7ZUPYkA45crwZiJAAMYKIFHkiTaBUg3GS7V6V2AwGkMngBiMFG4BhMtCMjzIVAMFCpBFYbHU6Uy2T86BU1NoWAwVxuFjJ83i9CYZAeTyukEgIjhCP+Qrw8FOhRlzEgAFoPHkYOgwEkAbt9hY1fBVeqcmKJUZRsJERQ8CoFZxIF0VHgYRjxUYqPZ0HyKb0AL4Y0ASGAIFDoLgYXi4WmkSg0LymTTaXT6KwOyNELlhfpRCyEWPUZBFV7wEwAOQFiSIRyZ6xsNbW9su4qDYpgGF1QP1GD8xNMK1raaoxFTr1oJeVU2QsW8guVJIIcOYzO48FEbfC4p59GQWz1IIWxVKImEEMS9TKlTYVby2IvIivaJyvRbYDbONocIAHsQMpBEI48CxD6Fh4gmtCUHQbD6BYsbDvIDIMNY6AmNQvaQOoygJhQ6DVJAyAAI4kI4Xg+EQG7cgMsEUF+ABqgHcCKFICveFRVDUWowJ2wIHJA2JEBqkBuGq7huhh5g7uShyMmsL4oj4zbipJ-IJMMDCWsgkwzHMFLJBsu6AjxVDPlcfqQK8uIMv8OkWIU370SwjE2SZVwel6Oo2ZAACkQmdD04ABn0raSB8XgwUOpirtEdDwCoWjwAIaZcPm5CFrEq7COI4TbjQgwvMg7xfL8iTuFCZUwuCkIVVKiL2ilcZFiW5aJAAbHgAAs7SNNOYzINagiCHggj2LkyKKfA1iJAAhAA2u4OAAEw4AAzDg7U4AArDgLUALoiP4gTcPoiTDd87SQIp4omIw7xvJAACi3zVIkGAAJKoABjlzmQykUmkAAk5ynXQfoYKa4p+n07rmO55wiPDFADXgM3AztaSI4IKMjZwBjuDtjoeJDfp4Ip7hpFCOBXAt5OU+Ky001c7UM+KG3M5ALXkwFpo5vgTCiI+uXGeAQA)

## Using recursive unit interval segmentation

Shooting intervals of different divisions of the unit line segment on top of each other recursively

[Code](https://www.typescriptlang.org/play?#code/PQKhCgAIUglBTADgJ3gZ3gOwC5sgQ0mX0wHN5IB7TSbACwoFdMBLbSFneZAN3wBsoIYOGwBPRBQCSXXgMgBeSAG1MjALYAjbgBpIardwC64cKAjRIAcRY8skAAaYHetC3WN++bBWSV+-JykBI4AJs5UmADG8AB0QkKQACoMkIiUaG6a-BSUjNhRlOroBKi0qRjslABm+t6MxPx41X7qkACMtJT6HNH8jG528dAihZho7KGKkAAUmABc+hrayACUigB8kACy3nSx1fyUlMhzlrv0scSYoUUzq+sA1B0A3KbmiQAy8Oz0TKzsTg+OT8SDaSAYUjFLhTIHdBzqBwQ+BQrC4Ki1eAAR0Y8jcAC94DpEl5tKC-sjUThmq0Ol1HIjhjBEil7KRbPY0EUKE4kdRyv82L1gXx+Ho8thEPlIAB3OgsKJ0SnQqq1BFIoVk6ikPDYShM0bUCaQFpFACqAIAcnqAMoolVobbTGbqRYGFbrBRbOZu5bcT1bADeUA4tTOCgjkAADOtUNgGjR2m9IEQfgmdntYjEWPwzjB1Ks3gBfd5gRI2Ow0QihFhEyDqfCIEJuMg5VNoTy-boU5hCoHcUVCQ3jdim9QAEWtlBkIvkSh9S0Ma02kGDKbGxpr8AQHf47CUoTmhdM66N7COMu4ACE8jdnVud53IABaDrrGAzTrAfTH08jyCMIgkjIDezBTEoF7XreUzPJ+kDfpgx4hnG6bKJBIHQXogHAaBNxGMWpYWDAFb2CQwoDvIJBTNWtYQiwhLEpYmD4MgfgygK5EggBLbBIQPFtn4bY1BxW5DuAG7sMxrGUDKM4UfwADqbB0JOzoLIuHorjM-YgosckgqsemyKKK5rvB34pCweDkJg3DeCUhC2exvaAsZAghhJKicLZyCfDJui9D5ZpAcY0xjpOer6aKR5vCGwDfle0qXvo8DwFMer1o2HCuRleTIJA8AAB5WdgQScYOf7GlEDSoDgUUCDa9EUEoOmiso7RGC+5UCMoUb4R5Z4pTKfmXhhYHTK1PV9ZAsHedwI3cJY1WsWi9X8I1hK-pAnlOcFOHQRNbn8L1nWzZgQUhflMDLbV2BrRt8BISmKHIDQqjwMN-ljTcei7ZduGhP1JZmGWlgkVWYTOK47iePZHESoUxR4MJhAOKEiJiZ5bgeF4PjbDKymWs6roaQF6nuv6plxd+CnwAA5AE3EUIQ8aIG2GXYMQUQANYhNc5CRBxLndYIKY5Dl8lGbOoJKL1egdbFlXsA2iBJJQ45OkoY4WmwU52lSuDbC6W2eSrABirSqUoUlsWtSn0JOMUnuZkAyOUVmQEclBNslqCSPZoT8GIdTSexeVUPkUoSyC1OQBapWgmweDoQQd7YYtmjQc0QoE-QnAcWg+DFMqaIYmEGMpnKOYUC6jZqxr2lHSd6wAISRir9dG5Nx0dQ8q4him3fTObluWo30tbcDz1pq9mWq+rXdN31x5FrFHyWAAgrQ6CqiJJXICwmj5Cw-Io3ROMB5ANYxIkiQAPKR-keCEKghTIFMcrcBQ8D4IqkDc-AYOHsaK+HQJ2RiMAqIFV-kqUUjAKAezoDJDEPgaD0G8O2J8lAojLTSpjQaPhjTWw+pADerF8BiE-FGahMYQwHBzLmWhKZYgqxmPcFc2NYZ41znQMeAA2PQAAWB4dDUChEYDEAAPAgN+oRJEU2QL9P0yANgbBmAPWYv8oh6BugGWYgZYiGK0XoZQN0jCLBmFo0xNVOoAH5bHRieB0IsqxGIplXCWFMSF14wCkLUCkhDAR4A7Dg9AaBqieD0D-P+cCKBoCQZ4KY4I-CMFIHQIOBUcTuRGOJI0-g4hHFIDMQJx4gA)
