# David Khourshid - Microsoft

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
