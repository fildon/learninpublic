# What is Recursion?

https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABBOMwGEAWBDMBzAUwAoU0BnALkTBAFsAjAgJwG0BdAGkW1rnCio0GzAJSC6jJogDeAKESIA9IsQBJYN179EMMogBezOIiiZmBHXrDGA7nCYBrE8YAmcAISIA6hexMLbmAE7vI6GkQ8fGBQiAC88YgADCKI-lAgTEiJANyyocqIAIJa0ZbUCAC0hkxwAHT1iDYEAOQANq2IZFB+MTYwpiZmiK1+hF3IqGD1taEoYOMjTGNQ6JMAYjBM47GILNOk82y1ZPZQRBFc9CmxAHyI9IgV3CJ5CsrTTcNwcAAOgzUgPCYRAEbAQYEHbhgFypAgQDJkGAANwIrQAnogQGQLP1nLCXCAIBZTMS4N0OpFtP5aNg0HhQsB7IgiK0CDEYHEktkdIgADzDUYELqrNAbLZQWqs-CmbkwADUcpScgUCjm40hO0WyxFYDFXRYMDYuVCbxUPkQtCxUDAzRiWN8EzQYR07L0UG+9xg9JVzpIkz5O0p0SVrx9ShUABUhv54VtkRYINh2vjCULBhZqbSwHTNFEYu7OnBWijLiAYkmTtwXC49ABGPEkqFkJpMGZhibzGIxhHxgBKQpArRiOwOWFwhD95C4QZiTwOKTliFrxvbBXU6dhscRKOQSY6jPAMOshdaZfgSFxdkHMMYzIq9cXteuCUS00LjRxeGs-lhZEHUD0OANGqOoTRVApCjANFTBzPB-GwKBmEGXADCMMpsE6QkiTIMhQA6bs4x3bE-HBX9-zbMMYHCAjtwIfs-yHRA7mSWF0kyTcexRej-1yH0AF9QgE-IVAAOQQCwgMQPgpBo+NOlBJhwTTP8ICJAgXHUt9jxOU9YAQCZr3uCwD2hCi0gyJB71yPjjUUAAqOz5DsxAAFEAA8eB+VklwoPJVDAH4yyoA49B2Fhaw4AAmDgAFZOFzbQdlrWtZAAeTLQKBEQABmWR3K83AEPPKhks5GLEEXcrHzydzPO8yLfNkfzMuCyZQt2SL4pnTlcvSqAWseFK8o82gvIsbLGuaoLHXmTlwq6kphySNKMumxJXjsxQ8jVIsCElOA8EnDAcHwYhwqi2L4uSkQXh21l9sO0cTonFhOq4bKbtkO69taA6jrHU6iHmrhkheIA

Rupert ◆ 🚀 — Today at 16:59
Getting comfy with recursion really helps
Although it is rarely useful in professional work I find 😄
Especially since JS doesn't have tail-recursion, so it'll always suffer from call stacks blowing up
But there are lots of puzzles like that that can be expressed most easily using recursion
Jody — Today at 17:08
Trying to explain recursion vs iteration to a classmate right now
I almost feel like it was cruel for therm to drop recursion 3 weeks into an Intro to programming class
🚀 — Today at 17:16
So looking at this I am performing these steps

- Create your function
- add an if statement, if the amount is 0, then its done.
- Sort the coins array by ascending
- Loop over the array [5, 2, 1]
- First loop result = 5
- Second loop result = 5
- Third loop result will look at 5 (too high), 2 (too high), 1 (perfect)
- The if statement is in place so we dont use the coin if it is too big (ie on the 3rd loop, using 5)
- so the recursiveResult is taking the coin value from amount, so first loop 11-5. Then + 1 adds to the result
- Next amount of coin (5) , take away from the current value which is 6 (11-5) and now leaves the amount at 1 . This adds 1 to result.
  -Next amount of coin (that doesn't go too high) is 1, loops through 5 (wrong), 2 (wrong), 1 (correct). This adds add to result.
- recursiveResult is now 3, so return 3.
- if not, then the answer is incorrect and return -1
  Rupert ◆ 🚀 — Today at 17:20
  Correct
  But I wouldn't even think in this much detail
  The trick with recursion is not even having to think about the "depth"
  You can almost always think about recursion as "do some work... and then recursively repeat"
  In this case we represent the "some work" as "using" a coin to reduce the remaining amount
  But we keep track of the number of coins used by +1 on the result
  We try every coin in the loop because we don't know which is the "correct" coin to use
  So our "do some work" is more like "try every possible combination of work that can be done"
  Recursion will always work so long as you have a base case (e.g. when the amount is zero) and some way of getting closer to the base case (getting closer to zero)
  You can express this puzzle then as:
  "For any coin available... if the solution for amount - coin is N... then the solution for amount is N+1"
  In mathematics you would call this an inductive statement
  (and surprise! The mathematics of induction and recursion are very very closely related)
  🚀 — Today at 17:27
  Brilliant, yeah so those last few steps I wrote are basically done and not needed to be worried about, its more to get it right in my head to speak about it
  Rupert ◆ 🚀 — Today at 17:27
  Yeah, and I think that's why people find recursion so hard to think about
  It's so tempting to get sucked into thinking all the way down the stack, but once you start doing this, it's like trying to think through a whole maze
  When really... as long as you can think in terms of an inductive statement you can express it much more simply
  🚀 — Today at 17:29
  Yep that's it
  Rupert ◆ 🚀 — Today at 17:29
  It's like if I taught you to sing "99 bottles of beer on the wall"
  🚀 — Today at 17:29
  Overthinking it like
  Rupert ◆ 🚀 — Today at 17:29
  And then asked you "will it get to zero?"
  Overthinking recursion is like actually having to sing the whole thing to find out
  When really you can just say "well it goes down by one every time... so yes it'll get there eventually"
  You don't actually have to think about the whole process... but instead think in terms of a rule... which gets you closer to the end... then you know that as long as that rule keeps getting applied it must get to the end
  Even without you having to think about every single step on the way
  🚀 — Today at 17:31
  That's a great way of thinking about it to be honest
  Rupert ◆ 🚀 — Today at 17:32
  Of course sometimes it is more complex, because maybe the "rule" has some conditions, or multiple possible paths it can take... and that's fine, we can have conditions in our recursion (as in my coin solution) and we can try multiple paths (also in my coin solution 😄 )... but the fundamental way of thinking about recursion remains the same
  (O and maybe there is no solution at all! So you need a way to "bail out" of the recursion if needs be (e.g. the return -1 in the example above if all our coins fail to find a recursive result))
  🚀 — Today at 17:35
  yeah like the second answer, be good to have both options there to show
  Rupert ◆ 🚀 — Today at 17:36
  Starting to think I should write a blog post about this 😄
  Since I've already written so much here, and it's a pretty common thing for people to want to learn more about
  🚀 — Today at 17:37
  Well it has definitely eased my nerves a lot
  When researching this actual question I found some blog posts but they are all carbon copies of themselves and answering a LeetCode answer so it's hard to get a more in depth answer
  Rupert ◆ 🚀 — Today at 17:40
  Yeah, I think there's a big problem with tech blogging having so many junk posts
  It can be really hard to find anything that really gets to the heart of complex issues
  🚀 — Today at 17:41
  Absolutely, thats why Discord is such a great tool
