let state = 0;

function updateState(state, action) {
  //it doesnt update state it return new state
  //it is kind of reducer
  if (action.type === "INCREMENT") {
    return { count: state.count + action.amount };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - action.amount };
  } else return state;
}

const incrementAction = { type: "INCREMENT", amount: 10 };
const decrementAction = { type: "DECREMENT", amount: 5 };

class Store {
  //restrict access to state via updat method
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () =>
      (this._callbacks = this._callbacks.filter(cb => cb !== callback));
  }
  update(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(callback => callback());
  }
}

const initialState = { count: 0 };

const store = new Store(updateState, initialState);
const unsubscribe = store.subscribe(() =>
  console.log("State changed!", store.state)
);
store.update(incrementAction);

store.update(decrementAction);
