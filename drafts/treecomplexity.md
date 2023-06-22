# Complexity is a Tree

Sounds like you have yourself a classic spaghetti react app
Recommend one of two approachs (probably both in practice):
Very tightly scope your work to exactly one file at a time. Don't even try to cognitively load any context about anything else.
Very tightly scope your work to the top most logical unit of abstraction, i.e. build config. Don't get sucked into the details of any "leaf" node of the logic (i.e. actual components)
In between those two is the complexity hell
This feels like the seed of a blog post :ablobthinking:
Yeah. Rough hypothesis. All code-flow / complexity in an application can be modelled in terms of a tree. The root of the tree is your entry point, and the leaves are dumbass components. Considering only the root is simple. Somewhere something mounts starts a process. Easy. Considering only a single leaf is simple. A typical component of the form: const MyComponent = () => //... can be understood and tested with confidence. (Caveat's abound here about bloated components, React contexts, and other kinds of global state).
But the path from entry point to component in any sufficiently large application is inevitably an adventure through spaghetti hell.
