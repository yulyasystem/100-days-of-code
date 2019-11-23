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

const incrementAction = { type: "INCREMENT", amount: 10 };
const decrementAction = { type: "DECREMENT", amount: 5 };

class Store {
  //restrict access to state via updat method
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
  }

  get state() {
    return this._state;
  }

  update(action) {
    this._state = this._updateState(this._state, action);
  }
}

const store = new Store(updateState, 0);

store.update(incrementAction);

console.log(store.state);

store.update(decrementAction);

console.log(store.state);
