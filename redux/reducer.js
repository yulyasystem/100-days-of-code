let state = 0;

function updateState(state, action) {
  //it doesnt update state it return new state
  //it is kind of reducer
  if (action === "INCREMENT") {
    return state + 1;
  } else if (action === "DECREMENT") {
    return state - 1;
  } else return state;
}

state = updateState(state, "INCREMENT");

console.log(state);

state = updateState(state, "DECREMENT");

console.log(state);
