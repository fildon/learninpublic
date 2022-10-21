# Theory of Correctness

Are my tests good enough?

What does it mean for an algorithm to be correct?

[Wikipedia: Correctness](<https://en.wikipedia.org/wiki/Correctness_(computer_science)>)

```slack
N
 Today at 10:49 AM
I had a thought the other day following our chat about test coverage on Friday.. Do we have a metric to test for coverage of types and not just coverage of code? I was playing around with the code coverage check and found that I could get 100% coverage with really average tests.. An example of what I mean this would be:
Testing the following:
if (!value) {
    return null;
}

return value + 1;
I found that the following tests would result in 100% test coverage:
TEST 1: when value is null/undefined the function should return null
TEST 2: when value is a number the returned value should be most more than the value of value
But there are missing cases in this because when value is 0 the function will return null.. This is possibly not something we can test for, but knowing that value is numeric would help to point out that the tests are incomplete..
I don't have a solution/suggestion (apart from adding a lint tule to block if (!value) { :wink:) it's just something that I thought I would start the discussion :thinking_face:
25 replies

Rupert Foggo McKay
:mag:  20 minutes ago
You have spoken the magic words to be inducted into the secret society of people aware of mutation testing
:magic:
2

Rupert Foggo McKay
:mag:  20 minutes ago
https://stryker-mutator.io/

Rupert Foggo McKay
:mag:  19 minutes ago
Test Coverage as usually done checks which lines were run during which tests... but not that those lines were "correct"

Rupert Foggo McKay
:mag:  19 minutes ago
In order to establish correctness we require an invariant

Rupert Foggo McKay
:mag:  19 minutes ago
Let's use the following invariant:

Rupert Foggo McKay
:mag:  19 minutes ago
Given some "perfect" code and corresponding "perfect" tests, any (semantic) change to the code should yield at least one test failure (edited)

Rupert Foggo McKay
:mag:  18 minutes ago
Then we could assess the "perfection" of our code by confirming or denying this invariant

Rupert Foggo McKay
:mag:  18 minutes ago
In practice by mutating the source code, and confirming that at least one test fails

Rupert Foggo McKay
:mag:  18 minutes ago
If no test fails, then we say that mutant was not "killed" by our tests

Rupert Foggo McKay
:mag:  17 minutes ago
And hence that we need more thorough testing for that bit of code

Rupert Foggo McKay
:mag:  17 minutes ago
This is what mutation testing is

Rupert Foggo McKay
:mag:  16 minutes ago
Warning however, the size of the set of all valid mutants for a given project is grows linearly with respect to the size of the source code, and given that to confirm the survival of each individual mutate takes a full test suite run... mutation testing on anything more than tiny projects takes a very very long time (edited)

Rupert Foggo McKay
:mag:  16 minutes ago
But hey... the end result of this process is near total confidence in your code, way more than typical "line coverage" could ever give

N
  12 minutes ago
baby shock (1 MB)
https://media4.giphy.com/media/ph6ewybUlGbW8/giphy.gif?cid=6104955eg1nl5xy93b1qpvo1mkqj4c1zzzwjgw7g6lwxfh7f&rid=giphy.gif&ct=g

Posted using /giphy
:rolling_on_the_floor_laughing:
1

Rupert Foggo McKay
:mag:  11 minutes ago
But to your type coverage suggestion though... I would say the process of type checking during compilation is the test coverage

N
  11 minutes ago
Something about the number of replies and the fact that you name has a little yellow warning thing next to it took me off guard :rolling_on_the_floor_laughing:

N
  11 minutes ago
I follow what you are saying though

N
  10 minutes ago
Change back to slack and see this :rolling_on_the_floor_laughing:
image.png
image.png

Rupert Foggo McKay
:mag:  10 minutes ago
Ah sorry, that was while I was releasing :slightly_smiling_face:

N
  9 minutes ago
All good :grin:

Rupert Foggo McKay
:mag:  4 minutes ago
See also https://en.wikipedia.org/wiki/Correctness_(computer_science)

WikipediaWikipedia
Correctness (computer science)
In theoretical computer science, an algorithm is correct with respect to a specification if it behaves as specified. Best explored is functional correctness, which refers to the input-output behavior of the algorithm (i.e., for each input it produces an output satisfying the specification).Within the latter notion, partial correctness, requiring that if an answer is returned it will be correct, is distinguished from total correctness, which additionally requires that an answer is eventually returned, i.e. the algorithm terminates. Correspondingly, to prove a program's total correctness, it is sufficient to prove its partial correctness, and its termination.  The latter kind of proof (terminat… Show more

Rupert Foggo McKay
:mag:  3 minutes ago
Although crucial to software quality and widely deployed by programmers and testers, software testing still remains an art, due to limited understanding of the principles of software.

Rupert Foggo McKay
:mag:  3 minutes ago
As a science, Software Engineering is still a baby

Rupert Foggo McKay
:mag:  3 minutes ago
We are generally very bad at proving things in the domain of Computer Science

Rupert Foggo McKay
:mag:  2 minutes ago
Hence tests in practice should be understood as a heuristic for code quality, not a proof
```
