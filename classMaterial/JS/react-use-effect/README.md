# Performance 

### 1. Parent refresh will lead to children refresh
### 2. Children refresh will not affect Parent or other siblings
### 3. Use React.memo() or hooks (useCallback/useMemo) to prevent re-rendering


# React's Component Lifecycle

### 1. Intialization/Mounting
### 2. updating
### 3. Unmounting

# useEffect (useLayoutEffect)

### useEffect (callback function, [dependency])

side effects:

1. timers (setInterval, setTimeout) -clean up
2. add event listener - clean up
3. fetch data
4. updating/measuring DOM
5. set/get value from your localStorage
6. ... Some effects need clean up to avoid memory leak

#### dependency []

1. when the dependency is empty[], componentDidMount
2. when the depdency is not empty, callback run is depending on the changes of dependencies
3. when there is no dependency, componentDidMount + componentDidUpdate (make no sense)

