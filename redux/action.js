let state = 0;

function updateState(state, action) {
  //it doesnt update state it return new state
  //it is kind of reducer
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else return state;
}

const incrementAction = { type: "INCREMENT", amount: 3 };
const decrementAction = { type: "DECREMENT", amount: 5 };

state = updateState(state, incrementAction);

console.log(state);

state = updateState(state, decrementAction);

console.log(state);
