## react hooks

_state management and side-effects in function components_

In React side-effects are usually introduced in lifecycle methods (ComponentWillMount,ComponentDidMount). It could be fetching data or interaction with browser api.

```js
// side-effects in React function component with React Hooks
function MyComponent() {
  useEffect(() => {
    // add listener for feature 1 (setup)
    // return function to remove listener for feature 1 (clean up)
  });

  useEffect(() => {
    // add listener for feature 2 (setup)
    // return function to remove listener for feature 2 (clean up)
  });

  ...
}
```
(1) don’t use var anymore, because letand const are more specific

(2) default to const, because it cannot be re-assigned or re-declared

(3) use let when re-assigning the variable

git 
