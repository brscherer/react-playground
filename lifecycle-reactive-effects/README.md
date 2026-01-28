# Lifecycle of Reactive Effects - Proof of Concept

Effects have a different lifecycle from components. 

Components:
* Mount
* Update
* Unmount

Effects:
* Start synchronizing
* Stop synchronizing

This cycle can happens multiple times if the Effect depends on props and state that change over time.


## The lifecycle of an Effect

Effect describes how to synchronize an external system to the current props and state. It happens more or less often as your code changes.

When we set a value in Effect dependencies and this value "changes", React will:

1. Call the cleanup function of that effect with old value (Stop synchronizing)
2. Run the Effect with the new value provided during this render (Start synchronizing)

This is called re-synchronize.

When component is unmounted, React will stop synchronizing the Effect one last time.


