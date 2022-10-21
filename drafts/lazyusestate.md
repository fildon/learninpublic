# Lazy useState

🚀 — Yesterday at 23:16
Hi everyone, I am a beginner and just learned that useState() hook will run every time when re-render and so we need lazy initialization to optimize it, so my question is why not design it to be lazy initialization in the first place?
Rupert ◆ 🚀 — Today at 08:57
Because it literally can't be. It's a limitation of the language.
Let's get very precise about what we mean:
Here is an example of useState, initially set to some primitive value:
const [count, setCount] = useState(0);
Every time this code runs (i.e. every time the component renders) the whole expression will be parsed
As far as JS is concerned, useState is just a function and 0 is just an argument
So JS will parse the argument and pass it to that function
React will receive the argument and internally do something like "I don't actually need this value, because this is a rerender, so I'll ignore this argument and return the current state I have associated with this component"
Here is an example in which useState is passed an expensive to compute expression:
const [count, setCount] = useState(findAHugePrimeNumber());
The exact same sequence of things will happen
JS as a runtime will parse the whole expression including the argument
At no point does React have the opportunity to tell JS not to do this
But once the run time has computed findAHugePrimeNumber React will ignore that result (assuming this is a rerender)
But by that point it is already too late and the cost of that huge computation has already been incurred
Finally here is an example which uses lazy intialization:
const [count, setCount] = useState(() => findAHugePrimeNumber());

Once again the JS runtime will do exactly the same thing
EXCEPT in this case the 'argument' to useState is an anonymous arrow function
JS will parse it and then pass a reference to this anonymous function to useState
But notice that just parsing the definition of a function (anonymous or otherwise) is not the same as running it
So findAHugePrimeNumber has not been invoked yet
React can now choose whether to invoke the function reference or not. It'll do it on the first render, but choose not to on all subsequent renders
But as with all the other examples the argument expression was already parsed and executed by the runtime
It's just that the expression happened to be an anonymous function, and a function definition can be parsed without executing it
Conclusion:
React cannot make the implementation of useState lazy by default
Since it is not in control of how and when argument expressions get parsed. That is controlled by the runtime.
However by supporting function arguments, it can take advantage of the fact that parsing a function is not the same as executing a function.
In this way any expensive computation can be "hidden" inside the function definition
React can then choose to invoke the function argument it is passed or not. But it can only make that choice in the case that the argument was a function
