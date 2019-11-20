# redux

whole state as single object
state tree is read only, any time you want to change state you need to dispatch (отправлять) an action, action -- js object describing the change (represebtation of change of that data), state -> minimal representatiof of data

**structure of action** type `property required`

```js
[object Object] {
    type: "ICREMENT"
}
```

*pure and inpure function*
if you call function with same arg you will returen the same result
impure function make call database, has side effect

**REDUCER** -> takes previous state and action -< returns the next state **HOW**
state mutations need to be described as pure function that takes previous state and action to be dispatched


ACTIONS -> send data from app to store, only `describe` what happened, not how state is changed **WHAT**
`action creators` returns an action 