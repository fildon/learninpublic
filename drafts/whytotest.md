# Why to testing matters

## TODO Slack thread inspiration

A
2:16 PM
Re testing and coverage - I’ve added the following ignore paths for test coverage:
“<rootDir>/src/infrastructure/(config|diConfig).ts”,
“<rootDir>/src/infrastructure/errors/\*(Exception|Error).ts”,
“<rootDir>/src/server.ts”
====
Config files / Exceptions and Errors because they don’t contain logic and are tested indirectly already by things exploding is misconfigured.
server.ts because I have no idea how to test it
2:16
Do you have any ivory-tower observations about this?

Rupert Foggo McKay
:teacher::skin-tone-2: 2:18 PM
Nope don't do this
2:18
The test coverage thresholds are not 100%

A
2:18 PM
85%

Rupert Foggo McKay
:teacher::skin-tone-2: 2:19 PM
We accept that there are going to be things that are very difficult, even impossible to test:
sources:
https://en.wikipedia.org/wiki/Rice%27s_theorem
https://thatjdanisso.cool/is-this-true
2:19
However...
2:19
We must not play the numbers by ignoring code we can't test
2:19
See also:
https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell

A
2:20 PM
This essentially brings down all the stats
Screenshot 2022-09-02 at 15.19.40.png
Screenshot 2022-09-02 at 15.19.40.png

Rupert Foggo McKay
:teacher::skin-tone-2: 2:20 PM
Yes that's good

A
2:20 PM
Jest: “global” coverage threshold for statements (85%) not met: 83.6%
Jest: “global” coverage threshold for branches (55%) not met: 51.14%
Jest: “global” coverage threshold for lines (85%) not met: 83.29%
Jest: “global” coverage threshold for functions (85%) not met: 81.65%

Rupert Foggo McKay
:teacher::skin-tone-2: 2:20 PM
The stats must reflect reality

A
2:20 PM
Well that is true, yeah

Rupert Foggo McKay
:teacher::skin-tone-2: 2:20 PM
The aim of our work is not to fix the stats
2:20
But to fix the reality
2:21
That last link I posted is on recognising the tension between the testable and the untestable, and how we can put a hard line between the two
2:21
Typically when projects fail to distinguish the two, it is because layers of abstraction have become tangled, and soon nothing is testable
2:22
But the author here embraces that some things are untestable and having done so clearly demarks where they live within the codebase so much so that it forms the primary basis for their entire architecture scheme
2:22
So to you right now, who wants to get stuff done:
You will have to write tests elsewhere
2:23
Actually lets put that more directly and plainly

A
2:23 PM
“gtfo with your tests”? :stuck_out_tongue:

Rupert Foggo McKay
:teacher::skin-tone-2: 2:23 PM
If it is testable then test it
If it is not testable...
Extract what can be made testable then test it
Minimize the scope/extent/logic of the untestable

A
2:24 PM
If it is testable then test it
that does make sense.

Rupert Foggo McKay
:teacher::skin-tone-2: 2:26 PM
If you do this process faithfully and completely you will find that the set of untestable functions is exactly equivalent to the set of non-pure functions. Academically this is anything which writes to external state, or reads from external state.
In practice this tends to be things like:
Printing to the screen!
Taking user input!
Reacting to the passing of time!
etc.
These things are common, but the amount of code/files/logic dedicated to them in any system should be very small

A
2:27 PM
That’s very insightful. Is it still OK to be a bit resentful because I can’t merge my beautiful “refactor modules” PR yet?

Rupert Foggo McKay
:teacher::skin-tone-2: 2:27 PM
Oh 100% (edited)
2:27
Resent away
2:28
But the act of maintaining a quality codebase, is about constant continual little efforts to keen things nice

A
2:28 PM
https://www.youtube.com/watch?v=gf_IH3rj0hY
YouTubeYouTube | chlcxz
muttley mumbling

2:28
Alright. I’ll resent and do the right thing :slightly_smiling_face:
:party_parrot:
1

Rupert Foggo McKay
:teacher::skin-tone-2: 2:29 PM
If we allow a little slip here or there:
We start to ignore coverage in foo.ts
We lower the coverage requirements by only 1%
Sooner or later these things add up, and before you know it, nothing is tested and all productivity grinds to a halt
2:29
So it is better to take a little resentment constantly, than have to bin the project every two years because quality wasn't baked in from the beginning

A
2:30 PM
rock smolder (2 MB)
https://media0.giphy.com/media/J53wyiG57vjm6RTqnz/giphy-downsized.gif?cid=6104955e9m02360u63x1z7obb4a63jefhyi2yjz0dubxtjqc&rid=giphy-downsized.gif&ct=g

Posted using /giphy | GIF by Jumanji: The Next Level

Rupert Foggo McKay
:teacher::skin-tone-2: 2:31 PM
What's your branch by the way? I'll bet I can find ways to test those errors (edited)
2:32
Pretty sure that second column is branch coverage and the others are probably statements/functions/lines?
2:32
They probably just need to ever be created during a test

A
2:32 PM
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
2:32
I haven’t pushed up yet, but I guess I should

Rupert Foggo McKay
:teacher::skin-tone-2: 2:32 PM
Yeah and for the errors it'll be 0/0 branchs = 100%
2:33
So really it is just that the errors files are never instantiated at any point during any test
2:34
One other thought about the resentment... just be glad I'm not enforcing mutation testing:
https://en.wikipedia.org/wiki/Mutation_testing
https://stryker-mutator.io/
2:34
Which is way more rigorous

A
2:35 PM
nah, don’t worry about the resentment. It works out great for me - I get to blame somebody else and become better. What’s not to like?!
:party_parrot:
1

2:35
Let me get my git shit together so I can push the branch up
2:36
Also, Is it okay if I delete all the example modules? Like login and user?
2:36
But want to get a 100% ok on this one

Rupert Foggo McKay
:teacher::skin-tone-2: 2:36 PM
Yup. Delete code that's not used

A
2:39 PM
https://github.com/lokalise/ota-service/tree/feature/refactor-modules
2:39
The errors are actually easy to test - just throw a new error and verify type/message or something. It just feels a lot like “testing for the sake of testing”

Rupert Foggo McKay
:teacher::skin-tone-2: 2:40 PM
How much time do you have to talk about this :smile:

A
2:40 PM
:no_mouth:
2:40
:smile:

Rupert Foggo McKay
:teacher::skin-tone-2: 2:40 PM
You are on dangerous grounds tempting me to go full lecture mode on what it means for a program to be correct

A
2:40 PM
Got the hint, back to work it is :slightly_smiling_face:

Rupert Foggo McKay
:teacher::skin-tone-2: 2:40 PM
I can't really stump up the energy on a Friday though, although I do want to
2:40
But I can at least give you the short story
2:42
We test code because we want to prove it is correct. If it is not tested, then we do not know if it is correct.
Some code is untestable. Sometimes this is because it is logically impossible to prove it is correct (c.f. the halting problem)
In this case, we have some errors. They don't do much. No ifs, no loops... but it is still quite possible for them to be correct or incorrect
2:42
And so we would still like a test to prove which they are... correct or incorrect
2:44
Admittedly testing at such a low level as "does this constructor which takes foo and puts it on field foo really do that?", is tantamount to testing that the language primitives work as documented...
Which is why it is increasingly popular these days to aim tests at higher levels of abstraction (integration/e2e/etc.) (edited)
2:44
But the broad concept remains the same. "Is this system correct?"
2:45
Perhaps it would be most valuable in this case to write a higher level test which deliberately induces an error, and to confirm that the full flow of error handling ends up as expected.

A
2:45 PM
Yeah, scoping tests is important. If you have a test that’s making sure you call a specific API, you shouldn’t also test whether the service that has the API works by making another call “Hey, did I actually insert any data?”
:white_check_mark:
1

Rupert Foggo McKay
:teacher::skin-tone-2: 2:45 PM
The low level error will have been covered along the way... but without us having to scrutinize the language level primitives

A
2:45 PM
Yeah, I’ll probably make the code throw some errors.

Rupert Foggo McKay
:teacher::skin-tone-2: 2:46 PM
All that said... I would still rather have the 'dumb low level test' than no test at all
